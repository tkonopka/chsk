import {
    addColor,
    Circle,
    OpacityMotion,
    useDisabledKeys,
    useScales,
    getIdKeySets,
    isBandAxisScale,
    DataComponent,
    useProcessedData,
} from '@chsk/core'
import { useStripPreparedData } from './context'
import { ReactNode, createElement, useMemo } from 'react'
import { StripPreparedDataItem, StripsProps } from './types'
import { isStripProcessedData } from './predicates'

export const Strips = ({
    ids,
    keys,
    component = Circle,
    className,
    symbolStyle,
    dataComponent = DataComponent,
    ...props
}: StripsProps) => {
    const processedData = useProcessedData().data
    const preparedData = useStripPreparedData()
    const scales = useScales()
    const colorScale = scales.color
    const data = preparedData.data
    const { disabledKeys, firstRender } = useDisabledKeys()
    const horizontal = isBandAxisScale(scales.y)
    if (!isStripProcessedData(processedData)) return null

    const { idSet, keySet } = useMemo(
        () => getIdKeySets(ids, keys, preparedData),
        [ids, keys, preparedData]
    )

    const allKeys = preparedData.keys
    const symbolStyles = useMemo(
        () => allKeys.map((k, i) => addColor(symbolStyle, colorScale(i))),
        [allKeys, symbolStyle, colorScale]
    )

    const result: Array<ReactNode> = preparedData.keys.map((k, i) => {
        if (!keySet.has(k)) return null
        const visible = !disabledKeys.has(k)
        const items = data
            .map((seriesData: StripPreparedDataItem) => {
                if (!idSet.has(seriesData.id)) return null
                const summary = seriesData.data[i]
                if (!summary) return null
                const x = horizontal ? summary.value : summary.internal
                const y = horizontal ? summary.internal : summary.value
                const seriesProcessedData = processedData[seriesData.index].data[i]
                return summary.valueSize.map((valueSize: number, j: number) =>
                    createElement(dataComponent, {
                        key: 'point-' + seriesData.index + '-' + i + '-' + j,
                        data: {
                            id: seriesData.id,
                            key: k,
                            index: j,
                            value: seriesProcessedData?.value[j],
                            valueSize: seriesProcessedData?.valueSize[j],
                        },
                        component,
                        props: {
                            cx: x[j],
                            cy: y[j],
                            r: valueSize,
                            className,
                            style: symbolStyles[i],
                            setRole: false,
                        },
                        ...props,
                    })
                )
            })
            .filter(Boolean)
            .flat()

        return (
            <OpacityMotion
                key={'strips-' + i}
                role={'strips'}
                visible={visible}
                firstRender={firstRender}
            >
                {items}
            </OpacityMotion>
        )
    })

    return <>{result}</>
}
