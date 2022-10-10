import {
    addColor,
    OpacityMotion,
    Rectangle,
    useDisabledKeys,
    useScales,
    getIdKeySets,
    DataComponent,
    useProcessedData,
} from '@chsk/core'
import { BarPreparedDataItem, BarsProps } from './types'
import { useBarPreparedData } from './context'
import { ReactNode, createElement, useMemo } from 'react'
import { isBarProcessedData } from './predicates'

export const Bars = ({
    ids,
    keys,
    component = Rectangle,
    className,
    style,
    dataComponent = DataComponent,
    ...props
}: BarsProps) => {
    const processedData = useProcessedData().data
    const preparedData = useBarPreparedData()
    const colorScale = useScales().color
    const data = preparedData.data
    const { disabledKeys, firstRender } = useDisabledKeys()
    if (!isBarProcessedData(processedData)) return null

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

    const result: Array<ReactNode> = preparedData.keys.map((k, i) => {
        if (!keySet.has(k)) return null
        const visible = !disabledKeys.has(k)
        const bars = data
            .map((seriesData: BarPreparedDataItem) => {
                if (!idSet.has(seriesData.id)) return null
                const pos = seriesData.position[i]
                const size = seriesData.size[i]
                if (!Number.isFinite(size[0]) || !Number.isFinite(size[1])) return null
                if (size[0] === 0 || size[1] === 0) return null
                return createElement(dataComponent, {
                    key: 'bar-' + seriesData.index + '-' + i,
                    component,
                    data: {
                        id: seriesData.id,
                        key: k,
                        data: processedData[seriesData.index].data[i],
                    },
                    props: {
                        x: pos[0],
                        y: pos[1],
                        width: size[0],
                        height: size[1],
                        className: className,
                        style: styles[i],
                        variant: 'bar',
                        setRole: false,
                    },
                    ...props,
                })
            })
            .filter(Boolean)

        return (
            <OpacityMotion
                key={'bars-' + i}
                role={'bars'}
                visible={visible}
                firstRender={firstRender}
            >
                {bars}
            </OpacityMotion>
        )
    })

    return <>{result.filter(Boolean)}</>
}
