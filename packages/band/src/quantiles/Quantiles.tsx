import {
    addColor,
    indexes,
    OpacityMotion,
    useDisabledKeys,
    useScales,
    useIdsKeys,
    isBandAxisScale,
    TooltipDataComponent,
    useProcessedData,
} from '@chsk/core'
import { useQuantilePreparedData } from './context'
import { createElement, useMemo } from 'react'
import { BoxAndWhiskers } from './BoxAndWhiskers'
import { QuantilePreparedDataItem, QuantilesProps } from './types'
import { isQuantileProcessedData } from './predicates'

export const Quantiles = ({
    ids,
    keys,
    component = BoxAndWhiskers,
    componentProps,
    className,
    setRole = true,
    boxStyle,
    whiskerStyle,
    middleStyle,
    whiskerCapWidth,
    dataComponent = TooltipDataComponent,
    ...props
}: QuantilesProps) => {
    const processedData = useProcessedData().data
    const preparedData = useQuantilePreparedData()
    const { scales } = useScales()
    const colorScale = scales.color
    const data = preparedData.data
    const { disabledKeys, firstRender } = useDisabledKeys()
    const horizontal = isBandAxisScale(scales.y)
    const { idSet, keySet } = useIdsKeys(ids, keys, preparedData)
    if (!isQuantileProcessedData(processedData)) return null

    const allKeys = preparedData.keys
    const boxStyles = useMemo(
        () => indexes(allKeys).map(i => addColor(boxStyle, colorScale(i))),
        [allKeys, boxStyle, colorScale]
    )
    const whiskerStyles = useMemo(
        () => indexes(allKeys).map(i => addColor(whiskerStyle, colorScale(i))),
        [allKeys, whiskerStyle, colorScale]
    )
    const middleStyles = useMemo(
        () => indexes(allKeys).map(i => addColor(middleStyle, colorScale(i))),
        [allKeys, middleStyle, colorScale]
    )

    const commonProps = { setRole, ...componentProps, horizontal, className, whiskerCapWidth }
    const result = preparedData.keys
        .map((k, i) => {
            if (!keySet.has(k)) return null
            const visible = !disabledKeys.has(k)
            const items = data
                .map((seriesData: QuantilePreparedDataItem) => {
                    if (!idSet.has(seriesData.id)) return null
                    const summary = seriesData.data[i]
                    const processedSummary = processedData[seriesData.index]?.data[i]
                    if (!processedSummary) return null
                    return createElement(dataComponent, {
                        key: 'q-' + seriesData.index + '-' + i,
                        data: {
                            id: seriesData.id,
                            key: k,
                            ...processedSummary,
                        },
                        component,
                        props: {
                            ...commonProps,
                            data: summary,
                            boxStyle: boxStyles[i],
                            whiskerStyle: whiskerStyles[i],
                            middleStyle: middleStyles[i],
                        },
                        ...props,
                    })
                })
                .filter(Boolean)

            return (
                <OpacityMotion
                    key={'q-' + i}
                    role={setRole ? 'quantiles' : undefined}
                    visible={visible}
                    firstRender={firstRender}
                >
                    {items}
                </OpacityMotion>
            )
        })
        .filter(Boolean)

    return <>{result}</>
}
