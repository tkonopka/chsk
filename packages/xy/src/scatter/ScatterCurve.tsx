import {
    addColor,
    NumericPositionSpec,
    OpacityMotion,
    Path,
    useDisabledKeys,
    useScales,
} from '@chask/core'
import { ScatterCurveProps, ScatterPreparedDataItem } from './types'
import { useScatterPreparedData } from './context'

export const getScatterCurvePoints = (
    data: ScatterPreparedDataItem
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
    className = 'scatterCurve',
    setRole,
}: ScatterCurveProps) => {
    const preparedData = useScatterPreparedData()
    const colorScale = useScales().color
    const { disabledKeys, firstRender } = useDisabledKeys()

    const result = (ids ?? preparedData.keys).map(id => {
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return null
        if (disabledKeys.has(id)) return null
        const seriesStyle = addColor(style, colorScale(seriesIndex))
        seriesStyle.fill = undefined
        const points = getScatterCurvePoints(preparedData.data[seriesIndex])
        return (
            <OpacityMotion
                role={'scatter-curve'}
                key={'scatter-curve-' + seriesIndex}
                firstRender={firstRender}
            >
                <Path
                    points={points}
                    curve={curve}
                    variant={variant}
                    className={className}
                    style={seriesStyle}
                    setRole={setRole}
                />
            </OpacityMotion>
        )
    })

    return <>{result.filter(Boolean)}</>
}
