import {
    addColor,
    ContinuousAxisScale,
    createAreaGenerator,
    CurveSpec,
    isContinuousAxisScale,
    NumericPositionIntervalSpec,
    useScales,
} from '@chask/core'
import { ScatterAreaProps, ScatterDataContextProps } from './types'
import { useScatterPreparedData } from './contexts'
import { getScatterCurvePoints } from './ScatterCurve'
import { useMemo } from 'react'

const getScatterAreaD = ({
    seriesIndex,
    preparedData,
    scaleY,
    baseline,
    curve,
}: {
    seriesIndex: number
    preparedData: ScatterDataContextProps
    scaleY: ContinuousAxisScale
    baseline: number
    curve: CurveSpec
}) => {
    const base = scaleY(baseline)
    const points = getScatterCurvePoints(preparedData.data[seriesIndex])
    const pointIntervals: Array<NumericPositionIntervalSpec> = points.map(d => [d[0], d[1], base])
    const generator = createAreaGenerator(curve)
    return generator(pointIntervals) ?? ''
}

export const ScatterArea = ({
    ids,
    baseline = 0,
    curve = 'Linear',
    variant = 'default',
    style,
    className,
    setRole,
}: ScatterAreaProps) => {
    const preparedData = useScatterPreparedData()
    const scales = useScales()
    const scaleY = scales.y
    const colorScale = scales.color
    if (!isContinuousAxisScale(scaleY)) return null

    const result = (ids ?? preparedData.seriesIds).map(id => {
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return null
        const seriesStyle = addColor(style, colorScale(seriesIndex))
        const d = useMemo(
            () => getScatterAreaD({ seriesIndex, preparedData, curve, scaleY, baseline }),
            [seriesIndex, preparedData, curve, scaleY, baseline]
        )
        return (
            <g role={'scatter-area'} key={'scatter-area-' + seriesIndex}>
                <path
                    d={d}
                    role={setRole ? variant : undefined}
                    style={seriesStyle}
                    className={className}
                />
            </g>
        )
    })

    return <>{result.filter(v => v)}</>
}
