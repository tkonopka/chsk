import { useMemo } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import {
    AccessorFunction,
    BandAxisScale,
    getAccessor,
    LinearAxisScale,
    useContainer,
    getIndexes,
    defaultBandScaleSpec,
    defaultLinearScaleWithZeroSpec,
    useDisabledKeys,
    useTheme,
    createColorScaleProps,
    BaseView,
    getMinMax,
    getMoments,
    defaultContainerProps,
    useCreateScales,
} from '@chsk/core'
import {
    FiveNumbers,
    DistributionDataItem,
    DistributionPreparedDataItem,
    DistributionProcessedDataItem,
    DistributionProps,
} from './types'
import { DistributionPreparedDataProvider } from './context'
import { getScaleProps, getInternalWidthAndGap } from '../bars/utils'
import { getQuantiles } from './utils'
import { isDistributionProcessedSummary } from './predicates'

// turn raw data into objects with computed quantile levels
const processData = (
    data: Array<DistributionDataItem>,
    accessors: Array<AccessorFunction<unknown>>,
    quantiles: FiveNumbers
): Array<DistributionProcessedDataItem> => {
    return data.map((seriesData, index) => {
        const summaries = accessors.map(f => {
            const raw = f(seriesData)
            if (!raw) return undefined
            if (isDistributionProcessedSummary(raw)) {
                return {
                    n: raw.n,
                    moments: raw.moments,
                    interval: raw.interval,
                    values: raw.values,
                    quantiles: raw.quantiles,
                    extrema: raw.extrema,
                }
            }
            if (!Array.isArray(raw)) return undefined
            const [mean, variance] = getMoments(raw as number[])
            const sd = isFinite(variance) ? Math.sqrt(variance) : 0
            return {
                n: raw.length,
                moments: [mean, variance] as [number, number],
                interval: [mean - sd, mean + sd] as [number, number],
                values: getQuantiles(raw as number[], quantiles) as FiveNumbers,
                quantiles,
                extrema: getMinMax(raw as number[]),
            }
        })
        return {
            id: seriesData.id,
            index,
            data: summaries,
            domain: summaries.map(summary => getMinMax(summary?.extrema ?? [])),
        }
    })
}

// turn processed data into view-specific coordinates
const prepareData = (
    data: Array<DistributionProcessedDataItem>,
    indexScale: BandAxisScale,
    valueScale: LinearAxisScale,
    horizontal: boolean,
    width: number,
    offset: number,
    gap: number
): Array<DistributionPreparedDataItem> => {
    return data.map(seriesData => {
        let bandStart = indexScale(seriesData.id) - indexScale.bandwidth() / 2 + offset
        const summaries = seriesData.data.map(summary => {
            bandStart += width + gap
            if (summary === undefined) return undefined
            return {
                n: summary.values.length,
                moments: summary.moments?.map(v => valueScale(Number(v))) as [number, number],
                interval: summary.interval?.map(v => valueScale(Number(v))) as [number, number],
                values: summary.values.map(v => valueScale(v)) as FiveNumbers,
                quantiles: summary.quantiles as FiveNumbers,
                extrema: summary.extrema.map(v => valueScale(v)) as [number, number],
                bandStart: bandStart - width - gap,
                bandWidth: width,
            }
        })
        return {
            id: seriesData.id,
            index: seriesData.index,
            data: summaries,
        }
    })
}

export const Distribution = ({
    container = defaultContainerProps,
    variant = 'grouped',
    data,
    keys,
    quantiles = [0.05, 0.25, 0.5, 0.75, 0.95],
    horizontal = false,
    autoRescale = true,
    paddingInternal = 0,
    scaleIndex = defaultBandScaleSpec,
    scaleValue = defaultLinearScaleWithZeroSpec,
    scaleColor,
    children,
    ...props
}: DistributionProps) => {
    const theme = useTheme()
    const { dimsProps, origin, innerSize } = useContainer(container)
    const { disabled } = useDisabledKeys(keys)
    const seriesIndexes: Record<string, number> = useMemo(() => getIndexes(data), [data])

    // collect raw data into an array-based format format
    const keyAccessors = useMemo(() => keys.map(k => getAccessor(k)), [keys])
    const processedData = useMemo(
        () => processData(data, keyAccessors, quantiles),
        [data, keyAccessors, quantiles]
    )
    const { index: indexProps, value: valueProps } = getScaleProps(
        processedData.map(d => d.id),
        processedData.map(d => d.domain),
        scaleIndex,
        scaleValue,
        innerSize,
        horizontal,
        autoRescale ? disabled : Array(keys.length).fill(false)
    )
    const xProps = horizontal ? valueProps : indexProps
    const yProps = horizontal ? indexProps : valueProps
    const colorProps = createColorScaleProps(scaleColor ?? theme.Colors.categorical, keys)
    const scalesContextValue = useCreateScales({ x: xProps, y: yProps, color: colorProps })
    const scales = scalesContextValue.scales
    const indexScale = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)
    const valueScale = horizontal ? (scales.x as LinearAxisScale) : (scales.y as LinearAxisScale)

    // compute spacings between (possibly grouped) bars
    const [boxWidth, boxOffset, boxGap] = getInternalWidthAndGap(
        indexScale,
        keys,
        paddingInternal,
        variant
    )
    const preparedData = useMemo(
        () =>
            prepareData(
                processedData,
                indexScale,
                valueScale,
                horizontal,
                boxWidth,
                boxOffset,
                boxGap
            ),
        [processedData, indexScale, valueScale, horizontal, boxWidth, boxOffset, boxGap]
    )

    return (
        <BaseView
            variant={'distribution'}
            position={origin}
            size={dimsProps.size}
            padding={dimsProps.padding}
            originalData={data}
            processedData={processedData}
            seriesIndexes={seriesIndexes}
            keys={keys}
            scalesContextValue={scalesContextValue}
            {...props}
        >
            <DistributionPreparedDataProvider
                data={preparedData}
                seriesIndexes={seriesIndexes}
                keys={keys}
            >
                <LazyMotion features={domAnimation}>{children}</LazyMotion>
            </DistributionPreparedDataProvider>
        </BaseView>
    )
}
