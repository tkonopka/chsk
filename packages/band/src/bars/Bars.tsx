import {
    addColor,
    OpacityMotion,
    Rectangle,
    useDisabledKeys,
    useScales,
    getIdKeySets,
} from '@chask/core'
import { BarPreparedDataItem, BarsProps } from './types'
import { useBarPreparedData } from './context'
import { ReactNode, createElement, useMemo } from 'react'

export const Bars = ({ ids, keys, component = Rectangle, className, style }: BarsProps) => {
    const preparedData = useBarPreparedData()
    const colorScale = useScales().color
    const data = preparedData.data
    const { disabledKeys, firstRender } = useDisabledKeys()

    const { idSet, keySet } = useMemo(
        () => getIdKeySets(ids, keys, preparedData),
        [ids, keys, preparedData]
    )

    const styles = useMemo(
        () =>
            preparedData.keys.map((k, i) => {
                const keyColor = colorScale(i)
                return addColor(style, keyColor)
            }),
        [preparedData, style, colorScale]
    )

    const result: Array<ReactNode> = preparedData.keys
        .map((k, i) => {
            if (!keySet.has(k)) return null
            if (disabledKeys.has(k)) return null
            const bars = data
                .map((seriesData: BarPreparedDataItem) => {
                    if (!idSet.has(seriesData.id)) return null
                    const pos = seriesData.position[i]
                    const size = seriesData.size[i]
                    if (!Number.isFinite(size[0]) || !Number.isFinite(size[1])) return null
                    return createElement(component, {
                        key: 'bar-' + seriesData.index + '-' + i,
                        x: pos[0],
                        y: pos[1],
                        width: size[0],
                        height: size[1],
                        className: className,
                        style: styles[i],
                        variant: 'bar',
                        setRole: false,
                    })
                })
                .filter(v => v)
            if (bars.length === 0) return null

            return (
                <OpacityMotion key={'bars-' + i} role={'bars'} firstRender={firstRender}>
                    {bars}
                </OpacityMotion>
            )
        })
        .filter(v => v)

    if (result.length === 0) return null
    return <>{result}</>
}
