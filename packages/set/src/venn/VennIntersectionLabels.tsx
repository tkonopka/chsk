import { createElement, ReactNode, useMemo } from 'react'
import {
    composeClassName,
    Label,
    LinearAxisScale,
    useProcessedData,
    useScales,
    X,
    Y,
} from '@chsk/core'
import { isVennProcessedData } from './predicates'
import { VennIntersectionLabelsProps, VennProcessedDataItem, VennIntersectionSpec } from './types'
import { get1Positions, get2Positions, get3Positions } from './intersections'

const getIntersectionLabels = (data: Array<VennProcessedDataItem>): Array<VennIntersectionSpec> => {
    if (data.length === 3) return get3Positions(data)
    if (data.length === 2) return get2Positions(data)
    return get1Positions(data)
}

export const VennIntersectionLabels = ({
    format = (v: string | number, item?: VennIntersectionSpec) => String(v) ?? String(item?.value),
    padding = [4, 4, 4, 4],
    size = [40, 10],
    align = [0.5, 0.5],
    className,
    setRole = false,
    style,
    component = Label,
}: VennIntersectionLabelsProps) => {
    const processedData = useProcessedData()
    const scales = useScales()
    const data = processedData.data
    if (!isVennProcessedData(data)) return null

    const scaleX = scales.x as LinearAxisScale
    const scaleY = scales.y as LinearAxisScale
    const compositeClassName = composeClassName(['vennIntersectionLabel', className])

    const labels = useMemo(() => getIntersectionLabels(data), [data])
    const result: Array<ReactNode> = labels.map((item, i) => {
        return createElement(
            component,
            {
                key: 'venn-intersection-label-' + i,
                position: [scaleX(item.position[X]), scaleY(item.position[Y])],
                size,
                align,
                padding,
                className: compositeClassName,
                style,
                setRole,
            },
            format(item.value, item)
        )
    })

    return <>{result}</>
}
