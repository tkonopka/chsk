import { ScalesContextProps } from './types'
import { PositionSpec, PositionUnit, SizeSpec } from '../general'
import { isContinuousAxisScale } from './scales'

// converts a position, possibly expressed in relative units or in view-specific values,
// into absolute numbers suitable for svg elements
export const getAbsolutePosition = (
    position: PositionSpec,
    unit: PositionUnit,
    dimensions: SizeSpec,
    scales: ScalesContextProps
): [number, number] => {
    if (unit === 'view') {
        const x = isContinuousAxisScale(scales.scaleX)
            ? scales.scaleX(Number(position[0]))
            : scales.scaleX(String(position[0]))
        const y = isContinuousAxisScale(scales.scaleY)
            ? scales.scaleY(Number(position[1]))
            : scales.scaleY(String(position[1]))
        return [x, y]
    }
    const x = Number(position[0])
    const y = Number(position[1])
    if (unit === 'relative') return [x * dimensions[0], y * dimensions[1]]
    return [x, y]
}
