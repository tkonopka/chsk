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
import { useDistributionPreparedData } from './context'
import { ReactNode, createElement, useMemo } from 'react'
import { BoxAndWhiskers } from './BoxAndWhiskers'
import { DistributionPreparedDataItem, DistributionsProps } from './types'
import { isDistributionProcessedData } from './predicates'

export const Distributions = ({
    ids,
    keys,
    component, // the default value is not set here to simplify the storybook docs page
    className,
    setRole = true,
    boxStyle,
    whiskerStyle,
    middleStyle,
    whiskerCapWidth,
    dataComponent = TooltipDataComponent,
    ...props
}: DistributionsProps) => {
    const processedData = useProcessedData().data
    const preparedData = useDistributionPreparedData()
    const scales = useScales()
    const colorScale = scales.color
    const data = preparedData.data
    const { disabledKeys, firstRender } = useDisabledKeys()
    const horizontal = isBandAxisScale(scales.y)
    if (!isDistributionProcessedData(processedData)) return null

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
    const middleStyles = useMemo(
        () => allKeys.map((k, i) => addColor(middleStyle, colorScale(i))),
        [allKeys, middleStyle, colorScale]
    )

    const result: Array<ReactNode> = preparedData.keys
        .map((k, i) => {
            if (!keySet.has(k)) return null
            const visible = !disabledKeys.has(k)
            const items = data
                .map((seriesData: DistributionPreparedDataItem) => {
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
                        component: component ?? BoxAndWhiskers,
                        props: {
                            data: summary,
                            horizontal,
                            className,
                            boxStyle: boxStyles[i],
                            whiskerStyle: whiskerStyles[i],
                            middleStyle: middleStyles[i],
                            whiskerCapWidth,
                            setRole,
                        },
                        ...props,
                    })
                })
                .filter(Boolean)

            return (
                <OpacityMotion
                    key={'distributions-' + i}
                    role={'distributions'}
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
