import { HistogramCurve } from './HistogramCurve'
import { HistogramArea } from './HistogramArea'
import { HistogramSeriesLayer, HistogramSeriesProps } from './types'
import { DataComponent } from '@chsk/core'

export const HistogramSeries = ({
    ids,
    layers = ['area', 'curve'],
    curve = 'MonotoneX',
    areaStyle,
    curveStyle,
    className,
    setRole = true,
    dataComponent = DataComponent,
    ...props
}: HistogramSeriesProps) => {
    const commonProps = { curve, className, setRole, dataComponent, ...props }
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
    })

    return <>{result.filter(Boolean)}</>
}
