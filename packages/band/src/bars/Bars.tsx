import {
    addColor,
    OpacityMotion,
    Rectangle,
    useDisabledKeys,
    useScales,
    useIdsKeys,
    TooltipDataComponent,
    useProcessedData,
} from '@chsk/core'
import { BarPreparedDataItem, BarsProps } from './types'
import { useBarPreparedData } from './context'
import { createElement, useMemo } from 'react'
import { isBarProcessedData } from './predicates'

export const Bars = ({
    ids,
    keys,
    component = Rectangle,
    componentProps,
    className,
    style,
    dataComponent = TooltipDataComponent,
    ...props
}: BarsProps) => {
    const processedData = useProcessedData().data
    const preparedData = useBarPreparedData()
    const colorScale = useScales().scales.color
    const data = preparedData.data
    const { disabledKeys, firstRender } = useDisabledKeys()
    const { idSet, keySet } = useIdsKeys(ids, keys, preparedData)
    if (!isBarProcessedData(processedData)) return null

    const styles = useMemo(
        () =>
            preparedData.keys.map((k, i) => {
                const keyColor = colorScale(i)
                return addColor(style, keyColor)
            }),
        [preparedData, style, colorScale]
    )

    const result = preparedData.keys.map((k, i) => {
        if (!keySet.has(k)) return null
        const visible = !disabledKeys.has(k)
        const bars = data
            .map((seriesData: BarPreparedDataItem) => {
                if (!idSet.has(seriesData.id)) return null
                const pos = seriesData.position[i]
                const size = seriesData.size[i]
                if (size[0] === 0 || size[1] === 0) return null
                return createElement(dataComponent, {
                    key: 'bar-' + seriesData.id + '-' + k,
                    component,
                    data: {
                        id: seriesData.id,
                        key: k,
                        data: processedData[seriesData.index].data[i],
                    },
                    props: {
                        variant: 'bar',
                        setRole: false,
                        ...componentProps,
                        x: pos[0],
                        y: pos[1],
                        width: size[0],
                        height: size[1],
                        className: className,
                        style: styles[i],
                    },
                    ...props,
                })
            })
            .filter(Boolean)

        return (
            <OpacityMotion
                key={'bars-' + k}
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
