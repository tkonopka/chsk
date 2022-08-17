import { addColor, Circle, useScales } from '@chask/core'
import { ScatterPointsProps } from './types'
import { useScatterPreparedData } from './context'

export const ScatterPoints = ({
    ids,
    symbol = Circle,
    symbolStyle,
    symbolClassName,
}: ScatterPointsProps) => {
    const preparedData = useScatterPreparedData()
    const colorScale = useScales().color

    const result = (ids ?? preparedData.keys).map(id => {
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return null
        const seriesStyle = addColor(symbolStyle, colorScale(seriesIndex))
        const data = preparedData.data[seriesIndex]
        const x = data.x
        const y = data.y
        const dots = data.r.map((r: number, i: number) =>
            symbol({
                key: 'point-' + seriesIndex + '-' + i,
                cx: x[i],
                cy: y[i],
                r: r,
                className: symbolClassName,
                style: seriesStyle,
                setRole: false,
            })
        )
        return (
            <g role={'scatter-points'} key={'scatter-points-' + seriesIndex}>
                {dots}
            </g>
        )
    })

    return <>{result.filter(v => v)}</>
}
