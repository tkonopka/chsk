import { Path, PositionSpec } from '@chask/core'
import { ScatterCurveProps } from './types'
import { usePreparedScatterData } from './contexts'

export const ScatterCurve = ({
    series,
    curve = 'Linear',
    variant = 'default',
    style,
    className,
    setRole,
}: ScatterCurveProps) => {
    const preparedData = usePreparedScatterData()
    const seriesIndex = preparedData.seriesIndexes[series]
    if (seriesIndex === undefined) return null
    const data = preparedData.data[seriesIndex]

    const x = data.x
    const y = data.y
    const points: Array<PositionSpec> = x.map((v: number, i: number) => [v, y[i]])

    return (
        <g role={'scatter-curve'} key={'scatter-curve-' + seriesIndex}>
            <Path
                points={points}
                curve={curve}
                variant={variant}
                className={className}
                style={style}
                setRole={setRole}
            />
        </g>
    )
}
