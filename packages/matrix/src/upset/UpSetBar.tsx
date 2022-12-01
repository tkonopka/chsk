import { UpSetBarProps, UpSetProcessedDataItem } from './types'
import {
    defaultBandScaleSpec,
    defaultLinearScaleWithZeroSpec,
    NumericPositionSpec,
    SizeSpec,
    useDimensions,
    useProcessedData,
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
        data.map(seriesData => {
            if (seriesData.data[i]) {
                value = seriesData.data[i]
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
    // layout
    size,
    padding = [0, 0, 0, 0],
    scaleIndex = defaultBandScaleSpec,
    scaleValue = defaultLinearScaleWithZeroSpec,
    //
    children,
}: UpSetBarProps) => {
    const processedData = useProcessedData()
    const dimensions = useDimensions()
    const data = processedData.data
    if (!isUpSetProcessedData(data)) return null
    const horizontal = data[0].horizontal ?? true
    const barData = useMemo(() => getBarData(data, processedData.keys), [data, processedData])
    const barLayout = useMemo(
        () => getBarViewLayout(horizontal, size, dimensions.size),
        [horizontal, dimensions]
    )

    return (
        <Bar
            position={barLayout.position}
            size={barLayout.size}
            padding={padding}
            units={'absolute'}
            data={barData}
            keys={['value']}
            horizontal={!horizontal}
            scaleIndex={scaleIndex}
            scaleValue={scaleValue}
        >
            {children}
        </Bar>
    )
}
