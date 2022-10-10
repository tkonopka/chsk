import { ScatterPoints } from './ScatterPoints'
import { ScatterCurve } from './ScatterCurve'
import { ScatterArea } from './ScatterArea'
import { ScatterSeriesLayer, ScatterSeriesProps } from './types'
import { DataComponent } from '@chsk/core'

export const ScatterSeries = ({
    ids,
    baseline = 0,
    layers = ['area', 'curve', 'points'],
    curve = 'Linear',
    symbol,
    variant = 'default',
    areaStyle,
    curveStyle,
    symbolStyle,
    className,
    setRole,
    dataComponent = DataComponent,
    ...props
}: ScatterSeriesProps) => {
    const commonProps = { variant, curve, className, setRole, dataComponent, ...props }
    const result = layers.map((layer: ScatterSeriesLayer) => {
        if (layer === 'points') {
            return (
                <ScatterPoints
                    key={'scatter-series-points'}
                    ids={ids}
                    {...commonProps}
                    symbol={symbol}
                    symbolStyle={symbolStyle}
                />
            )
        }
        if (layer === 'curve') {
            return (
                <ScatterCurve
                    key={'scatter-series-curves'}
                    ids={ids}
                    {...commonProps}
                    style={curveStyle}
                />
            )
        }
        if (layer === 'area') {
            return (
                <ScatterArea
                    key={'scatter-series-areas'}
                    ids={ids}
                    {...commonProps}
                    baseline={baseline}
                    style={areaStyle}
                />
            )
        }
    })

    return <>{result.filter(Boolean)}</>
}
