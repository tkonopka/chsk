import {
    addColor,
    ContinuousAxisScale,
    createAreaGenerator,
    CurveSpec,
    Path,
    isContinuousAxisScale,
    NumericPositionIntervalSpec,
    OpacityMotion,
    useDisabledKeys,
    useScales,
    XY,
} from '@chask/core'
import { ScatterAreaProps } from './types'
import { useScatterPreparedData } from './context'
import { getScatterCurvePoints } from './ScatterCurve'
import { useMemo } from 'react'

export const getAreaD = ({
    points,
    scaleY,
    baseline,
    curve,
}: {
    points: XY[]
    scaleY: ContinuousAxisScale
    baseline?: number
    curve: CurveSpec
}) => {
    const base = scaleY(baseline ?? scaleY.domain()[0])
    const pointIntervals: Array<NumericPositionIntervalSpec> = points.map(d => [d[0], d[1], base])
    const generator = createAreaGenerator(curve)
    return generator(pointIntervals) ?? ''
}

export const ScatterArea = ({
    ids,
    baseline,
    curve = 'Linear',
    variant = 'default',
    style,
    className = 'scatterArea',
    setRole,
}: ScatterAreaProps) => {
    const preparedData = useScatterPreparedData()
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
                    points: getScatterCurvePoints(preparedData.data[seriesIndex]),
                    curve,
                    scaleY,
                    baseline,
                }),
            [seriesIndex, preparedData, curve, scaleY, baseline]
        )
    })

    const result = (ids ?? preparedData.keys).map(id => {
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return null
        if (disabledKeys.has(id)) return null
        const seriesStyle = addColor(style, colorScale(seriesIndex))
        return (
            <OpacityMotion
                role={'scatter-area'}
                key={'scatter-area-' + seriesIndex}
                firstRender={firstRender}
            >
                <Path
                    variant={variant}
                    d={areas[id]}
                    setRole={setRole}
                    style={seriesStyle}
                    className={className}
                />
            </OpacityMotion>
        )
    })

    return <>{result.filter(Boolean)}</>
}
