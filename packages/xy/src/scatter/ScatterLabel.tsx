import {
    getAbsoluteCoordinate,
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
} from '@chsk/core'
import { ScatterLabelProps, ScatterPreparedDataItem } from './types'
import { useScatterPreparedData } from './context'
import { createElement } from 'react'

// returns index of point that is nearest to target
const getClosestPoint = (target: NumericPositionSpec, data: ScatterPreparedDataItem) => {
    if (data.x.length === 1) return 0
    let result = 0
    let best = squaredDistance(target, [data.x[result], data.y[result]])
    data.x.forEach((v, i) => {
        const distanceSquared = squaredDistance(target, [v, data.y[i]])
        if (distanceSquared < best) {
            best = distanceSquared
            result = i
        }
    })
    return result
}

// returns index of point that is nearest to target
const getClosestPointToX = (target: number, data: ScatterPreparedDataItem, avoidIndex = -1) => {
    if (data.x.length === 1) return 0
    let result = avoidIndex !== 0 ? 0 : 1
    let best = Math.abs(target - data.x[result])
    data.x.forEach((v, i) => {
        if (i === avoidIndex) return
        const distance = Math.abs(target - v)
        if (distance < best) {
            best = distance
            result = i
        }
    })
    return result
}

export const ScatterLabel = ({
    id,
    position,
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
    let pointIndex = 0
    if (Array.isArray(position)) {
        const absPosition = getAbsolutePosition(position, positionUnits, size, scales)
        pointIndex = getClosestPoint(absPosition, data)
    } else {
        const value = getAbsoluteCoordinate(
            position,
            Array.isArray(positionUnits) ? positionUnits[0] : positionUnits,
            size[0],
            scales.x
        )
        pointIndex = getClosestPointToX(value, data)
    }
    let point = [data.x[pointIndex], data.y[pointIndex]]

    if (autoRotate) {
        const secondPointIndex = getClosestPointToX(data.x[pointIndex], data, pointIndex)
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
