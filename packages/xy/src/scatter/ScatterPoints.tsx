import { createElement } from 'react'
import { addColor, Circle, OpacityMotion, useDisabledKeys, useScales } from '@chask/core'
import { ScatterPointsProps } from './types'
import { useScatterPreparedData } from './context'

export const ScatterPoints = ({
    ids,
    symbol = Circle,
    symbolStyle,
    symbolClassName,
}: ScatterPointsProps) => {
    const preparedData = useScatterPreparedData()
    const colorScale = useScales().color
    const { disabledKeys, firstRender } = useDisabledKeys()

    const result = (ids ?? preparedData.keys).map(id => {
        if (disabledKeys.has(id)) return null
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return null
        const seriesStyle = addColor(symbolStyle, colorScale(seriesIndex))
        const data = preparedData.data[seriesIndex]
        const x = data.x
        const y = data.y
        const dots = data.r.map((r: number, i: number) =>
            createElement(symbol, {
                key: 'point-' + seriesIndex + '-' + i,
                cx: x[i],
                cy: y[i],
                r: r,
                className: symbolClassName,
                style: seriesStyle,
                setRole: false,
            })
        )
        return (
            <OpacityMotion
                key={'scatter-points-' + seriesIndex}
                role={'scatter-points'}
                firstRender={firstRender}
            >
                {dots}
            </OpacityMotion>
        )
    })

    return <>{result.filter(v => v)}</>
}
