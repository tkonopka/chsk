import {
    addColor,
    Circle,
    OpacityMotion,
    useDisabledKeys,
    useScales,
    getIdKeySets,
    isBandAxisScale,
} from '@chask/core'
import { useStripPreparedData } from './context'
import { ReactNode, createElement, useMemo } from 'react'
import { StripPreparedDataItem, StripsProps } from './types'

export const Strips = ({ ids, keys, component = Circle, className, symbolStyle }: StripsProps) => {
    const preparedData = useStripPreparedData()
    const scales = useScales()
    const colorScale = scales.color
    const data = preparedData.data
    const { disabledKeys, firstRender } = useDisabledKeys()
    const horizontal = isBandAxisScale(scales.y)

    const { idSet, keySet } = useMemo(
        () => getIdKeySets(ids, keys, preparedData),
        [ids, keys, preparedData]
    )

    const allKeys = preparedData.keys
    const symbolStyles = useMemo(
        () => allKeys.map((k, i) => addColor(symbolStyle, colorScale(i))),
        [allKeys, symbolStyle, colorScale]
    )

    const result: Array<ReactNode> = preparedData.keys
        .map((k, i) => {
            if (!keySet.has(k)) return null
            if (disabledKeys.has(k)) return null
            const items = data
                .map((seriesData: StripPreparedDataItem) => {
                    if (!idSet.has(seriesData.id)) return null
                    const summary = seriesData.data[i]
                    if (!summary) return null
                    const x = horizontal ? summary.value : summary.internal
                    const y = horizontal ? summary.internal : summary.value
                    return summary.r.map((r: number, j: number) =>
                        createElement(component, {
                            key: 'point-' + seriesData.index + '-' + i + '-' + j,
                            cx: x[j],
                            cy: y[j],
                            r: r,
                            className: className,
                            style: symbolStyles[i],
                            setRole: false,
                        })
                    )
                })
                .filter(Boolean)
                .flat()
            if (items.length === 0) return null

            return (
                <OpacityMotion key={'strips-' + i} role={'strips'} firstRender={firstRender}>
                    {items}
                </OpacityMotion>
            )
        })
        .filter(Boolean)

    if (result.length === 0) return null
    return <>{result}</>
}
