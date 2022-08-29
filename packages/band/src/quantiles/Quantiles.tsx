import {
    addColor,
    OpacityMotion,
    useDisabledKeys,
    useScales,
    getIdKeySets,
    isBandAxisScale,
} from '@chask/core'
import { useQuantilePreparedData } from './context'
import { ReactNode, createElement, useMemo } from 'react'
import { BoxAndWhiskers } from './BoxAndWhiskers'
import { QuantilePreparedDataItem, QuantilesProps } from './types'

export const Quantiles = ({
    ids,
    keys,
    component = BoxAndWhiskers,
    className,
    boxStyle,
    whiskerStyle,
    medianStyle,
    whiskerCapWidth,
}: QuantilesProps) => {
    const preparedData = useQuantilePreparedData()
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
    const boxStyles = useMemo(
        () => allKeys.map((k, i) => addColor(boxStyle, colorScale(i))),
        [allKeys, boxStyle, colorScale]
    )
    const whiskerStyles = useMemo(
        () => allKeys.map((k, i) => addColor(whiskerStyle, colorScale(i))),
        [allKeys, whiskerStyle, colorScale]
    )
    const medianStyles = useMemo(
        () => allKeys.map((k, i) => addColor(medianStyle, colorScale(i))),
        [allKeys, medianStyle, colorScale]
    )

    const result: Array<ReactNode> = preparedData.keys
        .map((k, i) => {
            if (!keySet.has(k)) return null
            if (disabledKeys.has(k)) return null
            const items = data
                .map((seriesData: QuantilePreparedDataItem) => {
                    if (!idSet.has(seriesData.id)) return null
                    const summary = seriesData.summaries[i]
                    return createElement(component, {
                        key: 'boxwhiskers-' + seriesData.index + '-' + i,
                        data: summary,
                        horizontal: horizontal,
                        className: className,
                        boxStyle: boxStyles[i],
                        whiskerStyle: whiskerStyles[i],
                        medianStyle: medianStyles[i],
                        whiskerCapWidth: whiskerCapWidth,
                        setRole: true,
                    })
                })
                .filter(v => v)
            if (items.length === 0) return null

            return (
                <OpacityMotion
                    key={'boxwhiskers-' + i}
                    role={'quantiles'}
                    firstRender={firstRender}
                >
                    {items}
                </OpacityMotion>
            )
        })
        .filter(v => v)

    if (result.length === 0) return null
    return <>{result}</>
}
