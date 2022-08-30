import {
    addColor,
    isContinuousAxisScale,
    OpacityMotion,
    useDisabledKeys,
    useScales,
} from '@chask/core'
import { getAreaD } from '../scatter/ScatterArea'
import { HistogramCurveProps } from './types'
import { useHistogramPreparedData } from './context'
import { useMemo } from 'react'

export const HistogramArea = ({
    ids,
    curve = 'MonotoneX',
    variant = 'default',
    style,
    className = 'histogramArea',
    setRole,
}: HistogramCurveProps) => {
    const preparedData = useHistogramPreparedData()
    const scales = useScales()
    const scaleY = scales.y
    const colorScale = scales.color
    const { disabledKeys, firstRender } = useDisabledKeys()
    if (!isContinuousAxisScale(scaleY)) return null

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
        if (disabledKeys.has(id)) return null
        const seriesStyle = addColor(style, colorScale(seriesIndex))
        return (
            <OpacityMotion
                role={'histogram-area'}
                key={'histogram-area-' + seriesIndex}
                firstRender={firstRender}
            >
                <path
                    d={areas[id]}
                    role={setRole ? variant : undefined}
                    style={seriesStyle}
                    className={className}
                />
            </OpacityMotion>
        )
    })

    return <>{result.filter(v => v)}</>
}
