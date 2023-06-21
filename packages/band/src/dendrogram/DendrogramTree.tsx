import { DendrogramPreparedDataItem, DendrogramTreeProps } from './types'
import {
    DataComponent,
    getIdKeySets,
    isBandAxisScale,
    NumericPositionSpec,
    Path,
    useScales,
    X,
    Y,
} from '@chsk/core'
import { useDendrogramPreparedData } from './context'
import { createElement, useMemo } from 'react'

/** Create coordinates for a point on the dendrogram tree */
const nodePoint = (
    data: DendrogramPreparedDataItem,
    index: number,
    horizontal: boolean
): NumericPositionSpec => {
    const positions = index < 0 ? data.leafPosition : data.position
    const heights = index < 0 ? data.leafHeight : data.height
    const result: NumericPositionSpec = [
        positions[Math.abs(index) - 1],
        heights[Math.abs(index) - 1],
    ]
    return horizontal ? [result[1], result[0]] : result
}

/** Create points that connect two nodes on a dendrogram. (Negative indexes indicate leaf nodes) */
const createTreeConnectionPoints = (
    data: DendrogramPreparedDataItem,
    midIndex: number,
    startIndex: number,
    endIndex: number,
    horizontal: boolean
): NumericPositionSpec[] => {
    const result: NumericPositionSpec[] = Array<NumericPositionSpec>(4)
    result[0] = nodePoint(data, startIndex, horizontal)
    result[3] = nodePoint(data, endIndex, horizontal)

    const mid = nodePoint(data, midIndex, horizontal)
    if (horizontal) {
        result[1] = [mid[X], result[0][Y]]
        result[2] = [mid[X], result[3][Y]]
    } else {
        result[1] = [result[0][X], mid[Y]]
        result[2] = [result[3][X], mid[Y]]
    }

    return result
}

export const DendrogramTree = ({
    ids,
    component = Path,
    dataComponent = DataComponent,
    className,
    style,
    setRole = true,
}: DendrogramTreeProps) => {
    const preparedData = useDendrogramPreparedData()
    const { scales } = useScales()
    const horizontal = isBandAxisScale(scales.y)

    const { idSet } = useMemo(() => getIdKeySets(ids, undefined, preparedData), [ids, preparedData])

    const result = preparedData.data.map(seriesData => {
        if (!idSet.has(seriesData.id)) return null
        const lines = seriesData.merge.map((pair: [number, number], i: number) => {
            const points = createTreeConnectionPoints(
                seriesData,
                i + 1,
                pair[0],
                pair[1],
                horizontal
            )
            return createElement(dataComponent, {
                key: 'tree-' + seriesData.index + '-' + i,
                data: {
                    id: seriesData.id,
                    key: seriesData.id,
                    data: 0,
                },
                component,
                props: {
                    variant: 'dendrogram',
                    points,
                    className,
                    style,
                    setRole: false,
                },
            })
        })
        return (
            <g key={'tree-' + seriesData.index} role={setRole ? 'dendrogram-tree' : undefined}>
                {lines}
            </g>
        )
    })

    return <>{result.filter(Boolean)}</>
}
