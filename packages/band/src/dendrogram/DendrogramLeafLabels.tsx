import { DendrogramLeafLabelsProps, DendrogramPreparedDataItem } from './types'
import {
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
    componentProps,
    className,
    setRole = true,
    ...props
}: DendrogramLeafLabelsProps) => {
    const originalData = useRawData().data
    const preparedData = useDendrogramPreparedData()
    const { scales } = useScales()
    const horizontal = isBandAxisScale(scales.y)
    const { idSet, keySet } = useIdsKeys(ids, keys, preparedData)
    if (!isDendrogramData(originalData)) return null

    const commonProps = { variant, setRole: false, ...componentProps, className }
    const result = preparedData.data.map((item: DendrogramPreparedDataItem) => {
        if (!idSet.has(item.id)) return null
        const data = originalData[item.index]
        const leafX = horizontal ? item.leafHeight : item.leafPosition
        const leafY = horizontal ? item.leafPosition : item.leafHeight
        return data?.keys.map((k: string, i: number) => {
            const x = leafX[i]
            const y = leafY[i]
            if (!keySet.has(k) || !x || !y) return null
            const position: NumericPositionSpec = [x, y]
            const value = format ? format(k) : k
            return createElement(
                component,
                {
                    key: 'l-' + item.id + '-' + k,
                    ...commonProps,
                    position,
                    ...props,
                },
                value
            )
        })
    })

    return <g role={setRole ? 'dendrogram-leaf-labels' : undefined}>{result}</g>
}
