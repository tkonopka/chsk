import { useMemo } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import { HistogramDataItem, HistogramProcessedDataItem, HistogramProps } from './types'
import {
    cloneProps,
    indexes,
    ContinuousAxisScale,
    createContinuousScaleProps,
    useContainer,
    ContinuousScaleProps,
    ContinuousScaleSpec,
    isScaleWithDomain,
    interval,
    getIndexes,
    defaultLinearScaleSpec,
    useDisabledKeys,
    useTheme,
    createColorScaleProps,
    BaseView,
    X,
    Y,
    SizeSpec,
    moments,
    defaultContainerProps,
    useCreateScales,
    binValues,
    histogramPoints,
    isArray,
} from '@chsk/core'
import { HistogramPreparedDataProvider } from './context'
import { getBreaksArray } from './utils'

const processData = (
    data: Array<HistogramDataItem>,
    breaks: number[],
    density: boolean
): Array<HistogramProcessedDataItem> => {
    return data.map((seriesData, index) => {
        const [mean, variance] = moments(seriesData.data)
        const bins = binValues(seriesData.data, breaks, density)
        return {
            id: seriesData.id,
            index,
            points: histogramPoints(bins, breaks),
            breaks,
            n: seriesData.data.length,
            mean,
            sd: Math.sqrt(variance),
        }
    })
}

const prepareData = (
    seriesData: HistogramProcessedDataItem,
    scaleX: ContinuousAxisScale,
    scaleY: ContinuousAxisScale
): HistogramProcessedDataItem => {
    return {
        id: seriesData.id,
        index: seriesData.index,
        points: seriesData.points.map(point => [scaleX(point[X]), scaleY(point[Y])]),
        breaks: seriesData.breaks,
        n: seriesData.n,
    }
}

const getHistogramScaleProps = (
    data: Array<HistogramProcessedDataItem>,
    scaleSpecX: ContinuousScaleSpec,
    scaleSpecY: ContinuousScaleSpec,
    size: SizeSpec,
    disabled: boolean[]
) => {
    const result = {
        x: cloneProps(scaleSpecX) as ContinuousScaleProps,
        y: cloneProps(scaleSpecY) as ContinuousScaleProps,
    }
    const active = indexes(disabled).filter(i => !disabled[i])
    if (!isScaleWithDomain(scaleSpecX)) {
        const x = active
            .map(i => data[i])
            .map(seriesData => seriesData?.points.map(point => point[X]))
            .flat()
        result.x = createContinuousScaleProps(scaleSpecX, interval(x as number[]))
    }
    if (!isScaleWithDomain(scaleSpecY)) {
        const y = active
            .map(i => data[i])
            .map(seriesData => seriesData?.points.map(point => point[Y]))
            .flat()
        result.y = createContinuousScaleProps(scaleSpecY, interval(y as number[]))
    }
    result.x.size = size[X]
    result.y.size = size[Y]
    return result
}

export const Histogram = ({
    variant = 'count',
    container = defaultContainerProps,
    data,
    breaks,
    scaleX = defaultLinearScaleSpec,
    scaleY = defaultLinearScaleSpec,
    scaleColor,
    autoRescale = true,
    children,
    ...props
}: HistogramProps) => {
    const theme = useTheme()
    const { dimsProps, origin, innerSize } = useContainer(container)
    const seriesIndexes = useMemo(() => getIndexes(data), [data])
    const seriesIds = useMemo(() => data.map(item => item.id), [data])
    const { disabled } = useDisabledKeys(seriesIds)
    const breaksArray = useMemo(
        () => (isArray(breaks) ? breaks : getBreaksArray(data, breaks)),
        [data, breaks]
    )

    // process dataset - arrange raw data into histogram bins
    const processedData = useMemo(
        () => processData(data, breaksArray, variant === 'density'),
        [data, breaksArray, variant]
    )

    // set up scales
    const { x: xProps, y: yProps } = getHistogramScaleProps(
        processedData,
        scaleX,
        scaleY,
        innerSize,
        autoRescale ? disabled : Array(seriesIds.length).fill(false)
    )
    const colorProps = createColorScaleProps(scaleColor ?? theme.Color.categorical, seriesIds)
    const scalesContextValue = useCreateScales({ x: xProps, y: yProps, color: colorProps })
    const scales = scalesContextValue.scales

    // compute coordinates
    const preparedData = processedData.map(seriesData =>
        prepareData(seriesData, scales.x as ContinuousAxisScale, scales.y as ContinuousAxisScale)
    )

    return (
        <BaseView
            variant={'histogram'}
            position={origin}
            size={dimsProps.size}
            padding={dimsProps.padding}
            originalData={data}
            processedData={processedData}
            seriesIndexes={seriesIndexes}
            keys={seriesIds}
            scalesContextValue={scalesContextValue}
            {...props}
        >
            <HistogramPreparedDataProvider
                data={preparedData}
                seriesIndexes={seriesIndexes}
                keys={seriesIds}
            >
                <LazyMotion features={domAnimation}>{children}</LazyMotion>
            </HistogramPreparedDataProvider>
        </BaseView>
    )
}
