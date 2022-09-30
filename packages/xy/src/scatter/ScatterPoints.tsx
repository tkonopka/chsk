import { createElement } from 'react'
import {
    addColor,
    Circle,
    DataComponent,
    OpacityMotion,
    useDisabledKeys,
    useScales,
} from '@chask/core'
import { ScatterPointsProps } from './types'
import { useScatterPreparedData } from './context'

export const ScatterPoints = ({
    ids,
    dataComponent = DataComponent,
    symbol = Circle,
    symbolStyle,
    symbolClassName,
    ...props
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
        const colors = data.color
        const dots = data.r.map((r: number, i: number) =>
            createElement(dataComponent, {
                key: 'point-' + seriesIndex + '-' + i,
                data: { id, index: i },
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

    return <>{result.filter(Boolean)}</>
}
