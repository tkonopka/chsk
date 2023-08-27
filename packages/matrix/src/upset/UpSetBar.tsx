import { UpSetBarProps, UpSetProcessedDataItem } from './types'
import {
    ContainerProps,
    defaultBandScaleSpec,
    defaultLinearScaleWithZeroSpec,
    NumericPositionSpec,
    SizeSpec,
    useDimensions,
    useProcessedData,
    useScales,
    X,
    Y,
} from '@chsk/core'
import { isUpSetProcessedData } from './predicates'
import { Bar, BarDataItem } from '@chsk/band'
import { useMemo } from 'react'

const getBarData = (data: Array<UpSetProcessedDataItem>, keys: string[]): Array<BarDataItem> => {
    const result: Array<BarDataItem> = []
    keys.map((k, i) => {
        let value = 0
        data.forEach(seriesData => {
            if (seriesData.data[i]) {
                value = Number(seriesData.data[i])
            }
        })
        result.push({ id: k, value })
    })
    return result
}

const getBarViewLayout = (
    horizontal: boolean,
    size: number,
    viewSize: NumericPositionSpec
): { position: NumericPositionSpec; size: SizeSpec } => {
    return {
        position: horizontal ? [0, -size] : [viewSize[X], 0],
        size: horizontal ? [viewSize[X], size] : [size, viewSize[Y]],
    }
}

export const UpSetBar = ({
    size,
    padding = [0, 0, 0, 0],
    scaleIndex = defaultBandScaleSpec,
    scaleValue = defaultLinearScaleWithZeroSpec,
    scaleColor,
    children,
    ...props
}: UpSetBarProps) => {
    const processedData = useProcessedData()
    const dimensions = useDimensions()
    const { scales } = useScales()
    const data = processedData.data
    if (!isUpSetProcessedData(data) || data.length == 0) return null
    const horizontal = data[0]?.horizontal ?? false
    const barData = useMemo(() => getBarData(data, processedData.keys), [data, processedData])
    const barLayout = useMemo(
        () => getBarViewLayout(horizontal, size, dimensions.size),
        [horizontal, dimensions]
    )
    const container: ContainerProps = {
        position: barLayout.position,
        positionUnits: 'absolute',
        size: barLayout.size,
        sizeUnits: 'absolute',
        padding,
    }
    return (
        <Bar
            container={container}
            data={barData}
            keys={['value']}
            horizontal={!horizontal}
            scaleIndex={scaleIndex}
            scaleValue={scaleValue}
            scaleColor={
                scaleColor ?? {
                    variant: 'categorical',
                    domain: scales.color.domain() as string[],
                    colors: [scales.color(0)],
                }
            }
            {...props}
        >
            {children}
        </Bar>
    )
}
