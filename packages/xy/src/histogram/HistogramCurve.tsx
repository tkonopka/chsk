import { addColor, OpacityMotion, Path, useDisabledKeys, useScales } from '@chask/core'
import { HistogramCurveProps } from './types'
import { useHistogramPreparedData } from './context'

export const HistogramCurve = ({
    ids,
    curve = 'MonotoneX',
    variant = 'default',
    style,
    className = 'histogramCurve',
    setRole,
}: HistogramCurveProps) => {
    const preparedData = useHistogramPreparedData()
    const colorScale = useScales().color
    const { disabledKeys, firstRender } = useDisabledKeys()

    const result = (ids ?? preparedData.keys).map(id => {
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return null
        if (disabledKeys.has(id)) return null
        const seriesStyle = addColor(style, colorScale(seriesIndex))
        seriesStyle.fill = undefined
        return (
            <OpacityMotion
                role={'histogram-curve'}
                key={'histogram-curve-' + seriesIndex}
                firstRender={firstRender}
            >
                <Path
                    points={preparedData.data[seriesIndex].points}
                    curve={curve}
                    variant={variant}
                    className={className}
                    style={seriesStyle}
                    setRole={setRole}
                />
            </OpacityMotion>
        )
    })

    return <>{result.filter(v => v)}</>
}
