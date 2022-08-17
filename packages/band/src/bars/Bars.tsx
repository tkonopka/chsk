import { addColor, Rectangle, useScales } from '@chask/core'
import { BarPreparedDataContextProps, BarPreparedDataItem, BarsProps } from './types'
import { useBarPreparedData } from './context'
import { ReactNode, useMemo } from 'react'
import { isFinite } from 'lodash'

// get set objects containing ids and keys to display
const getIdKeySets = (
    ids: string[] | undefined,
    keys: string[] | undefined,
    preparedData: BarPreparedDataContextProps
) => {
    const idSet = ids ? new Set(ids) : new Set(Object.keys(preparedData.seriesIndexes))
    const keySet = keys ? new Set(keys) : new Set(preparedData.keys)
    return { idSet, keySet }
}

export const Bars = ({ ids, keys, bar = Rectangle, className, style }: BarsProps) => {
    const preparedData = useBarPreparedData()
    const colorScale = useScales().color
    const data = preparedData.data

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

    const bars: Array<ReactNode> = data
        .map((seriesData: BarPreparedDataItem) => {
            if (!idSet.has(seriesData.id)) return null
            return seriesData.position.map((pos, i) => {
                if (!keySet.has(preparedData.keys[i])) return null
                const size = seriesData.size[i]
                if (!isFinite(size[0]) || !isFinite(size[1])) return null
                return bar({
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
        })
        .flat()
        .filter(v => v)

    if (bars.length === 0) return null
    return (
        <g role={'bar-bars'} key={'bar-bars'}>
            {bars}
        </g>
    )
}
