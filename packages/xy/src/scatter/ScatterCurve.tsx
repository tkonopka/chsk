import { createElement } from 'react'
import {
    addColor,
    TooltipDataComponent,
    NumericPositionSpec,
    OpacityMotion,
    Path,
    useDisabledKeys,
    useScales,
} from '@chsk/core'
import { ScatterCurveProps, ScatterPreparedDataItem } from './types'
import { useScatterPreparedData } from './context'

export const getScatterCurvePoints = (
    data: ScatterPreparedDataItem
): Array<NumericPositionSpec> => {
    const x = data.x
    const y = data.y
    return x.map((v: number, i: number) => [v, y[i]])
}

export const ScatterCurve = ({
    ids,
    curve = 'Linear',
    variant = 'default',
    style,
    className = 'scatterCurve',
    setRole,
    dataComponent = TooltipDataComponent,
    ...props
}: ScatterCurveProps) => {
    const preparedData = useScatterPreparedData()
    const colorScale = useScales().color
    const { disabledKeys, firstRender } = useDisabledKeys()

    const result = (ids ?? preparedData.keys).map(id => {
        const visible = !disabledKeys.has(id)
        const seriesIndex = preparedData.seriesIndexes[id]
        if (seriesIndex === undefined) return null
        const seriesStyle = addColor(style, colorScale(seriesIndex))
        seriesStyle.fill = undefined
        const points = getScatterCurvePoints(preparedData.data[seriesIndex])
        const element = createElement(dataComponent, {
            data: { id },
            component: Path,
            props: {
                points,
                curve,
                variant,
                className,
                style: seriesStyle,
                setRole,
            },
            ...props,
        })
        return (
            <OpacityMotion
                role={'scatter-curve'}
                key={'scatter-curve-' + seriesIndex}
                visible={visible}
                firstRender={firstRender}
            >
                {element}
            </OpacityMotion>
        )
    })

    return <>{result.filter(Boolean)}</>
}
