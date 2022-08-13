import { NumericPositionSpec, Path } from '@chask/core'
import { ScatterCurveProps, ScatterProcessedDataItem } from './types'
import { usePreparedScatterData } from './contexts'

export const getScatterCurvePoints = (data: ScatterProcessedDataItem) => {
    const x = data.x
    const y = data.y
    const result: Array<NumericPositionSpec> = x.map((v: number, i: number) => [v, y[i]])
    return result
}

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

    const points = getScatterCurvePoints(preparedData.data[seriesIndex])

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
