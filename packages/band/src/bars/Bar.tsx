import { useMemo } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import {
    createScales,
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
} from '@chsk/core'
import { BarDataItem, BarPreparedDataItem, BarProcessedDataItem, BarProps } from './types'
import { BarPreparedDataProvider } from './context'
import { getInternalWidthAndGap, getScaleProps } from './utils'

// turn raw data into a minimal array-based format
const processData = (
    data: Array<BarDataItem>,
    accessors: Array<AccessorFunction<unknown>>
): Array<BarProcessedDataItem> => {
    return data.map((seriesData, index) => {
        const values = accessors.map(f => Number(f(seriesData)))
        return {
            id: seriesData.id,
            index,
            data: values,
            domain: values.map(v => [0, v] as [number, number]),
        }
    })
}

// turn processed data into view-specific coordinates
const prepareData = (
    data: Array<BarProcessedDataItem>,
    indexScale: BandAxisScale,
    valueScale: LinearAxisScale,
    horizontal: boolean,
    stacked: boolean,
    barWidth: number,
    barGap: number,
    disabled: boolean[]
): Array<BarPreparedDataItem> => {
    const zero = valueScale(0)
    return data.map(seriesData => {
        let coords = seriesData.data.map((v, i) => {
            return disabled[i] || !v ? 0 : valueScale(v) - zero
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
                size.push([barWidth, v])
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
                let offset = zero
                coords.forEach(v => {
                    position.push([bandStart, offset])
                    offset += v
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
                coords.forEach(() => {
                    position.push([left, zero])
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
    })
}

export const Bar = ({
    // layout
    position = defaultViewProps.position,
    positionUnits = defaultViewProps.positionUnits,
    size = defaultViewProps.size,
    sizeUnits = defaultViewProps.sizeUnits,
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
    // svg
    ...props
}: BarProps) => {
    const theme = useTheme()
    const { dimsProps, origin, innerSize } = useView({
        position,
        positionUnits,
        size,
        sizeUnits,
        anchor,
        padding,
    })
    const { disabled } = useDisabledKeys(keys)
    const seriesIndexes: Record<string, number> = useMemo(() => getIndexes(data), [data])

    // collect raw data into an array-based format format
    const keyAccessors = useMemo(() => keys.map(k => getAccessor(k)), [keys])
    const processedData = useMemo(() => processData(data, keyAccessors), [data, keyAccessors])

    const stacked = variant === 'stacked'
    const { scalePropsIndex, scalePropsValue } = getScaleProps(
        processedData.map(d => d.id),
        processedData.map(d => d.domain),
        scaleIndex,
        scaleValue,
        innerSize,
        horizontal,
        autoRescale ? disabled : Array(keys.length).fill(false),
        stacked
    )
    const scaleX = horizontal ? scalePropsValue : scalePropsIndex
    const scaleY = horizontal ? scalePropsIndex : scalePropsValue
    const scaleColorProps = createColorScaleProps(scaleColor ?? theme.Colors.categorical, keys)
    const scales = createScales(scaleX, scaleY, scaleColorProps)
    const indexScale = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)
    const valueScale = horizontal ? (scales.x as LinearAxisScale) : (scales.y as LinearAxisScale)

    // compute spacings between (possibly grouped) bars
    const [barWidth, barGap] = getInternalWidthAndGap(indexScale, keys, paddingInternal, variant)
    const preparedData = useMemo(
        () =>
            prepareData(
                processedData,
                indexScale,
                valueScale,
                horizontal,
                stacked,
                barWidth,
                barGap,
                disabled
            ),
        [processedData, horizontal, stacked, indexScale, valueScale, barWidth, barGap, disabled]
    )

    return (
        <BaseView
            variant={'bar'}
            position={origin}
            size={dimsProps.size}
            padding={dimsProps.padding}
            originalData={data}
            processedData={processedData}
            seriesIndexes={seriesIndexes}
            keys={keys}
            scales={scales}
            {...props}
        >
            <BarPreparedDataProvider data={preparedData} seriesIndexes={seriesIndexes} keys={keys}>
                <LazyMotion features={domAnimation}>{children}</LazyMotion>
            </BarPreparedDataProvider>
        </BaseView>
    )
}
