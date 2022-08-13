import { Circle } from '@chask/core'
import { ScatterPointsProps } from './types'
import { usePreparedScatterData } from './contexts'

export const ScatterPoints = ({
    series,
    symbol = Circle,
    symbolStyle,
    symbolClassName,
}: ScatterPointsProps) => {
    const preparedData = usePreparedScatterData()
    const seriesIndex = preparedData.seriesIndexes[series]
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
}
