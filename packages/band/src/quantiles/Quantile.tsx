import { useMemo } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import {
    createAxisScales,
    createColorScale,
    AccessorFunction,
    BandAxisScale,
    getAccessor,
    LinearAxisScale,
    useView,
    getIndexes,
    defaultBandScaleSpec,
    defaultLinearScaleWithZeroSpec,
    useDisabledKeys,
    useTheme,
    createColorScaleProps,
    BaseView,
    getMinMax,
    defaultViewProps,
} from '@chask/core'
import {
    FiveNumbers,
    QuantileDataItem,
    QuantilePreparedDataItem,
    QuantileProcessedDataItem,
    QuantileProps,
} from './types'
import { QuantilePreparedDataProvider } from './context'
import { getScaleProps, getInternalWidthAndGap } from '../bars/utils'
import { getQuantiles, isQuantileProcessedSummary } from './utils'

// turn raw data into objects with computed quantile levels
const processData = (
    data: Array<QuantileDataItem>,
    accessors: Array<AccessorFunction<unknown>>,
    quantiles: FiveNumbers
): Array<QuantileProcessedDataItem> => {
    return data.map((seriesData, index) => {
        const summaries = accessors.map(f => {
            const raw = f(seriesData)
            if (!raw) return undefined
            if (isQuantileProcessedSummary(raw)) {
                return {
                    values: raw.values,
                    quantiles: raw.quantiles,
                    extrema: raw.extrema,
                }
            }
            if (!Array.isArray(raw)) return undefined
            return {
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
    data: Array<QuantileProcessedDataItem>,
    indexScale: BandAxisScale,
    valueScale: LinearAxisScale,
    horizontal: boolean,
    width: number,
    gap: number
): Array<QuantilePreparedDataItem> => {
    return data.map(seriesData => {
        let bandStart = indexScale(seriesData.id) - indexScale.bandwidth() / 2
        const summaries = seriesData.data.map(summary => {
            bandStart += width + gap
            if (summary === undefined) return undefined
            return {
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

export const Quantile = ({
    // layout
    position = defaultViewProps.position,
    size = defaultViewProps.size,
    units = defaultViewProps.units,
    anchor = defaultViewProps.anchor,
    padding = defaultViewProps.padding,
    // content
    data,
    keys,
    quantiles = [0.05, 0.25, 0.5, 0.75, 0.95],
    horizontal = false,
    autoRescale = true,
    paddingInternal = 0,
    scaleIndex = defaultBandScaleSpec,
    scaleValue = defaultLinearScaleWithZeroSpec,
    scaleColor,
    //
    children,
}: QuantileProps) => {
    const theme = useTheme()
    const { dimsProps, origin } = useView({ position, size, units, anchor, padding })
    const { disabled } = useDisabledKeys(keys)
    const seriesIndexes: Record<string, number> = useMemo(() => getIndexes(data), [data])

    // collect raw data into an array-based format format
    const keyAccessors = useMemo(() => keys.map(k => getAccessor(k)), [keys])
    const processedData = useMemo(
        () => processData(data, keyAccessors, quantiles),
        [data, keyAccessors, quantiles]
    )

    const { scalePropsIndex, scalePropsValue } = getScaleProps(
        processedData.map(d => d.id),
        processedData.map(d => d.domain),
        scaleIndex,
        scaleValue,
        dimsProps.innerSize,
        horizontal,
        autoRescale ? disabled : Array(keys.length).fill(false)
    )
    const scaleX = horizontal ? scalePropsValue : scalePropsIndex
    const scaleY = horizontal ? scalePropsIndex : scalePropsValue
    const scales = createAxisScales(scaleX, scaleY)
    const scaleColorProps = createColorScaleProps(scaleColor ?? theme.Colors.categorical, keys)
    scales.color = createColorScale(scaleColorProps)

    const indexScale = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)
    const valueScale = horizontal ? (scales.x as LinearAxisScale) : (scales.y as LinearAxisScale)

    // compute spacings between (possibly grouped) bars
    const [boxWidth, boxGap] = getInternalWidthAndGap(indexScale, keys, paddingInternal)
    const preparedData = useMemo(
        () => prepareData(processedData, indexScale, valueScale, horizontal, boxWidth, boxGap),
        [processedData, indexScale, valueScale, horizontal, boxWidth, boxGap]
    )

    return (
        <BaseView
            role={'view-quantile'}
            position={origin}
            size={dimsProps.size}
            padding={dimsProps.padding}
            originalData={data}
            processedData={processedData}
            seriesIndexes={seriesIndexes}
            keys={keys}
            scales={scales}
        >
            <QuantilePreparedDataProvider
                data={preparedData}
                seriesIndexes={seriesIndexes}
                keys={keys}
            >
                <LazyMotion features={domAnimation}>{children}</LazyMotion>
            </QuantilePreparedDataProvider>
        </BaseView>
    )
}
