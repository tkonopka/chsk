import { useMemo } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import { ScatterPreparedDataItem, ScatterProcessedDataItem, ScatterProps } from './types'
import {
    isNumber,
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

// turn raw data into a minimal format with arrays
const processData = ({
    data,
    x,
    y,
    k,
    valueSize = 5,
    valueColor = null,
}: Pick<
    ScatterProps,
    'data' | 'x' | 'y' | 'k' | 'valueColor' | 'valueSize'
>): Array<ScatterProcessedDataItem> => {
    return data.map((seriesData, index) => {
        const d = seriesData.data
        if (Array.isArray(d)) {
            const getX = getAccessor(x)
            const getY = getAccessor(y)
            const getK = k ? getAccessor(k) : undefined
            const getSize = getNumberAccessor(valueSize)
            const getColor = valueColor ? getAccessor(valueColor) : null
            return {
                id: seriesData.id,
                index,
                k: getK ? d.map(item => getK(item)) : range(d.length),
                x: d.map(item => getX(item)),
                y: d.map(item => getY(item)),
                size: d.map(item => getSize(item)),
                color: getColor ? d.map(item => getColor(item)) : undefined,
            }
        } else {
            const getX = getAccessor<number[]>(String(x))
            const n = getX(d).length
            const getY = getAccessor<number[]>(String(y))
            const getK = k ? getAccessor<number[]>(String(k)) : undefined
            const getSize = isNumber(valueSize)
                ? () => Array(n).fill(valueSize)
                : getAccessor<number[]>(String(valueSize))
            const getColor = valueColor ? getAccessor<number[]>(String(valueColor)) : null
            return {
                id: seriesData.id,
                index,
                k: getK ? getK(d) : range(getX(d).length),
                x: getX(d),
                y: getY(d),
                size: getSize(d),
                color: getColor ? getColor(d) : undefined,
            }
        }
    })
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
    const processedData = useMemo(
        () => processData({ data, x, y, k, valueSize, valueColor }),
        [data, x, y, k, valueSize, valueColor]
    )

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
