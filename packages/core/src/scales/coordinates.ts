import { AxisScale, Scales } from './types'
import { PositionSpec, PositionUnit, PositionUnits, SizeSpec } from '../general'
import { isContinuousAxisScale } from './predicates'

// converts a position, possibly expressed in relative units or in view-specific values,
// into absolute numbers suitable for svg elements
export const getAbsolutePosition = (
    position: PositionSpec,
    unit: PositionUnits,
    dimensions: SizeSpec,
    scales: Scales
): [number, number] => {
    const unitPair = Array.isArray(unit) ? unit : [unit, unit]
    return [
        getAbsoluteCoordinate(position[0], unitPair[0], dimensions[0], scales.x),
        getAbsoluteCoordinate(position[1], unitPair[1], dimensions[1], scales.y),
    ]
}

export const getAbsoluteCoordinate = (
    v: number | string | Date,
    unit: PositionUnit, // accepts a single string
    dimension: number,
    scale: AxisScale
) => {
    if (unit === 'view') {
        return isContinuousAxisScale(scale) ? scale(Number(v)) : scale(String(v))
    }
    if (unit === 'relative') return Number(v) * dimension
    return Number(v)
}
