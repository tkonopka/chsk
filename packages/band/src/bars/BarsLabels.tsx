import { createElement, ReactNode, useMemo } from 'react'
import { composeClassName, Label, useProcessedData, X, Y } from '@chask/core'
import { getIdKeySets } from '../bands'
import { BarPreparedDataItem, BarsLabelsProps } from './types'
import { useBarPreparedData } from './context'
import { isBarProcessedData } from './Bar'

export const BarsLabels = ({
    ids,
    keys,
    format = (v: string | number) => String(v),
    padding = [4, 4, 4, 4],
    minSize = [40, 10],
    align = [0.5, 0.5],
    translate = [0, 0],
    className,
    setRole = false,
    style,
    showOuter = false,
    styleOuter,
    component = Label,
}: BarsLabelsProps) => {
    const processedData = useProcessedData().data
    const preparedData = useBarPreparedData()
    const data = preparedData.data
    if (!isBarProcessedData(processedData)) return null

    const { idSet, keySet } = useMemo(
        () => getIdKeySets(ids, keys, preparedData),
        [ids, keys, preparedData]
    )
    const innerClassName = composeClassName(['barLabel', className])
    const outerClassName = composeClassName(['barLabel out', className])

    const labels: Array<ReactNode> = data
        .map((seriesData: BarPreparedDataItem, j: number) => {
            if (!idSet.has(seriesData.id)) return null
            return seriesData.position.map((pos, i) => {
                if (!keySet.has(preparedData.keys[i])) return null
                const size = seriesData.size[i]
                if (!Number.isFinite(size[X]) || !Number.isFinite(size[Y])) return null
                const center = [pos[0] + size[0] / 2, pos[1] + size[1] / 2]
                let labelStyle = style
                let compositeClassName = innerClassName
                if (size[0] < minSize[0] || size[1] < minSize[1]) {
                    if (!showOuter) return null
                    labelStyle = styleOuter
                    center[X] += size[X]
                    compositeClassName = outerClassName
                }
                const value = format(processedData[j].value[i])
                return createElement(
                    component,
                    {
                        key: 'bar-label-' + j + '-' + i,
                        position: [center[X] + translate[X], center[Y] + translate[Y]],
                        size,
                        align,
                        padding,
                        className: compositeClassName,
                        style: labelStyle,
                        setRole: setRole,
                    },
                    value
                )
            })
        })
        .flat()
        .filter(v => v)

    if (labels.length === 0) return null
    return <g role={'bars-labels'}>{labels}</g>
}
