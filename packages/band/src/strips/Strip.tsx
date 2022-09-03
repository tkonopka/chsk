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
    defaultViewProps,
    getMinMax,
} from '@chask/core'
import {
    StripDataItem,
    StripPreparedDataItem,
    StripProcessedDataItem,
    StripProps,
    StripVariant,
} from './types'
import { StripPreparedDataProvider } from './context'
import { getInternalWidthAndGap, getScaleProps } from '../bars/utils'
import { getStripInternalOrder } from './utils'

// turn raw data into a minimal array-based format
const processData = (
    data: Array<StripDataItem>,
    accessors: Array<AccessorFunction<unknown>>,
    r: number,
    variant: StripVariant
): Array<StripProcessedDataItem> => {
    return data.map((seriesData, index) => {
        const summaries = accessors.map(f => {
            const raw = f(seriesData)
            if (!raw) return undefined
            if (!Array.isArray(raw)) return undefined
            return {
                value: raw as number[],
                internal: getStripInternalOrder(variant, raw as number[]),
                r: Array(raw.length).fill(r),
            }
        })
        return {
            id: seriesData.id,
            index,
            data: summaries,
            domain: summaries.map(summary => getMinMax(summary?.value ?? [])),
        }
    })
}

// turn processed data into view-specific coordinates
const prepareData = (
    data: Array<StripProcessedDataItem>,
    indexScale: BandAxisScale,
    valueScale: LinearAxisScale,
    horizontal: boolean,
    width: number,
    gap: number
): Array<StripPreparedDataItem> => {
    return data.map(seriesData => {
        let bandStart = indexScale(seriesData.id) - indexScale.bandwidth() / 2
        const summaries = seriesData.data.map(summary => {
            bandStart += width + gap
            if (!summary) return undefined
            const internalInterval = width / (summary.value.length - 1)
            const internalStart = bandStart - width - gap
            return {
                value: summary.value.map(v => valueScale(v)),
                internal: summary.internal.map(v => internalStart + v * internalInterval),
                r: summary.r.map(v => v),
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

export const Strip = ({
    // layout
    position = defaultViewProps.position,
    size = defaultViewProps.size,
    units = defaultViewProps.units,
    anchor = defaultViewProps.anchor,
    padding = defaultViewProps.padding,
    // content
    data,
    keys,
    variant = 'default',
    r = 3,
    horizontal = false,
    autoRescale = true,
    paddingInternal = 0,
    scaleIndex = defaultBandScaleSpec,
    scaleValue = defaultLinearScaleWithZeroSpec,
    scaleColor,
    //
    children,
}: StripProps) => {
    const theme = useTheme()
    const { dimsProps, origin } = useView({ position, size, units, anchor, padding })
    const { disabledKeys } = useDisabledKeys()
    const seriesIndexes: Record<string, number> = useMemo(() => getIndexes(data), [data])

    // collect raw data into an array-based format format
    const keyAccessors = useMemo(() => keys.map(k => getAccessor(k)), [keys])
    const processedData = useMemo(
        () => processData(data, keyAccessors, r, variant),
        [data, keyAccessors, r, variant]
    )

    const disabledKeysBools = useMemo(
        () => keys.map(k => disabledKeys.has(k)),
        [keys, Array.from(disabledKeys)]
    )
    const { scalePropsIndex, scalePropsValue } = getScaleProps(
        processedData.map(d => d.id),
        processedData.map(d => d.domain),
        scaleIndex,
        scaleValue,
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
    const [stripWidth, stripGap] = getInternalWidthAndGap(indexScale, keys, paddingInternal)
    const preparedData = useMemo(
        () => prepareData(processedData, indexScale, valueScale, horizontal, stripWidth, stripGap),
        [processedData, horizontal, indexScale, valueScale, stripWidth, stripGap]
    )

    return (
        <BaseView
            role={'view-strip'}
            position={origin}
            size={dimsProps.size}
            padding={dimsProps.padding}
            originalData={data}
            processedData={processedData}
            seriesIndexes={seriesIndexes}
            keys={keys}
            scales={scales}
        >
            <StripPreparedDataProvider
                data={preparedData}
                seriesIndexes={seriesIndexes}
                keys={keys}
            >
                <LazyMotion features={domAnimation}>{children}</LazyMotion>
            </StripPreparedDataProvider>
        </BaseView>
    )
}
