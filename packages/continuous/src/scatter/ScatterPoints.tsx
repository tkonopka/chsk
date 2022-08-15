import { Circle } from '@chask/core'
import { ScatterPointsProps } from './types'
import { useScatterPreparedData } from './contexts'

export const ScatterPoints = ({
    ids,
    symbol = Circle,
    symbolStyle,
    symbolClassName,
}: ScatterPointsProps) => {
    const preparedData = useScatterPreparedData()

    const result = (ids ?? preparedData.seriesIds).map(id => {
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return null
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
                style: symbolStyle,
                setRole: false,
            })
        )
        return (
            <g role={'scatter-points'} key={'scatter-points-' + seriesIndex}>
                {dots}
            </g>
        )
    })

    return <>{result.filter(v => v !== null)}</>
}
