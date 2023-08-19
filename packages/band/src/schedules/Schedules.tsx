import {
    addColor,
    indexes,
    OpacityMotion,
    useDisabledKeys,
    useScales,
    useIdsKeys,
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
    componentProps,
    className,
    setRole = true,
    dataComponent = TooltipDataComponent,
    style,
    ...props
}: SchedulesProps) => {
    const processedData = useProcessedData().data
    const preparedData = useSchedulePreparedData()
    const { scales } = useScales()
    const colorScale = scales.color
    const data = preparedData.data
    const { disabledKeys, firstRender } = useDisabledKeys()
    const { idSet, keySet } = useIdsKeys(ids, keys, preparedData)
    if (!isScheduleProcessedData(processedData)) return null

    const styles = useMemo(
        () =>
            indexes(preparedData.keys).map(i => {
                const keyColor = colorScale(i)
                return addColor(style, keyColor)
            }),
        [preparedData, style, colorScale]
    )

    const allKeys = preparedData.keys
    const commonProps = { variant: 'schedule', setRole: false, ...componentProps, className }
    const result = preparedData.keys
        .map((k, i) => {
            if (!keySet.has(k)) return null
            const visible = !disabledKeys.has(k)
            const items: Array<ReactNode> = []
            data.map((seriesData: SchedulePreparedDataItem) => {
                if (!idSet.has(seriesData.id)) return null
                seriesData.data.map((dataItem: SchedulePreparedSummary) => {
                    if (!keySet.has(dataItem.key) || dataItem.key != k) return null
                    const keyIndex = allKeys.indexOf(dataItem.key)
                    const [x, y] = dataItem.position
                    const [width, height] = dataItem.size
                    const el = createElement(dataComponent, {
                        key: 's-' + seriesData.index + '-' + i,
                        data: { id: seriesData.id, ...dataItem },
                        component,
                        props: { ...commonProps, x, y, width, height, style: styles[keyIndex] },
                        ...props,
                    })
                    items.push(el)
                })
            })
            return (
                <OpacityMotion
                    key={'s-' + i}
                    role={setRole ? 'schedules' : undefined}
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
