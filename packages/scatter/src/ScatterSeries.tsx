import { Circle } from '@chask/core'
import { ScatterSeriesProps } from './types'
import { usePreparedScatterData } from './contexts'

export const ScatterSeries = ({
    series,
    symbol = Circle,
    symbolStyle,
    symbolClassName,
}: ScatterSeriesProps) => {
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
        <g role={'scatter-series'} key={'scatter-series-' + seriesIndex}>
            {dots}
        </g>
    )
}
