import {
    addColor,
    OpacityMotion,
    useDisabledKeys,
    useScales,
    getIdKeySets,
    isBandAxisScale,
    TooltipDataComponent,
    useProcessedData,
} from '@chsk/core'
import { useQuantilePreparedData } from './context'
import { ReactNode, createElement, useMemo } from 'react'
import { BoxAndWhiskers } from './BoxAndWhiskers'
import { QuantilePreparedDataItem, QuantilesProps } from './types'
import { isQuantileProcessedData } from './predicates'

export const Quantiles = ({
    ids,
    keys,
    component = BoxAndWhiskers,
    className,
    setRole = true,
    boxStyle,
    whiskerStyle,
    medianStyle,
    whiskerCapWidth,
    dataComponent = TooltipDataComponent,
    ...props
}: QuantilesProps) => {
    const processedData = useProcessedData().data
    const preparedData = useQuantilePreparedData()
    const scales = useScales()
    const colorScale = scales.color
    const data = preparedData.data
    const { disabledKeys, firstRender } = useDisabledKeys()
    const horizontal = isBandAxisScale(scales.y)
    if (!isQuantileProcessedData(processedData)) return null

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
            const visible = !disabledKeys.has(k)
            const items = data
                .map((seriesData: QuantilePreparedDataItem) => {
                    if (!idSet.has(seriesData.id)) return null
                    const summary = seriesData.data[i]
                    const processedSummary = processedData[seriesData.index].data[i]
                    if (!processedSummary) return null
                    return createElement(dataComponent, {
                        key: 'quantiles-' + seriesData.index + '-' + i,
                        data: {
                            id: seriesData.id,
                            key: k,
                            ...processedSummary,
                        },
                        component,
                        props: {
                            data: summary,
                            horizontal,
                            className,
                            boxStyle: boxStyles[i],
                            whiskerStyle: whiskerStyles[i],
                            medianStyle: medianStyles[i],
                            whiskerCapWidth,
                            setRole,
                        },
                        ...props,
                    })
                })
                .filter(Boolean)

            return (
                <OpacityMotion
                    key={'quantiles-' + i}
                    role={'quantiles'}
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
