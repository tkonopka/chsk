import { useMemo } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import {
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
    interval,
    defaultContainerProps,
    useCreateScales,
    binValues,
} from '@chsk/core'
import { breaks as makeBreaks } from '@chsk/core'
import {
    ViolinDataItem,
    ViolinPreparedDataItem,
    ViolinProcessedDataItem,
    ViolinProps,
} from './types'
import { ViolinPreparedDataProvider } from './context'
import { getInternalWidthAndGap, getScaleProps } from '../bars/utils'
import { isViolinProcessedSummary } from './predicates'

const processData = (data: ViolinDataItem[], keys: string[]): Array<ViolinProcessedDataItem> => {
    const accessors = keys.map(k => getAccessor(k))
    return data.map((seriesData, index) => {
        const summaries = accessors.map(f => {
            const raw = f(seriesData)
            if (!raw) return undefined
            if (isViolinProcessedSummary(raw)) {
                return {
                    n: raw.n,
                    values: raw.values,
                    breaks: raw.breaks,
                }
            }
            if (!Array.isArray(raw)) return undefined
            return {
                n: raw.length,
                values: raw as number[],
            }
        })
        const domain = summaries.map(summary => {
            if (!summary) return undefined
            return summary.breaks ? interval(summary.breaks) : interval(summary.values)
        })
        return {
            id: seriesData.id,
            index,
            data: summaries,
            domain,
        }
    })
}

// turn processed data into view-specific coordinates
const prepareData = (
    data: Array<ViolinProcessedDataItem>,
    indexScale: BandAxisScale,
    valueScale: LinearAxisScale,
    horizontal: boolean,
    width: number,
    offset: number,
    gap: number,
    breaks: number | number[]
): Array<ViolinPreparedDataItem> => {
    // get the entire domain for the value axis
    const fullDomain = interval(
        data.map(d => d.domain.flat().filter(v => v !== undefined) as number[]).flat()
    )
    const fullScaled = fullDomain.map(v => valueScale(v))
    // set up a single breaks array for all the violins
    let breaksArray: number[]
    if (Array.isArray(breaks)) {
        breaksArray = breaks.map(v => valueScale(v))
    } else {
        breaksArray = makeBreaks(fullScaled, Number(breaks))
    }

    return data.map(seriesData => {
        let bandStart = indexScale(seriesData.id) - indexScale.bandwidth() / 2 + offset
        const summaries = seriesData.data.map(summary => {
            bandStart += width + gap
            if (!summary) return undefined
            const scaledRawValues = summary.breaks ? [] : summary.values.map(v => valueScale(v))
            const scaledBreaks = summary.breaks
                ? summary.breaks.map(v => valueScale(v))
                : breaksArray
            scaledBreaks.sort((a, b) => a - b)
            return {
                n: summary.n,
                breaks: summary.breaks ? summary.breaks.map(v => valueScale(v)) : scaledBreaks,
                values: summary.breaks
                    ? summary.values
                    : binValues(scaledRawValues, scaledBreaks, false),
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

export const Violin = ({
    container = defaultContainerProps,
    variant = 'grouped',
    data,
    keys,
    breaks = 20,
    horizontal = false,
    autoRescale = true,
    paddingInternal = 0,
    scaleIndex = defaultBandScaleSpec,
    scaleValue = defaultLinearScaleWithZeroSpec,
    scaleColor,
    children,
    ...props
}: ViolinProps) => {
    const theme = useTheme()
    const { dimsProps, origin, innerSize } = useContainer(container)
    const { disabled } = useDisabledKeys(keys)
    const seriesIndexes: Record<string, number> = useMemo(() => getIndexes(data), [data])

    const processedData = useMemo(() => processData(data, keys), [data, keys])

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
    const colorProps = createColorScaleProps(scaleColor ?? theme.Color.categorical, keys)
    const scalesContextValue = useCreateScales({ x: xProps, y: yProps, color: colorProps })
    const scales = scalesContextValue.scales
    const indexScale = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)
    const valueScale = horizontal ? (scales.x as LinearAxisScale) : (scales.y as LinearAxisScale)

    // compute spacings between (possibly grouped) bands
    const [internalWidth, internalOffset, internalGap] = getInternalWidthAndGap(
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
                internalWidth,
                internalOffset,
                internalGap,
                breaks
            ),
        [
            processedData,
            horizontal,
            indexScale,
            valueScale,
            internalWidth,
            internalOffset,
            internalGap,
            breaks,
        ]
    )

    return (
        <BaseView
            variant={'violin'}
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
            <ViolinPreparedDataProvider
                data={preparedData}
                seriesIndexes={seriesIndexes}
                keys={keys}
            >
                <LazyMotion features={domAnimation}>{children}</LazyMotion>
            </ViolinPreparedDataProvider>
        </BaseView>
    )
}
