import {
    addColor,
    indexes,
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
    setRole = true,
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
            indexes(preparedData.keys).map(i => {
                const keyColor = colorScale(i)
                return addColor(style, keyColor)
            }),
        [preparedData, style, colorScale]
    )

    const commonProps = { variant: 'bar', setRole: false, ...componentProps, className }
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
                        ...commonProps,
                        x: pos[0],
                        y: pos[1],
                        width: size[0],
                        height: size[1],
                        style: styles[i],
                    },
                    ...props,
                })
            })
            .filter(Boolean)

        return (
            <OpacityMotion
                key={'b-' + k}
                role={setRole ? 'bars' : undefined}
                visible={visible}
                firstRender={firstRender}
            >
                {bars}
            </OpacityMotion>
        )
    })

    return <>{result.filter(Boolean)}</>
}
