import { DendrogramLeafLabelsProps, DendrogramPreparedDataItem } from './types'
import {
    getClassName,
    getIdKeySets,
    isBandAxisScale,
    Label,
    NumericPositionSpec,
    useRawData,
    useScales,
} from '@chsk/core'
import { createElement, useMemo } from 'react'
import { isDendrogramData } from './predicates'
import { useDendrogramPreparedData } from './context'

export const DendrogramLeafLabels = ({
    ids,
    keys,
    format,
    component = Label,
    angle,
    offset,
    size,
    align,
    padding,
    anchor,
    className,
    style,
    setRole,
}: DendrogramLeafLabelsProps) => {
    const originalData = useRawData().data
    const preparedData = useDendrogramPreparedData()
    const { scales } = useScales()
    const horizontal = isBandAxisScale(scales.y)
    if (!isDendrogramData(originalData)) return null

    // in LeafLabels, ids is interpreted as entries in the indexScale
    const { idSet, keySet } = useMemo(
        () => getIdKeySets(ids, keys, preparedData),
        [ids, keys, preparedData]
    )

    const compositeClassName = getClassName('leafLabel', className)

    const result = preparedData.data.map((item: DendrogramPreparedDataItem) => {
        if (!idSet.has(item.id)) return null
        const data = originalData[item.index]
        const leafX = horizontal ? item.leafHeight : item.leafPosition
        const leafY = horizontal ? item.leafPosition : item.leafHeight
        return data.keys.map((k: string, i: number) => {
            if (!keySet.has(k)) return null
            const position: NumericPositionSpec = [leafX[i], leafY[i]]
            const value = format ? format(k) : k
            return createElement(
                component,
                {
                    key: 'leaf-' + item.id + '-' + k,
                    position,
                    offset,
                    angle,
                    size,
                    align,
                    anchor,
                    padding,
                    className: compositeClassName,
                    style,
                    setRole,
                },
                value
            )
        })
    })

    return <g role={setRole ? 'dendrogram-leaf-labels' : undefined}>{result}</g>
}
