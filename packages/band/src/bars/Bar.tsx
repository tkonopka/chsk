import { useMemo } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import {
    BandAxisScale,
    getAccessor,
    LinearAxisScale,
    SizeSpec,
    useContainer,
    getIndexes,
    NumericPositionSpec,
    defaultBandScaleSpec,
    defaultLinearScaleWithZeroSpec,
    useDisabledKeys,
    useTheme,
    createColorScaleProps,
    BaseView,
    defaultContainerProps,
    useCreateScales,
} from '@chsk/core'
import { BarDataItem, BarPreparedDataItem, BarProcessedDataItem, BarProps } from './types'
import { BarPreparedDataProvider } from './context'
import { getInternalWidthAndGap, getScaleProps } from './utils'

const processData = (data: BarDataItem[], keys: string[]): Array<BarProcessedDataItem> => {
    const accessors = keys.map(k => getAccessor(k))
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

const prepareData = (
    data: Array<BarProcessedDataItem>,
    indexScale: BandAxisScale,
    valueScale: LinearAxisScale,
    horizontal: boolean,
    stacked: boolean,
    barWidth: number,
    barOffset: number,
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
                let top = bandStart + barOffset
                coords.forEach(() => {
                    position.push([zero, top])
                    top += barWidth + barGap
                })
            } else {
                let left = bandStart + barOffset
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
    container = defaultContainerProps,
    variant = 'grouped',
    data,
    keys,
    horizontal = false,
    autoRescale = true,
    paddingInternal = 0,
    scaleIndex = defaultBandScaleSpec,
    scaleValue = defaultLinearScaleWithZeroSpec,
    scaleColor,
    children,
    ...props
}: BarProps) => {
    const theme = useTheme()
    const { dimsProps, origin, innerSize } = useContainer(container)
    const { disabled } = useDisabledKeys(keys)
    const seriesIndexes: Record<string, number> = useMemo(() => getIndexes(data), [data])

    const processedData = useMemo(() => processData(data, keys), [data, keys])

    const stacked = variant === 'stacked'
    const { index: indexProps, value: valueProps } = useMemo(
        () =>
            getScaleProps(
                processedData.map(d => d.id),
                processedData.map(d => d.domain),
                scaleIndex,
                scaleValue,
                innerSize,
                horizontal,
                autoRescale ? disabled : Array(keys.length).fill(false),
                stacked
            ),
        [
            processedData,
            scaleIndex,
            scaleValue,
            innerSize,
            horizontal,
            autoRescale,
            disabled,
            keys,
            stacked,
        ]
    )
    const xProps = horizontal ? valueProps : indexProps
    const yProps = horizontal ? indexProps : valueProps
    const colorProps = createColorScaleProps(scaleColor ?? theme.Colors.categorical, keys)
    const scalesContextValue = useCreateScales({ x: xProps, y: yProps, color: colorProps })
    const scales = scalesContextValue.scales
    const indexScale = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)
    const valueScale = horizontal ? (scales.x as LinearAxisScale) : (scales.y as LinearAxisScale)

    // compute spacings between (possibly grouped) bars
    const [barWidth, barOffset, barGap] = getInternalWidthAndGap(
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
                stacked,
                barWidth,
                barOffset,
                barGap,
                disabled
            ),
        [
            processedData,
            horizontal,
            stacked,
            indexScale,
            valueScale,
            barWidth,
            barOffset,
            barGap,
            disabled,
        ]
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
            scalesContextValue={scalesContextValue}
            {...props}
        >
            <BarPreparedDataProvider data={preparedData} seriesIndexes={seriesIndexes} keys={keys}>
                <LazyMotion features={domAnimation}>{children}</LazyMotion>
            </BarPreparedDataProvider>
        </BaseView>
    )
}
