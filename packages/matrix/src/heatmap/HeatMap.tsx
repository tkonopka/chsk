import { useMemo } from 'react'
import { HeatMapDataItem, HeatMapProcessedDataItem, HeatMapProps } from './types'
import { LazyMotion, domAnimation } from 'framer-motion'
import {
    AccessorFunction,
    BaseView,
    getAccessor,
    createScales,
    useView,
    getIndexes,
    BandScaleSpec,
    useTheme,
    defaultSizeScaleSpec,
} from '@chsk/core'
import { getColorScaleProps, getSizeScaleProps, getXYScaleProps } from './helpers'

// turn raw dataGroups into a minimal array-based format
const processData = (
    accessors: Array<AccessorFunction<string | number>>,
    data: Array<HeatMapDataItem>,
    dataSize?: Array<HeatMapDataItem>
): Array<HeatMapProcessedDataItem> => {
    const sizeIndexes = getIndexes(dataSize)
    return data.map((seriesData, index) => {
        const id = seriesData.id
        const sizeIndex = sizeIndexes[id]
        const sizeData: HeatMapDataItem =
            sizeIndex !== undefined && dataSize !== undefined ? dataSize[sizeIndex] : { id }
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
    // layout
    position = [0, 0],
    positionUnits = 'relative',
    size = [1, 1],
    sizeUnits = 'relative',
    anchor = [0, 0],
    padding = [0, 0, 0, 0],
    // content
    keys,
    data,
    dataSize,
    scaleX = defaultHeatMapScaleSpec,
    scaleY = defaultHeatMapScaleSpec,
    scaleColor,
    scaleSize = defaultSizeScaleSpec,
    //
    children,
}: HeatMapProps) => {
    const theme = useTheme()
    const { dimsProps, origin } = useView({
        position,
        positionUnits,
        size,
        sizeUnits,
        anchor,
        padding,
    })
    const seriesIndexes = useMemo(() => getIndexes(data), [data])
    const seriesIds = useMemo(() => data.map(item => item.id), [data])

    const keyAccessors = useMemo(() => keys.map(k => getAccessor<number | string>(k)), [keys])
    const processedData = useMemo(
        () => processData(keyAccessors, data, dataSize),
        [keyAccessors, data, dataSize]
    )

    const { scalePropsX, scalePropsY } = getXYScaleProps(
        seriesIds,
        keys,
        scaleX,
        scaleY,
        dimsProps.innerSize
    )
    const colorScaleProps = getColorScaleProps(processedData, scaleColor ?? theme.Colors.sequential)
    const sizeScaleProps = getSizeScaleProps(
        processedData,
        scaleSize,
        dimsProps.innerSize,
        seriesIds,
        keys
    )
    const scales = createScales(scalePropsX, scalePropsY, colorScaleProps, sizeScaleProps)

    return (
        <BaseView
            role={'view-heatmap'}
            position={origin}
            size={dimsProps.size}
            padding={dimsProps.padding}
            originalData={data}
            processedData={processedData}
            seriesIndexes={seriesIndexes}
            keys={keys}
            scales={scales}
        >
            <LazyMotion features={domAnimation}>{children}</LazyMotion>
        </BaseView>
    )
}
