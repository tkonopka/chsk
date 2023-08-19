import {
    addColor,
    indexes,
    Circle,
    OpacityMotion,
    useDisabledKeys,
    useScales,
    useIdsKeys,
    isBandAxisScale,
    DataComponent,
    useProcessedData,
} from '@chsk/core'
import { useStripPreparedData } from './context'
import { createElement, useMemo } from 'react'
import { StripPreparedDataItem, StripsProps } from './types'
import { isStripProcessedData } from './predicates'

export const Strips = ({
    ids,
    keys,
    component = Circle,
    componentProps,
    setRole = true,
    className,
    symbolStyle,
    dataComponent = DataComponent,
    ...props
}: StripsProps) => {
    const processedData = useProcessedData().data
    const preparedData = useStripPreparedData()
    const { scales } = useScales()
    const colorScale = scales.color
    const data = preparedData.data
    const { disabledKeys, firstRender } = useDisabledKeys()
    const horizontal = isBandAxisScale(scales.y)
    const { idSet, keySet } = useIdsKeys(ids, keys, preparedData)
    if (!isStripProcessedData(processedData)) return null

    const allKeys = preparedData.keys
    const symbolStyles = useMemo(
        () => indexes(allKeys).map(i => addColor(symbolStyle, colorScale(i))),
        [allKeys, symbolStyle, colorScale]
    )

    const commonProps = { setRole: false, ...componentProps, className }
    const result = preparedData.keys.map((k, i) => {
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
                        key: 'p-' + seriesData.index + '-' + i + '-' + j,
                        data: {
                            id: seriesData.id,
                            key: k,
                            index: j,
                            value: seriesProcessedData?.value[j],
                            valueSize: seriesProcessedData?.valueSize[j],
                        },
                        component,
                        props: {
                            ...commonProps,
                            cx: x[j],
                            cy: y[j],
                            r: valueSize,
                            style: symbolStyles[i],
                        },
                        ...props,
                    })
                )
            })
            .filter(Boolean)
            .flat()

        return (
            <OpacityMotion
                key={'s-' + i}
                role={setRole ? 'strips' : undefined}
                visible={visible}
                firstRender={firstRender}
            >
                {items}
            </OpacityMotion>
        )
    })

    return <>{result}</>
}
