import { useMemo } from 'react'
import { HeatMapDataItem, HeatMapProcessedDataItem, HeatMapProps } from './types'
import { LazyMotion, domAnimation } from 'framer-motion'
import {
    BaseView,
    getAccessor,
    useContainer,
    getIndexes,
    BandScaleSpec,
    useTheme,
    defaultSizeScaleSpec,
    defaultContainerProps,
    useCreateScales,
} from '@chsk/core'
import { getColorScaleProps, getSizeScaleProps, getXYScaleProps } from './helpers'

const processData = (
    keys: string[],
    data: HeatMapDataItem[],
    dataSize?: HeatMapDataItem[]
): Array<HeatMapProcessedDataItem> => {
    const accessors = keys.map(k => getAccessor<number | string>(k))
    const sizeIndexes = getIndexes(dataSize)
    return data.map((seriesData, index) => {
        const id = seriesData.id
        const sizeIndex = sizeIndexes[id]
        const sizeData: HeatMapDataItem = dataSize?.[sizeIndex ?? 0] ?? { id }
        return {
            id,
            index,
            value: accessors.map(f => f(seriesData)),
            size: accessors.map(f => Number(f(sizeData))),
        }
    })
}

const defaultHeatMapScaleSpec: BandScaleSpec = {
    variant: 'band',
    padding: 0,
}

export const HeatMap = ({
    container = defaultContainerProps,
    keys,
    data,
    dataSize,
    scaleX = defaultHeatMapScaleSpec,
    scaleY = defaultHeatMapScaleSpec,
    scaleColor,
    scaleSize = defaultSizeScaleSpec,
    children,
    ...props
}: HeatMapProps) => {
    const theme = useTheme()
    const { dimsProps, origin, innerSize } = useContainer(container)
    const seriesIndexes = useMemo(() => getIndexes(data), [data])
    const seriesIds = useMemo(() => data.map(item => item.id), [data])

    const processedData = useMemo(() => processData(keys, data, dataSize), [keys, data, dataSize])

    const { x: xProps, y: yProps } = getXYScaleProps(seriesIds, keys, scaleX, scaleY, innerSize)
    const colorProps = getColorScaleProps(processedData, scaleColor ?? theme.Color.sequential)
    const sizeProps = getSizeScaleProps(processedData, scaleSize, innerSize, seriesIds, keys)
    const scalesContextValue = useCreateScales({
        x: xProps,
        y: yProps,
        color: colorProps,
        size: sizeProps,
    })

    return (
        <BaseView
            variant={'heatmap'}
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
            <LazyMotion features={domAnimation}>{children}</LazyMotion>
        </BaseView>
    )
}
