import { createElement, ReactNode } from 'react'
import { getClassName, Label } from '@chsk/core'
import { isVennPreparedData } from './predicates'
import { VennIntersectionLabelsProps } from './types'
import { useVennPreparedData } from './contexts'

export const VennIntersectionLabels = ({
    ids,
    format = (v: number) => String(v),
    padding = [4, 4, 4, 4],
    size = [40, 10],
    anchor = [0.5, 0.5],
    align = [0.5, 0.5],
    offset = [0, 0],
    className,
    setRole = false,
    style,
    component = Label,
}: VennIntersectionLabelsProps) => {
    const preparedData = useVennPreparedData()
    const data = preparedData.data
    if (!isVennPreparedData(data)) return null

    const idSet = new Set(ids ?? preparedData.data.map(item => item.id))
    const compositeClassName = getClassName('vennIntersectionLabel', className)
    const componentProps = { size, anchor, align, offset, padding, style, setRole }
    const result: Array<ReactNode> = data
        .map((item, i) => {
            if (!idSet.has(item.id)) return null
            return createElement(
                component,
                {
                    key: 'label-' + i,
                    position: item.labelPosition,
                    className: compositeClassName,
                    ...componentProps,
                },
                format(item.value, item)
            )
        })
        .filter(Boolean)

    return <>{result}</>
}
