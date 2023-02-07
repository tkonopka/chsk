import {
    addColor,
    OpacityMotion,
    useDisabledKeys,
    useScales,
    getIdKeySets,
    TooltipDataComponent,
    useProcessedData,
    Rectangle,
} from '@chsk/core'
import { useSchedulePreparedData } from './context'
import { ReactNode, createElement, useMemo } from 'react'
import { SchedulePreparedDataItem, SchedulePreparedSummary, SchedulesProps } from './types'
import { isScheduleProcessedData } from './predicates'

export const Schedules = ({
    ids,
    keys,
    component = Rectangle,
    className,
    setRole = true,
    dataComponent = TooltipDataComponent,
    style,
    ...props
}: SchedulesProps) => {
    const processedData = useProcessedData().data
    const preparedData = useSchedulePreparedData()
    const scales = useScales()
    const colorScale = scales.color
    const data = preparedData.data
    const { disabledKeys, firstRender } = useDisabledKeys()
    if (!isScheduleProcessedData(processedData)) return null

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

    const allKeys = preparedData.keys
    const result: Array<ReactNode> = preparedData.keys
        .map((k, i) => {
            if (!keySet.has(k)) return null
            const visible = !disabledKeys.has(k)
            const items: Array<ReactNode> = []
            data.map((seriesData: SchedulePreparedDataItem) => {
                if (!idSet.has(seriesData.id)) return null
                seriesData.data.map((dataItem: SchedulePreparedSummary) => {
                    if (!keySet.has(dataItem.key) || dataItem.key != k) return null
                    const keyIndex = allKeys.indexOf(dataItem.key)
                    const pos = dataItem.position
                    const size = dataItem.size
                    const el = createElement(dataComponent, {
                        key: 'interval-' + seriesData.index + '-' + i,
                        data: {
                            id: seriesData.id,
                            ...dataItem,
                        },
                        component,
                        props: {
                            x: pos[0],
                            y: pos[1],
                            width: size[0],
                            height: size[1],
                            className,
                            style: styles[keyIndex],
                            variant: 'interval',
                            setRole: setRole,
                        },
                        ...props,
                    })
                    items.push(el)
                })
            })
            return (
                <OpacityMotion
                    key={'intervals-' + i}
                    role={'intervals'}
                    visible={visible}
                    firstRender={firstRender}
                >
                    {items.filter(Boolean)}
                </OpacityMotion>
            )
        })
        .filter(Boolean)

    return <>{result}</>
}
