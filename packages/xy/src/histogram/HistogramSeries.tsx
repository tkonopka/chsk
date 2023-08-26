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
        if (layer === 'area') {
            return <HistogramArea key={'areas'} ids={ids} {...commonProps} style={areaStyle} />
        }
        return <HistogramCurve key={'curves'} ids={ids} {...commonProps} style={curveStyle} />
    })

    return <>{result.filter(Boolean)}</>
}
