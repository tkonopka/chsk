import { useMemo } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import {
    createAxisScales,
    createColorScale,
    AccessorFunction,
    BandAxisScale,
    getAccessor,
    LinearAxisScale,
    SizeSpec,
    useView,
    getIndexes,
    NumericPositionSpec,
    defaultBandScaleSpec,
    defaultLinearScaleWithZeroSpec,
    useDisabledKeys,
    useTheme,
    createColorScaleProps,
    BaseView,
    defaultViewProps,
} from '@chask/core'
import { BarDataItem, BarPreparedDataItem, BarProcessedDataItem, BarProps } from './types'
import { BarPreparedDataProvider } from './context'
import { getInternalWidthAndGap, getScaleProps } from './utils'

// turn raw data into a minimal array-based format
const processData = (
    data: Array<BarDataItem>,
    accessors: Array<AccessorFunction<unknown>>
): Array<BarProcessedDataItem> => {
    return data.map((seriesData, index) => ({
        id: seriesData.id,
        index,
        values: accessors.map(f => Number(f(seriesData))),
    }))
}

// turn processed data into view-specific coordinates
const prepareData = (
    seriesData: BarProcessedDataItem,
    indexScale: BandAxisScale,
    valueScale: LinearAxisScale,
    horizontal: boolean,
    stacked: boolean,
    barWidthGap: [number, number],
    disabled: boolean[]
): BarPreparedDataItem => {
    const [barWidth, barGap] = barWidthGap
    const zero = valueScale(0)
    let coords = seriesData.values.map((v, i) => {
        return disabled[i] ? zero : valueScale(v)
    })
    const bandStart = indexScale(seriesData.id) - indexScale.bandwidth() / 2
    const position: Array<NumericPositionSpec> = []
    const size: Array<SizeSpec> = []
    if (horizontal) {
        coords.forEach(v => {
            size.push([v, barWidth])
        })
    } else {
        coords.forEach(v => {
            size.push([barWidth, zero - v])
        })
    }
    coords = coords.map(v => v ?? zero)
    if (stacked) {
        if (horizontal) {
            let left = zero
            coords.forEach(v => {
                position.push([left, bandStart])
                left += v
            })
        } else {
            let offset = 0
            coords.forEach(v => {
                position.push([bandStart, v - offset])
                offset += zero - v
            })
        }
    } else {
        // not stacked
        if (horizontal) {
            let top = bandStart
            coords.forEach(() => {
                position.push([zero, top])
                top += barWidth + barGap
            })
        } else {
            let left = bandStart
            coords.forEach(v => {
                position.push([left, v])
                left += barWidth + barGap
            })
        }
    }

    return {
        id: seriesData.id,
        index: seriesData.index,
        position,
        size,
    }
}

export const Bar = ({
    // layout
    position = defaultViewProps.position,
    size = defaultViewProps.size,
    units = defaultViewProps.units,
    anchor = defaultViewProps.anchor,
    padding = defaultViewProps.padding,
    // content
    variant = 'grouped',
    data,
    keys,
    horizontal = false,
    autoRescale = true,
    paddingInternal = 0,
    scaleIndex = defaultBandScaleSpec,
    scaleValue = defaultLinearScaleWithZeroSpec,
    scaleColor,
    //
    children,
}: BarProps) => {
    const theme = useTheme()
    const { dimsProps, origin } = useView({ position, size, units, anchor, padding })
    const { disabledKeys } = useDisabledKeys()
    const seriesIndexes: Record<string, number> = useMemo(() => getIndexes(data), [data])

    // collect raw data into an array-based format format
    const keyAccessors = useMemo(() => keys.map(k => getAccessor(k)), [keys])
    const processedData = useMemo(() => processData(data, keyAccessors), [data, keyAccessors])

    const disabledKeysBools = useMemo(
        () => keys.map(k => disabledKeys.has(k)),
        [keys, Array.from(disabledKeys)]
    )
    const stacked = variant === 'stacked'
    const { scalePropsIndex, scalePropsValue } = getScaleProps(
        processedData,
        scaleIndex,
        scaleValue,
        autoRescale ? disabledKeysBools : Array(keys.length).fill(false),
        stacked
    )
    const scaleX = horizontal ? scalePropsValue : scalePropsIndex
    const scaleY = horizontal ? scalePropsIndex : scalePropsValue
    const scales = createAxisScales({ ...dimsProps, scaleX, scaleY })
    const scaleColorProps = createColorScaleProps(scaleColor ?? theme.Colors.categorical)
    scales.color = createColorScale(scaleColorProps)

    const indexScale = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)
    const valueScale = horizontal ? (scales.x as LinearAxisScale) : (scales.y as LinearAxisScale)

    // compute spacings between (possibly grouped) bars
    const [barWidth, barGap] = getInternalWidthAndGap(indexScale, keys, paddingInternal, stacked)
    const preparedData = useMemo(
        () =>
            processedData.map(seriesData =>
                prepareData(
                    seriesData,
                    indexScale,
                    valueScale,
                    horizontal,
                    stacked,
                    [barWidth, barGap],
                    disabledKeysBools
                )
            ),
        [
            processedData,
            horizontal,
            stacked,
            indexScale,
            valueScale,
            barWidth,
            barGap,
            disabledKeysBools,
        ]
    )

    return (
        <BaseView
            role={'view-bar'}
            position={origin}
            size={dimsProps.size}
            padding={dimsProps.padding}
            originalData={data}
            processedData={processedData}
            seriesIndexes={seriesIndexes}
            keys={keys}
            scales={scales}
        >
            <BarPreparedDataProvider data={preparedData} seriesIndexes={seriesIndexes} keys={keys}>
                <LazyMotion features={domAnimation}>{children}</LazyMotion>
            </BarPreparedDataProvider>
        </BaseView>
    )
}
