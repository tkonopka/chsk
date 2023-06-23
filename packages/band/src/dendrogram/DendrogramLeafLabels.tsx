import { DendrogramLeafLabelsProps, DendrogramPreparedDataItem } from './types'
import {
    getClassName,
    useIdsKeys,
    isBandAxisScale,
    Label,
    NumericPositionSpec,
    useRawData,
    useScales,
} from '@chsk/core'
import { createElement } from 'react'
import { isDendrogramData } from './predicates'
import { useDendrogramPreparedData } from './context'

export const DendrogramLeafLabels = ({
    variant = 'leaf-label',
    ids,
    keys,
    format,
    component = Label,
    className,
    setRole,
    ...props
}: DendrogramLeafLabelsProps) => {
    const originalData = useRawData().data
    const preparedData = useDendrogramPreparedData()
    const { scales } = useScales()
    const horizontal = isBandAxisScale(scales.y)
    const { idSet, keySet } = useIdsKeys(ids, keys, preparedData)
    if (!isDendrogramData(originalData)) return null

    const compositeClassName = getClassName(variant, className)

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
                    setRole,
                    className: compositeClassName,
                    ...props,
                },
                value
            )
        })
    })

    return <g role={setRole ? 'dendrogram-leaf-labels' : undefined}>{result}</g>
}
