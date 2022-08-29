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
import { getQuantiles } from './utils'

// turn raw data into objects with computed quantile levels
const processData = (
    data: Array<QuantileDataItem>,
    accessors: Array<AccessorFunction<unknown>>,
    quantiles: FiveNumbers
): Array<QuantileProcessedDataItem> => {
    return data.map((seriesData, index) => {
        const summaries = accessors.map(f => {
            const raw = f(seriesData) as number[]
            return {
                values: getQuantiles(raw, quantiles) as FiveNumbers,
                extrema: getMinMax(raw),
                quantiles,
            }
        })
        return {
            id: seriesData.id,
            index,
            summaries,
            values: summaries.map(summary => summary.extrema).flat(),
        }
    })
}

// turn processed data into view-specific coordinates
const prepareData = (
    data: Array<QuantileProcessedDataItem>,
    indexScale: BandAxisScale,
    valueScale: LinearAxisScale,
    horizontal: boolean,
    WidthAndGap: [number, number]
): Array<QuantilePreparedDataItem> => {
    const [width, gap] = WidthAndGap
    return data.map(seriesData => {
        let bandStart = indexScale(seriesData.id) - indexScale.bandwidth() / 2
        const summaries = seriesData.summaries.map(summary => {
            bandStart += width + gap
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
            summaries,
        }
    })
}

export const isQuantileProcessedData = (
    data: Array<unknown>
): data is Array<QuantileProcessedDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        if (!('id' in item && 'index' in item)) return false
        return 'summaries' in item
    })
    return result.reduce((acc: boolean, v: boolean) => acc && v, true)
}

export const Quantile = ({
    // layout
    position = [0, 0],
    size = [1, 1],
    units = 'relative',
    anchor = [0, 0],
    padding = [0, 0, 0, 0],
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
    const { disabledKeys } = useDisabledKeys()
    const seriesIndexes: Record<string, number> = useMemo(() => getIndexes(data), [data])

    // collect raw data into an array-based format format
    const keyAccessors = useMemo(() => keys.map(k => getAccessor(k)), [keys])
    const processedData = useMemo(
        () => processData(data, keyAccessors, quantiles),
        [data, keyAccessors, quantiles]
    )

    const disabledKeysBools = useMemo(
        () => keys.map(k => disabledKeys.has(k)),
        [keys, Array.from(disabledKeys)]
    )
    const { scalePropsIndex, scalePropsValue } = getScaleProps(
        processedData,
        scaleIndex,
        scaleValue,
        false,
        autoRescale ? disabledKeysBools : Array(keys.length).fill(false)
    )
    const scaleX = horizontal ? scalePropsValue : scalePropsIndex
    const scaleY = horizontal ? scalePropsIndex : scalePropsValue
    const scales = createAxisScales({ ...dimsProps, scaleX, scaleY })
    const scaleColorProps = createColorScaleProps(scaleColor ?? theme.Colors.categorical)
    scales.color = createColorScale(scaleColorProps)

    const indexScale = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)
    const valueScale = horizontal ? (scales.x as LinearAxisScale) : (scales.y as LinearAxisScale)

    // compute spacings between (possibly grouped) bars
    const boxWidthAndGap = getInternalWidthAndGap(indexScale, keys, paddingInternal)
    const preparedData = useMemo(
        () => prepareData(processedData, indexScale, valueScale, horizontal, boxWidthAndGap),
        [processedData, indexScale, valueScale, horizontal, boxWidthAndGap]
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
