import { createElement } from 'react'
import {
    addColor,
    Circle,
    DataComponent,
    OpacityMotion,
    useDisabledKeys,
    useProcessedData,
    useScales,
} from '@chsk/core'
import { ScatterPointsProps } from './types'
import { useScatterPreparedData } from './context'
import { isScatterProcessedData } from './predicates'
import { useSymbolData } from './helpers'

export const ScatterPoints = ({
    ids,
    symbol = Circle,
    symbolStyle,
    symbolClassName,
    dataComponent = DataComponent,
    setRole = true,
    ...props
}: ScatterPointsProps) => {
    const processedData = useProcessedData().data
    const preparedData = useScatterPreparedData()
    const colorScale = useScales().scales.color
    const { disabledKeys, firstRender } = useDisabledKeys()
    if (!isScatterProcessedData(processedData)) return null

    const symbolData = useSymbolData(processedData, preparedData)
    const result = (ids ?? preparedData.keys).map(id => {
        const visible = !disabledKeys.has(id)
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return null
        const seriesStyle = addColor(symbolStyle, colorScale(seriesIndex))
        const data = preparedData.data[seriesIndex]
        const x = data.x
        const y = data.y
        const colors = data.color
        const dots = visible
            ? data.r.map((r: number, i: number) =>
                  createElement(dataComponent, {
                      key: 'point-' + seriesIndex + '-' + i,
                      data: symbolData[seriesIndex][i],
                      component: symbol,
                      props: {
                          cx: x[i],
                          cy: y[i],
                          r: r,
                          className: symbolClassName,
                          style: colors ? addColor(symbolStyle, colors[i]) : seriesStyle,
                          setRole: false,
                      },
                      ...props,
                  })
              )
            : null
        return (
            <OpacityMotion
                key={'points-' + seriesIndex}
                role={setRole ? 'scatter-points' : undefined}
                visible={visible}
                firstRender={firstRender}
            >
                {dots}
            </OpacityMotion>
        )
    })

    return <>{result.filter(Boolean)}</>
}
