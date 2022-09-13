import {
    addColor,
    isContinuousAxisScale,
    NumericPositionSpec,
    OpacityMotion,
    Rectangle,
    useDisabledKeys,
    useScales,
    X,
    Y,
} from '@chask/core'

import { HistogramBarsProps } from './types'
import { useHistogramPreparedData } from './context'
import { createElement, useMemo } from 'react'

export const HistogramBars = ({
    ids,
    component = Rectangle,
    variant = 'histogram-bar',
    style,
    className = 'histogramBars',
    setRole = false,
}: HistogramBarsProps) => {
    const preparedData = useHistogramPreparedData()
    const scales = useScales()
    const scaleY = scales.y
    const colorScale = scales.color
    const { disabledKeys, firstRender } = useDisabledKeys()
    if (!isContinuousAxisScale(scaleY)) return null

    const styles = useMemo(
        () =>
            preparedData.keys.map((k, i) => {
                const keyColor = colorScale(i)
                return addColor(style, keyColor)
            }),
        [preparedData, style, colorScale]
    )
    const zero: number = scaleY(0)

    const result = (ids ?? preparedData.keys).map(id => {
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return null
        if (disabledKeys.has(id)) return null
        const points = preparedData.data[seriesIndex].points
        const n = points.length
        const bars = points
            .map((point: NumericPositionSpec, i: number) => {
                if (i === 0 || i === n - 1) return null
                // finding with width of the bin is complicated because the points are potentially not evenly-spaced
                // also, the boundary points have different properties than middle points
                const previous = points[i - 1]
                const next = points[i + 1]
                const left = (point[X] - previous[X]) * (i === 1 ? 1 : 0.5)
                const right = (next[X] - point[X]) * (i === n - 2 ? 1 : 0.5)
                const width = left + right
                const height = point[Y] - zero
                if (width === 0 || height === 0) return null
                return createElement(component, {
                    key: 'bar-' + seriesIndex + '-' + i,
                    x: point[X] - left,
                    y: zero,
                    width: width,
                    height: height,
                    className: className,
                    style: styles[seriesIndex],
                    variant: variant,
                    setRole: setRole,
                })
            })
            .filter(Boolean)
        return (
            <OpacityMotion
                key={'histogram-bars-' + seriesIndex}
                role={'histogram-bars'}
                firstRender={firstRender}
            >
                {bars}
            </OpacityMotion>
        )
    })

    return <>{result.filter(Boolean)}</>
}
