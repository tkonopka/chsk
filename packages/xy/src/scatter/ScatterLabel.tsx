import {
    rad2deg,
    OpacityMotion,
    useDimensions,
    useScales,
    useDisabledKeys,
    getClassName,
    NumericPositionSpec,
    squaredDistance,
    getAbsolutePosition,
    Label,
    X,
    Y,
    clip,
} from '@chsk/core'
import { ScatterLabelProps, ScatterPreparedDataItem } from './types'
import { useScatterPreparedData } from './context'
import { createElement } from 'react'

// alternative distance functions
const distanceX = (a: NumericPositionSpec, b: NumericPositionSpec) => {
    return Math.abs(a[X] - b[X])
}
const distanceY = (a: NumericPositionSpec, b: NumericPositionSpec) => {
    return Math.abs(a[Y] - b[Y])
}

type DistanceFunction = (a: NumericPositionSpec, b: NumericPositionSpec) => number

// returns index of point that is nearest to target
const getClosestPoint = (
    target: NumericPositionSpec,
    data: ScatterPreparedDataItem,
    distance: DistanceFunction
) => {
    if (data.x.length === 1) return 0
    let result = 0
    let best = distance(target, [data.x[result], data.y[result]])
    data.x.forEach((v, i) => {
        const value = distance(target, [v, data.y[i]])
        if (value < best) {
            best = value
            result = i
        }
    })
    return result
}

export const ScatterLabel = ({
    variant = 'xy',
    id,
    position = [0, 0],
    positionUnits = 'relative',
    offset = [0, 0],
    angle = 0,
    autoRotate = false,
    component = Label,
    className,
    setRole = true,
    children,
    ...props
}: ScatterLabelProps) => {
    const preparedData = useScatterPreparedData()
    const { scales } = useScales()
    const { size } = useDimensions()
    const { disabledKeys, firstRender } = useDisabledKeys()
    const compositeClassName = getClassName('scatter-label', className)

    id = id ?? preparedData.keys[0]
    const visible = !disabledKeys.has(id)
    const seriesIndex = preparedData.seriesIndexes[id]
    const data = preparedData.data[seriesIndex]
    if (seriesIndex === undefined || data.x.length === 0) return null

    // convert input position to a coordinate and search for the closest data points
    const absPosition = getAbsolutePosition(position, positionUnits, size, scales)
    const distanceFun = variant === 'xy' ? squaredDistance : variant === 'x' ? distanceX : distanceY
    const pointIndex = getClosestPoint(absPosition, data, distanceFun)
    let point = [data.x[pointIndex], data.y[pointIndex]]

    if (autoRotate) {
        const secondPointIndex = clip(pointIndex - 1, 0, data.x.length)
        const secondPoint = [data.x[secondPointIndex], data.y[secondPointIndex]]
        const slope = (secondPoint[1] - point[1]) / (secondPoint[0] - point[0])
        angle = rad2deg(Math.atan(slope)) * (secondPoint[0] > point[0] ? -1 : 1)
        angle = Number.isNaN(angle) ? 0 : angle
        point = [(point[0] + secondPoint[0]) / 2, (point[1] + secondPoint[1]) / 2]
    }

    const result = createElement(
        component,
        {
            position: [point[0] + offset[0], point[1] + offset[1]],
            angle,
            className: compositeClassName,
            setRole,
            ...props,
        },
        children
    )
    return (
        <OpacityMotion
            role={setRole ? 'scatter-label' : undefined}
            visible={visible}
            firstRender={firstRender}
        >
            {result}
        </OpacityMotion>
    )
}
