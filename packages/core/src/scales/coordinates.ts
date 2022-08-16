import { AxisScale, ScalesContextProps } from './types'
import { PositionSpec, PositionUnit, SizeSpec } from '../general'
import { isContinuousAxisScale } from './axis'

// converts a position, possibly expressed in relative units or in view-specific values,
// into absolute numbers suitable for svg elements
export const getAbsolutePosition = (
    position: PositionSpec,
    unit: PositionUnit,
    dimensions: SizeSpec,
    scales: ScalesContextProps
): [number, number] => {
    return [
        getAbsoluteCoordinate(position[0], unit, dimensions[0], scales.x),
        getAbsoluteCoordinate(position[1], unit, dimensions[1], scales.y),
    ]
}

export const getAbsoluteCoordinate = (
    v: number | string,
    unit: PositionUnit,
    dimension: number,
    scale: AxisScale
) => {
    if (unit === 'view') {
        return isContinuousAxisScale(scale) ? scale(Number(v)) : scale(String(v))
    }
    if (unit === 'relative') return Number(v) * dimension
    return Number(v)
}
