import { useMemo } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import {
    ScatterDataItem,
    ScatterPreparedDataItem,
    ScatterProcessedDataItem,
    ScatterProps,
} from './types'
import {
    AccessorFunction,
    ContinuousAxisScale,
    getAccessor,
    useContainer,
    getIndexes,
    defaultLinearScaleSpec,
    useDisabledKeys,
    useTheme,
    BaseView,
    getNumberAccessor,
    ColorScale,
    defaultSizeScaleSpec,
    NumericAxisScale,
    defaultContainerProps,
    useCreateScales,
    Scales,
    range,
} from '@chsk/core'
import { ScatterPreparedDataProvider } from './context'
import { getXYScaleProps, getSizeScaleProps, getColorScaleProps } from './helpers'

const getAccessors = ({
    x,
    y,
    k,
    valueSize = 5,
    valueColor = null,
}: Pick<ScatterProps, 'x' | 'y' | 'k' | 'valueColor' | 'valueSize'>) => {
    const getX = getAccessor(x)
    const getY = getAccessor(y)
    const getK = k ? getAccessor(k) : undefined
    const getSize = getNumberAccessor(valueSize)
    const getColor = valueColor ? getAccessor(valueColor) : null
    return { getX, getY, getK, getSize, getColor }
}

// turn raw data into a minimal format with arrays
const processData = (
    data: Array<ScatterDataItem>,
    accessors: {
        getX: AccessorFunction<number>
        getY: AccessorFunction<number>
        getK?: AccessorFunction<number>
        getSize: AccessorFunction<number>
        getColor: null | AccessorFunction<number>
    }
): Array<ScatterProcessedDataItem> => {
    const { getX, getY, getK, getColor, getSize } = accessors
    return data.map((seriesData, index) => ({
        id: seriesData.id,
        index,
        k: getK ? seriesData.data.map(item => getK(item)) : range(seriesData.data.length),
        x: seriesData.data.map(item => getX(item)),
        y: seriesData.data.map(item => getY(item)),
        size: seriesData.data.map(item => getSize(item)),
        color: getColor ? seriesData.data.map(item => getColor(item)) : undefined,
    }))
}

// turn processed data into view-specific coordinates
const prepareData = (
    data: Array<ScatterProcessedDataItem>,
    scales: Scales
): Array<ScatterPreparedDataItem> => {
    const scaleX = scales.x as ContinuousAxisScale
    const scaleY = scales.y as ContinuousAxisScale
    const scaleSize = scales.size as NumericAxisScale
    const scaleColor = scales.color as ColorScale
    return data.map(seriesData => ({
        id: seriesData.id,
        index: seriesData.index,
        x: seriesData.x.map(v => scaleX(v)),
        y: seriesData.y.map(v => scaleY(v)),
        r: seriesData.size.map(v => scaleSize(v)),
        color: seriesData.color ? seriesData.color.map(v => scaleColor(v)) : undefined,
    }))
}

export const Scatter = ({
    container = defaultContainerProps,
    data,
    x,
    y,
    k,
    valueColor = null,
    valueSize = 5,
    scaleX = defaultLinearScaleSpec,
    scaleY = defaultLinearScaleSpec,
    scaleColor,
    scaleSize = defaultSizeScaleSpec,
    autoRescale = true,
    children,
    ...props
}: ScatterProps) => {
    const theme = useTheme()
    const { dimsProps, origin, innerSize } = useContainer(container)
    const seriesIndexes = useMemo(() => getIndexes(data), [data])
    const seriesIds = useMemo(() => data.map(item => item.id), [data])
    const { disabled } = useDisabledKeys(seriesIds)

    // process dataset
    const accessors = useMemo(
        () => getAccessors({ x, y, k, valueSize, valueColor }),
        [x, y, k, valueSize, valueColor]
    )
    const processedData = useMemo(() => processData(data, accessors), [data, accessors])

    // set up scales
    const { x: xProps, y: yProps } = useMemo(() => {
        return getXYScaleProps(
            processedData,
            scaleX,
            scaleY,
            innerSize,
            autoRescale ? disabled : Array(seriesIds.length).fill(false)
        )
    }, [processedData, scaleX, scaleY, disabled, autoRescale, disabled, seriesIds])
    const { colorProps, sizeProps } = useMemo(() => {
        const colorProps = getColorScaleProps(
            processedData,
            scaleColor ?? theme.Colors.categorical,
            seriesIds
        )
        const sizeProps = getSizeScaleProps(processedData, scaleSize, valueSize)
        return { colorProps, sizeProps }
    }, [processedData, scaleColor, scaleSize, theme, valueSize, seriesIds])
    const scalesContextValue = useCreateScales({
        x: xProps,
        y: yProps,
        color: colorProps,
        size: sizeProps,
    })

    // compute coordinates
    const preparedData = useMemo(
        () => prepareData(processedData, scalesContextValue.scales),
        [processedData, scalesContextValue]
    )

    return (
        <BaseView
            variant={'scatter'}
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
            <ScatterPreparedDataProvider
                data={preparedData}
                seriesIndexes={seriesIndexes}
                keys={seriesIds}
            >
                <LazyMotion features={domAnimation}>{children}</LazyMotion>
            </ScatterPreparedDataProvider>
        </BaseView>
    )
}
