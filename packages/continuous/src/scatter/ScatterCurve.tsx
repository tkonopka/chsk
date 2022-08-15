import { NumericPositionSpec, Path } from '@chask/core'
import { ScatterCurveProps, ScatterProcessedDataItem } from './types'
import { useScatterPreparedData } from './contexts'

export const getScatterCurvePoints = (
    data: ScatterProcessedDataItem
): Array<NumericPositionSpec> => {
    const x = data.x
    const y = data.y
    return x.map((v: number, i: number) => [v, y[i]])
}

export const ScatterCurve = ({
    ids,
    curve = 'Linear',
    variant = 'default',
    style,
    className,
    setRole,
}: ScatterCurveProps) => {
    const preparedData = useScatterPreparedData()

    const result = (ids ?? preparedData.seriesIds).map(id => {
        const seriesIndex = preparedData.seriesIndexes[id]
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
    })

    return <>{result.filter(v => v !== null)}</>
}
