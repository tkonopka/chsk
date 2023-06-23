import {
    BandAxisScale,
    getClassName,
    useIdsKeys,
    getAbsolutePosition,
    SizeSpec,
    SizeUnit,
    Label,
    useDimensions,
    useRawData,
    useScales,
    Scales,
    X,
    Y,
    useProcessedData,
    RecordWithId,
} from '@chsk/core'
import { BandLabelsProps } from './types'
import { createElement, ReactNode } from 'react'

// get absolute position along the value axis
const getAbsoluteValuePos = (
    position: number,
    unit: SizeUnit,
    dimensions: SizeSpec,
    scales: Scales,
    horizontal: boolean
) => {
    const absPosition = getAbsolutePosition([position, position], unit, dimensions, scales)
    return horizontal ? absPosition[X] : absPosition[Y]
}

export const BandLabels = ({
    /** location of labels */
    ids,
    position = 1,
    size = [1, 1],
    unit = 'relative',
    offset = [0, 0],
    /** settings for inside labels */
    align,
    padding,
    format = (v: Record<string, unknown>) => String(v['id']),
    component = Label,
    className,
    setRole = false,
    style,
}: BandLabelsProps) => {
    const rawData = useRawData().data
    const processedData = useProcessedData()
    const dimensions = useDimensions()
    const { scales } = useScales()
    const horizontal = scales.x.bandwidth() === 0 && scales.y.bandwidth() !== 0
    const indexScale = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)
    const bandwidth = indexScale.bandwidth()
    const data = processedData.data
    const keyPrefix = 'band-label-'

    const { idSet } = useIdsKeys(ids, null, processedData)

    // label position and details
    const valuePos = getAbsoluteValuePos(position, unit, dimensions.size, scales, horizontal)
    const labelSize: SizeSpec =
        unit === 'relative' ? [size[0] * bandwidth, size[1] * bandwidth] : size
    const compositeClassName = getClassName('bandLabel', className)

    const labels: Array<ReactNode> = data
        .map((seriesData: RecordWithId, j: number) => {
            if (!idSet.has(seriesData.id)) return null
            const value = format(rawData[j])
            const indexPos = indexScale(seriesData.id)
            const pos = horizontal ? [valuePos, indexPos] : [indexPos, valuePos]
            return createElement(
                component,
                {
                    key: keyPrefix + j,
                    position: [pos[X] + offset[X], pos[Y] + offset[Y]],
                    size: labelSize,
                    align,
                    padding,
                    className: compositeClassName,
                    style: style,
                    variant: 'label',
                    setRole: setRole,
                },
                value
            )
        })
        .flat()
        .filter(Boolean)

    if (labels.length === 0) return null
    return <g role={'band-labels'}>{labels}</g>
}
