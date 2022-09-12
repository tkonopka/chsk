import { createElement, ReactNode, useMemo } from 'react'
import {
    composeClassName,
    getIdKeySets,
    Label,
    OpacityMotion,
    useDisabledKeys,
    useProcessedData,
    X,
    Y,
} from '@chask/core'
import { BarPreparedDataItem, BarsLabelsProps } from './types'
import { useBarPreparedData } from './context'
import { isBarProcessedData } from './utils'

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
    const { disabledKeys, firstRender } = useDisabledKeys()
    if (!isBarProcessedData(processedData)) return null

    const { idSet, keySet } = useMemo(
        () => getIdKeySets(ids, keys, preparedData),
        [ids, keys, preparedData]
    )
    const innerClassName = composeClassName(['barLabel', className])
    const outerClassName = composeClassName(['barLabel out', className])

    const result: Array<ReactNode> = preparedData.keys.map((k, i) => {
        if (!keySet.has(k)) return null
        if (disabledKeys.has(k)) return null
        const labels = data
            .map((seriesData: BarPreparedDataItem, j) => {
                if (!idSet.has(seriesData.id)) return null
                const size = seriesData.size[i]
                const pos = seriesData.position[i]
                if (!Number.isFinite(size[X]) || !Number.isFinite(size[Y])) return null
                const center = [pos[0] + size[0] / 2, pos[1] + size[1] / 2]
                let labelStyle = style
                let compositeClassName = innerClassName
                if (Math.abs(size[0]) < minSize[0] || Math.abs(size[1]) < minSize[1]) {
                    if (!showOuter) return null
                    labelStyle = styleOuter
                    center[X] += size[X]
                    compositeClassName = outerClassName
                }
                const value = format(processedData[j].data[i])
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
            .filter(Boolean)
        if (labels.length === 0) return null
        return (
            <OpacityMotion key={'bars-labels-' + i} role={'bars-labels'} firstRender={firstRender}>
                {labels}
            </OpacityMotion>
        )
    })

    return <>{result.filter(Boolean)}</>
}
