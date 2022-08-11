import { usePreparedScatterData } from './contexts'
import { ScatterPoints } from './ScatterPoints'
import { ScatterCurve } from './ScatterCurve'
import { ScatterArea } from './ScatterArea'
import { ScatterSeriesLayer, ScatterSeriesProps } from './types'

export const ScatterSeries = ({
    series,
    baseline = 0,
    layers = ['area', 'curve', 'points'],
    curve = 'Linear',
    symbol,
    variant = 'default',
    areaStyle,
    curveStyle,
    symbolStyle,
    style,
    className,
    setRole,
    children,
}: ScatterSeriesProps) => {
    const preparedData = usePreparedScatterData()
    const seriesIndex = preparedData.seriesIndexes[series]
    if (seriesIndex === undefined) return null

    const commonProps = { variant, curve, className, setRole }
    const parts = layers
        .map((layer: ScatterSeriesLayer) => {
            if (layer === 'points') {
                return (
                    <ScatterPoints
                        key={'scatter-series-points-' + seriesIndex}
                        series={series}
                        {...commonProps}
                        symbol={symbol}
                        symbolStyle={symbolStyle}
                    />
                )
            }
            if (layer === 'curve') {
                return (
                    <ScatterCurve
                        key={'scatter-series-curve-' + seriesIndex}
                        series={series}
                        {...commonProps}
                        style={curveStyle}
                    />
                )
            }
            if (layer === 'area') {
                return (
                    <ScatterArea
                        key={'scatter-series-area-' + seriesIndex}
                        series={series}
                        {...commonProps}
                        baseline={baseline}
                        style={areaStyle}
                    />
                )
            }
            return null
        })
        .filter(part => part !== null)

    return (
        <g role={'scatter-series'} key={'scatter-series-' + seriesIndex} style={style}>
            {parts}
            {children}
        </g>
    )
}
