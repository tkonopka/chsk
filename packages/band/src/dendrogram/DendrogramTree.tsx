import { DendrogramPreparedDataItem, DendrogramTreeProps } from './types'
import {
    BandAxisScale,
    DataComponent,
    getIdKeySets,
    isBandAxisScale,
    NumericPositionSpec,
    Path,
    useRawData,
    useScales,
    X,
    Y,
} from '@chsk/core'
import { useDendrogramPreparedData } from './context'
import { createElement, useMemo } from 'react'
import { isDendrogramData } from './predicates'
import { getTargetLevels } from './utils'

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
    return horizontal ? (result.reverse() as NumericPositionSpec) : result
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
    levels,
    ids,
    keys,
    component = Path,
    dataComponent = DataComponent,
    handlers,
    modifiers,
    className,
    style,
    setRole = true,
}: DendrogramTreeProps) => {
    const originalData = useRawData().data
    const preparedData = useDendrogramPreparedData()
    const { scales } = useScales()
    const horizontal = isBandAxisScale(scales.y)
    if (!isDendrogramData(originalData)) return null
    const indexScale = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)

    const { idSet, keyArray } = useMemo(
        () => getIdKeySets(ids, keys, preparedData),
        [ids, keys, preparedData]
    )

    const result = preparedData.data.map(seriesData => {
        const id = seriesData.id
        if (!idSet.has(id)) return null
        const targetLevels = getTargetLevels(
            seriesData,
            indexScale,
            levels,
            keys === undefined ? keys : keyArray,
            true
        )
        const lines = targetLevels.map(level => {
            const pair = seriesData.merge[level]
            const points = createTreeConnectionPoints(
                seriesData,
                level + 1,
                pair[0],
                pair[1],
                horizontal
            )
            return createElement(dataComponent, {
                key: 'tree-' + seriesData.index + '-' + level,
                data: {
                    id: id,
                    level,
                    data: originalData[seriesData.index],
                },
                component,
                props: {
                    variant: 'dendrogram',
                    points,
                    className,
                    style,
                    setRole: false,
                },
                handlers,
                modifiers,
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
