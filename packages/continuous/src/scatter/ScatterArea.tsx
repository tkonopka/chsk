import {
    ContinuousAxisScale,
    createAreaGenerator,
    CurveSpec,
    isContinuousAxisScale,
    NumericPositionIntervalSpec,
    useScales,
} from '@chask/core'
import { ScatterAreaProps, ScatterDataContextProps } from './types'
import { usePreparedScatterData } from './contexts'
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
    series,
    baseline = 0,
    curve = 'Linear',
    variant = 'default',
    style,
    className,
    setRole,
}: ScatterAreaProps) => {
    const preparedData = usePreparedScatterData()
    const scaleY = useScales().scaleY
    const seriesIndex = preparedData.seriesIndexes[series]
    if (seriesIndex === undefined) return null
    if (!isContinuousAxisScale(scaleY)) return null

    const d = useMemo(
        () => getScatterAreaD({ seriesIndex, preparedData, curve, scaleY, baseline }),
        [seriesIndex, preparedData, curve, scaleY, baseline]
    )

    return (
        <g role={'scatter-area'} key={'scatter-area-' + seriesIndex}>
            <path d={d} role={setRole ? variant : undefined} style={style} className={className} />
        </g>
    )
}
