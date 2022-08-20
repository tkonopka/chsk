import {
    BandAxisScale,
    composeClassName,
    getAbsolutePosition,
    ScalesContextProps,
    SizeSpec,
    SizeUnit,
    Label,
    useDimensions,
    useOriginalData,
    useScales,
    X,
    Y,
} from '@chask/core'
import { BarPreparedDataItem, BandLabelsProps } from './types'
import { useBarPreparedData } from './context'
import { createElement, ReactNode, useMemo } from 'react'
import { getIdKeySets } from './Bars'

// get absolute position along the value axis
const getAbsoluteValuePos = (
    position: number,
    unit: SizeUnit,
    dimensions: SizeSpec,
    scales: ScalesContextProps,
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
    translate = [0, 0],
    /** settings for inside labels */
    align,
    padding,
    format = (v: Record<string, unknown>) => String(v['id']),
    component = Label,
    className,
    setRole = false,
    style,
}: BandLabelsProps) => {
    const originalData = useOriginalData().data
    const preparedData = useBarPreparedData()
    const dimensions = useDimensions()
    const scales = useScales()
    const horizontal = scales.x.bandwidth() === 0 && scales.y.bandwidth() !== 0
    const indexScale = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)
    const bandwidth = indexScale.bandwidth()
    const data = preparedData.data

    const { idSet } = useMemo(() => getIdKeySets(ids, [], preparedData), [ids, preparedData])

    // label position and details
    const valuePos = getAbsoluteValuePos(position, unit, dimensions.innerSize, scales, horizontal)
    const labelSize: SizeSpec =
        unit === 'relative' ? [size[0] * bandwidth, size[1] * bandwidth] : size
    const compositeClassName = composeClassName(['bandLabel', className])

    const labels: Array<ReactNode> = data
        .map((seriesData: BarPreparedDataItem, j: number) => {
            if (!idSet.has(seriesData.id)) return null
            const value = format(originalData[j])
            const indexPos = indexScale(seriesData.id)
            const pos = horizontal ? [valuePos, indexPos] : [indexPos, valuePos]
            return createElement(
                component,
                {
                    key: 'band-label-' + j,
                    position: [pos[X] + translate[X], pos[Y] + translate[Y]],
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
        .filter(v => v)

    if (labels.length === 0) return null
    return (
        <g role={'band-labels'} key={'band-labels'}>
            {labels}
        </g>
    )
}
