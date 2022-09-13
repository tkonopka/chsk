import { HistogramCurve } from './HistogramCurve'
import { HistogramArea } from './HistogramArea'
import { HistogramBars } from './HistogramBars'
import { HistogramSeriesLayer, HistogramSeriesProps } from './types'

export const HistogramSeries = ({
    ids,
    layers = ['area', 'curve'],
    curve = 'MonotoneX',
    variant = 'default',
    areaStyle,
    curveStyle,
    barStyle,
    className,
    setRole,
}: HistogramSeriesProps) => {
    const commonProps = { variant, curve, className, setRole }
    const result = layers.map((layer: HistogramSeriesLayer) => {
        if (layer === 'curve') {
            return (
                <HistogramCurve
                    key={'scatter-series-curves'}
                    ids={ids}
                    {...commonProps}
                    style={curveStyle}
                />
            )
        }
        if (layer === 'area') {
            return (
                <HistogramArea
                    key={'scatter-series-areas'}
                    ids={ids}
                    {...commonProps}
                    style={areaStyle}
                />
            )
        }
        if (layer === 'bars') {
            return (
                <HistogramBars
                    key={'scatter-series-bars'}
                    ids={ids}
                    {...commonProps}
                    style={barStyle}
                />
            )
        }
    })

    return <>{result.filter(Boolean)}</>
}
