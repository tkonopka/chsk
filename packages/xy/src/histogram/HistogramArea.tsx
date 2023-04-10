import { createElement, useMemo } from 'react'
import {
    addColor,
    DataComponent,
    isContinuousAxisScale,
    OpacityMotion,
    Path,
    useDisabledKeys,
    useProcessedData,
    useScales,
} from '@chsk/core'
import { getAreaD } from '../scatter/ScatterArea'
import { HistogramCurveProps } from './types'
import { useHistogramPreparedData } from './context'
import { isHistogramProcessedData } from './predicates'

export const HistogramArea = ({
    ids,
    curve = 'MonotoneX',
    style,
    setRole = true,
    dataComponent = DataComponent,
    ...props
}: HistogramCurveProps) => {
    const processedData = useProcessedData().data
    const preparedData = useHistogramPreparedData()
    const { scales } = useScales()
    const scaleY = scales.y
    const colorScale = scales.color
    const { disabledKeys, firstRender } = useDisabledKeys()
    if (!isContinuousAxisScale(scaleY)) return null
    if (!isHistogramProcessedData(processedData)) return null

    const areas: Record<string, string> = {}
    preparedData.keys.map(id => {
        const seriesIndex = preparedData.seriesIndexes[id]
        areas[id] = useMemo(
            () =>
                getAreaD({
                    points: preparedData.data[seriesIndex].points,
                    curve,
                    scaleY,
                    baseline: 0,
                }),
            [seriesIndex, preparedData, curve, scaleY]
        )
    })

    const result = (ids ?? preparedData.keys).map(id => {
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return null
        const visible = !disabledKeys.has(id)
        const seriesStyle = addColor(style, colorScale(seriesIndex))
        const element = createElement(dataComponent, {
            data: processedData[seriesIndex],
            component: Path,
            props: {
                variant: 'histogram-area',
                d: areas[id],
                setRole,
                style: seriesStyle,
            },
            ...props,
        })
        return (
            <OpacityMotion
                role={setRole ? 'histogram-area-presence' : undefined}
                key={'area-' + seriesIndex}
                visible={visible}
                firstRender={firstRender}
            >
                {element}
            </OpacityMotion>
        )
    })

    return <>{result.filter(Boolean)}</>
}
