import { OpacityMotion, useDisabledKeys, NumericPositionSpec, Label, getCenter } from '@chsk/core'
import {
    ScatterChargedLabelsProps,
    ScatterChargedLabelData,
    ScatterPreparedDataItem,
} from './types'
import { useScatterPreparedData } from './context'
import { createElement, useMemo } from 'react'
import { blockObject, BlockObject, arrangeBlockObjects } from './charges'

export const ScatterChargedLabels = ({
    data,
    component = Label,
    anchor = [0.5, 0.5],
    offset = [0, -0.1],
    clearance = 8,
    maxIterations = 10,
    maxDelta = 20,
    minDelta = 0.1,
    className,
    style,
    setRole = true,
}: ScatterChargedLabelsProps) => {
    const preparedData = useScatterPreparedData()
    const { disabledKeys, firstRender } = useDisabledKeys()

    const obstacles = useMemo(() => {
        const result: BlockObject[] = []
        preparedData.data.map((seriesData: ScatterPreparedDataItem) => {
            if (disabledKeys.has(seriesData.id)) return
            seriesData.x.map((v, i) => {
                const position: NumericPositionSpec = [v, seriesData.y[i]]
                result.push(blockObject(position, undefined, seriesData.r[i]))
            })
        })
        return result
    }, [preparedData, disabledKeys])

    const seriesFilter = (item: ScatterChargedLabelData) => {
        return !disabledKeys.has(item.id) && preparedData.seriesIndexes[item.id] !== undefined
    }
    const active = data.filter(seriesFilter)
    const labels = useMemo(() => {
        return data.filter(seriesFilter).map((item: ScatterChargedLabelData) => {
            const seriesIndex = preparedData.seriesIndexes[item.id]
            const seriesData = preparedData.data[seriesIndex]
            const position: NumericPositionSpec = [
                seriesData.x[item.index],
                seriesData.y[item.index],
            ]
            const center = getCenter(
                position,
                item.size ?? [0, 0],
                item.anchor ?? anchor,
                item.offset ?? offset
            )
            return blockObject(center, item.size, seriesData.r[item.index])
        })
    }, [preparedData, disabledKeys])

    const packed = useMemo(() => {
        return arrangeBlockObjects({
            items: labels,
            obstacles,
            clearance,
            maxIterations,
            maxDelta,
            minDelta,
        })
    }, [labels, obstacles])

    const result = packed.map((item, i) => {
        return createElement(
            component,
            {
                key: 'label-' + String(active[i].content),
                variant: 'scatter-charged-label',
                style,
                className,
                ...active[i],
                position: item.position,
                anchor: item.anchor,
            },
            active[i].content
        )
    })

    return (
        <OpacityMotion
            role={setRole ? 'scatter-charged-labels' : undefined}
            firstRender={firstRender}
        >
            {result}
        </OpacityMotion>
    )
}
