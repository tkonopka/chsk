import {
    addColor,
    indexes,
    DataComponent,
    isContinuousAxisScale,
    NumericPositionSpec,
    OpacityMotion,
    Rectangle,
    useDisabledKeys,
    useProcessedData,
    useScales,
    X,
    Y,
} from '@chsk/core'

import { HistogramBarsProps } from './types'
import { useHistogramPreparedData } from './context'
import { createElement, useMemo } from 'react'
import { isHistogramProcessedData } from './predicates'

export const HistogramBars = ({
    ids,
    component = Rectangle,
    componentProps,
    style,
    className,
    setRole = true,
    dataComponent = DataComponent,
    ...props
}: HistogramBarsProps) => {
    const processedData = useProcessedData().data
    const preparedData = useHistogramPreparedData()
    const { scales } = useScales()
    const scaleY = scales.y
    const colorScale = scales.color
    const { disabledKeys, firstRender } = useDisabledKeys()
    if (!isContinuousAxisScale(scaleY)) return null
    if (!isHistogramProcessedData(processedData)) return null

    const styles = useMemo(
        () =>
            indexes(preparedData.keys).map(i => {
                const keyColor = colorScale(i)
                return addColor(style, keyColor)
            }),
        [preparedData, style, colorScale]
    )
    const zero: number = scaleY(0)

    const commonProps = { variant: 'histogram-bar', setRole: false, ...componentProps, className }
    const result = (ids ?? preparedData.keys).map(id => {
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return null
        const visible = !disabledKeys.has(id)
        const points = preparedData.data[seriesIndex]?.points ?? []
        const n = points.length
        const bars = points
            .map((point: NumericPositionSpec, i: number) => {
                if (i === 0 || i === n - 1) return null
                // finding the width of the bin is complicated because the points are potentially not evenly-spaced
                // also, the boundary points have different properties than middle points
                const previous = points[i - 1] as NumericPositionSpec
                const next = points[i + 1] as NumericPositionSpec
                const left = (point[X] - previous[X]) * (i === 1 ? 1 : 0.5)
                const right = (next[X] - point[X]) * (i === n - 2 ? 1 : 0.5)
                const width = left + right
                const height = point[Y] - zero
                const data = processedData[seriesIndex]
                if (width === 0 || height === 0 || !data) return null
                return createElement(dataComponent, {
                    key: 'b-' + seriesIndex + '-' + i,
                    component,
                    data: { ...data, bin: i },
                    props: {
                        ...commonProps,
                        x: point[X] - left,
                        y: zero,
                        width,
                        height,
                        style: styles[seriesIndex],
                    },
                    ...props,
                })
            })
            .filter(Boolean)
        return (
            <OpacityMotion
                key={'b-' + seriesIndex}
                role={setRole ? 'histogram-bars' : undefined}
                visible={visible}
                firstRender={firstRender}
            >
                {bars}
            </OpacityMotion>
        )
    })

    return <>{result.filter(Boolean)}</>
}
