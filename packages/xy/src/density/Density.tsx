import { useMemo } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import {
    ContinuousAxisScale,
    getAccessor,
    useContainer,
    getIndexes,
    defaultLinearScaleSpec,
    useDisabledKeys,
    useTheme,
    BaseView,
    ColorScale,
    defaultContainerProps,
    useCreateScales,
    Scales,
    interval,
} from '@chsk/core'
import { getXYScaleProps, getColorScaleProps } from '../scatter/helpers'
import {
    DENSITY_COLOR,
    DENSITY_CONTENT,
    DENSITY_COUNT,
    DensityPreparedDataItem,
    DensityProcessedDataItem,
    DensityProps,
} from './types'
import { avgLab, floor } from './utils'
import { DensityPreparedDataProvider } from './context'

const processData = ({
    data,
    x,
    y,
    valueColor = null,
}: Pick<DensityProps, 'data' | 'x' | 'y' | 'valueColor'>): Array<DensityProcessedDataItem> => {
    return data.map((seriesData, index) => {
        const d = seriesData.data
        if (Array.isArray(d)) {
            const getX = getAccessor(x)
            const getY = getAccessor(y)
            const getColor = valueColor ? getAccessor(valueColor) : null
            return {
                id: seriesData.id,
                index,
                x: interval(d.map(item => getX(item))),
                y: interval(d.map(item => getY(item))),
                color: getColor ? interval(d.map(item => getColor(item))) : undefined,
            }
        } else {
            const getX = getAccessor<number[]>(String(x))
            const getY = getAccessor<number[]>(String(y))
            const getColor = valueColor ? getAccessor<number[]>(String(valueColor)) : null
            return {
                id: seriesData.id,
                index,
                x: interval(getX(d)),
                y: interval(getY(d)),
                color: getColor ? interval(getColor(d)) : undefined,
            }
        }
    })
}

// turn processed data into view-specific coordinates
const prepareData = ({
    data,
    x,
    y,
    valueColor = null,
    scales,
    binSize,
    disabled,
}: Pick<DensityProps, 'data' | 'x' | 'y' | 'valueColor' | 'binSize'> & {
    scales: Scales
    disabled: boolean[]
}): Array<DensityPreparedDataItem> => {
    const scaleX = scales.x as ContinuousAxisScale
    const scaleY = scales.y as ContinuousAxisScale
    const scaleColor = scales.color as ColorScale
    const bins: Record<string, DensityPreparedDataItem> = {}
    const binKeys = new Set<string>()
    data.forEach((seriesData, i) => {
        const d = seriesData.data
        const countIncrement = disabled[i] ? 0 : 1
        let xValues: number[], yValues: number[], colorValues: number[]
        if (Array.isArray(d)) {
            const getX = getAccessor(x)
            const getY = getAccessor(y)
            const getColor = valueColor ? getAccessor(valueColor) : null
            xValues = d.map(item => getX(item))
            yValues = d.map(item => getY(item))
            colorValues = getColor ? d.map(item => getColor(item)) : Array(xValues.length).fill(i)
        } else {
            const getX = getAccessor<number[]>(String(x))
            const getY = getAccessor<number[]>(String(y))
            const getColor = valueColor ? getAccessor<number[]>(String(valueColor)) : null
            xValues = getX(d)
            yValues = getY(d)
            colorValues = getColor ? getColor(d) : Array(xValues.length).fill(i)
        }
        xValues.forEach((v, j) => {
            const xBin = floor(scaleX(v) / binSize)
            const yBin = floor(scaleY(yValues[j]) / binSize)
            const key = xBin + ',' + yBin
            if (!binKeys.has(key)) {
                binKeys.add(key)
                bins[key] = [xBin, yBin, 0, '', []]
            }
            if (countIncrement) {
                bins[key][DENSITY_COUNT] += 1
                bins[key][DENSITY_CONTENT].push(colorValues[j])
            }
        })
    })
    const result: DensityPreparedDataItem[] = Object.values(bins).map(item => {
        item[DENSITY_COLOR] = avgLab(item[DENSITY_CONTENT], scaleColor)
        return item
    })
    return result.sort((a, b) => a[DENSITY_COUNT] - b[DENSITY_COUNT])
}

export const Density = ({
    container = defaultContainerProps,
    data,
    x,
    y,
    valueColor = null,
    binSize = 3,
    scaleX = defaultLinearScaleSpec,
    scaleY = defaultLinearScaleSpec,
    scaleColor,
    children,
    ...props
}: DensityProps) => {
    const theme = useTheme()
    const { dimsProps, origin, innerSize } = useContainer(container)
    const seriesIndexes = useMemo(() => getIndexes(data), [data])
    const seriesIds = useMemo(() => data.map(item => item.id), [data])
    const { disabled } = useDisabledKeys(seriesIds)
    // process dataset to get intervals for x, y, and color scales
    const processedData = useMemo(
        () => processData({ data, x, y, valueColor }),
        [data, x, y, valueColor]
    )

    // set up scales
    const { x: xProps, y: yProps } = useMemo(() => {
        return getXYScaleProps(
            processedData,
            scaleX,
            scaleY,
            innerSize,
            Array(seriesIds.length).fill(false)
        )
    }, [processedData, scaleX, scaleY, innerSize, seriesIds])
    const colorProps = useMemo(() => {
        return getColorScaleProps(processedData, scaleColor ?? theme.Colors.categorical, seriesIds)
    }, [processedData, scaleColor, theme, seriesIds])
    const scalesContextValue = useCreateScales({ x: xProps, y: yProps, color: colorProps })

    // compute coordinates
    const preparedData = useMemo(
        () =>
            prepareData({
                data,
                x,
                y,
                valueColor,
                scales: scalesContextValue.scales,
                binSize,
                disabled,
            }),
        [data, x, y, valueColor, scalesContextValue, binSize, disabled]
    )

    return (
        <BaseView
            variant={'density'}
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
            <DensityPreparedDataProvider
                data={preparedData}
                binSize={binSize}
                seriesIndexes={seriesIndexes}
                keys={seriesIds}
            >
                <LazyMotion features={domAnimation}>{children}</LazyMotion>
            </DensityPreparedDataProvider>
        </BaseView>
    )
}
