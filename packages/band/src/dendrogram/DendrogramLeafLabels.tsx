import { DendrogramLeafLabelsProps, DendrogramPreparedDataItem } from './types'
import {
    BandAxisScale,
    getClassName,
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
    if (!isDendrogramData(originalData)) return null

    const horizontal = isBandAxisScale(scales.y)
    const indexScale = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)

    // in LeafLabels, ids is interpreted as entries in the indexScale
    const idSet = useMemo(() => {
        const domainSet = new Set(indexScale.domain())
        if (ids === undefined) return domainSet
        return new Set(ids.filter(id => domainSet.has(id)))
    }, [ids, scales])

    const compositeClassName = getClassName('leafLabel', className)

    const result = preparedData.data.map((item: DendrogramPreparedDataItem) => {
        const data = originalData[item.index]
        const leafX = horizontal ? item.leafHeight : item.leafPosition
        const leafY = horizontal ? item.leafPosition : item.leafHeight
        return data.ids.map((id: string, i: number) => {
            if (!idSet.has(id)) return null
            const position: NumericPositionSpec = [leafX[i], leafY[i]]
            const value = format ? format(id) : id
            return createElement(
                component,
                {
                    key: 'leaf-' + id,
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
