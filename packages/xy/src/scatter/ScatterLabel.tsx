import {
    getAbsoluteCoordinate,
    rad2deg,
    OpacityMotion,
    Typography,
    useDimensions,
    useScales,
    useDisabledKeys,
    getClassName,
} from '@chsk/core'
import { ScatterLabelProps, ScatterPreparedDataItem } from './types'
import { useScatterPreparedData } from './context'

const getClosestPointToX = (target: number, data: ScatterPreparedDataItem, avoidIndex = -1) => {
    if (data.x.length === 1) return 0
    let result = avoidIndex !== 0 ? 0 : 1
    let bestDistance = Math.abs(target - data.x[result])
    data.x.forEach((v, i) => {
        if (i === avoidIndex) return
        const distance = Math.abs(target - v)
        if (distance < bestDistance) {
            bestDistance = distance
            result = i
        }
    })
    return result
}

export const ScatterLabel = ({
    id,
    x,
    units = 'relative',
    offset = [0, 0],
    angle = 0,
    autoRotate = false,
    style,
    className,
    setRole = true,
    children,
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
    // convert input x to a coordinate and search for the closest data points
    const value = getAbsoluteCoordinate(
        x,
        Array.isArray(units) ? units[0] : units,
        size[0],
        scales.x
    )
    const pointIndex = getClosestPointToX(value, data)
    let point = [data.x[pointIndex], data.y[pointIndex]]
    if (autoRotate) {
        const secondPointIndex = getClosestPointToX(value, data, pointIndex)
        const secondPoint = [data.x[secondPointIndex], data.y[secondPointIndex]]
        const slope = (secondPoint[1] - point[1]) / (secondPoint[0] - point[0])
        angle = rad2deg(Math.atan(slope)) * (secondPoint[0] > point[0] ? -1 : 1)
        angle = Number.isNaN(angle) ? 0 : angle
        point = [(point[0] + secondPoint[0]) / 2, (point[1] + secondPoint[1]) / 2]
    }
    return (
        <OpacityMotion
            key={'label-' + seriesIndex}
            role={setRole ? 'scatter-label' : undefined}
            visible={visible}
            firstRender={firstRender}
        >
            <Typography
                variant={'label'}
                position={[point[0] + offset[0], point[1] + offset[1]]}
                angle={angle}
                className={compositeClassName}
                style={style}
                setRole={setRole}
            >
                {children}
            </Typography>
        </OpacityMotion>
    )
}
