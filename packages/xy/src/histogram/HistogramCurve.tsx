import { createElement } from 'react'
import {
    addColor,
    DataComponent,
    OpacityMotion,
    Path,
    useDisabledKeys,
    useProcessedData,
    useScales,
} from '@chsk/core'
import { HistogramCurveProps } from './types'
import { useHistogramPreparedData } from './context'
import { isHistogramProcessedData } from './predicates'

export const HistogramCurve = ({
    ids,
    curve = 'MonotoneX',
    style,
    setRole = true,
    dataComponent = DataComponent,
    ...props
}: HistogramCurveProps) => {
    const processedData = useProcessedData().data
    const preparedData = useHistogramPreparedData()
    const colorScale = useScales().scales.color
    const { disabledKeys, firstRender } = useDisabledKeys()
    if (!isHistogramProcessedData(processedData)) return null

    const result = (ids ?? preparedData.keys).map(id => {
        const visible = !disabledKeys.has(id)
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return null
        const seriesStyle = addColor(style, colorScale(seriesIndex))
        seriesStyle.fill = undefined
        const element = createElement(dataComponent, {
            data: processedData[seriesIndex],
            component: Path,
            props: {
                variant: 'histogram-curve',
                points: preparedData.data[seriesIndex].points,
                curve,
                style: seriesStyle,
                setRole,
            },
            ...props,
        })
        return (
            <OpacityMotion
                role={setRole ? 'histogram-curve-presence' : undefined}
                key={'curve-' + seriesIndex}
                visible={visible}
                firstRender={firstRender}
            >
                {element}
            </OpacityMotion>
        )
    })

    return <>{result.filter(Boolean)}</>
}
