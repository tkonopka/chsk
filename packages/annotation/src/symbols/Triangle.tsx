import { NumericPositionSpec, SymbolProps, Polygon } from '@chsk/core'
import { equilateralCoordinates } from './constants'

export const Triangle = ({ cx = 0, cy = 0, r = 1, ...props }: SymbolProps) => {
    const points: Array<NumericPositionSpec> = equilateralCoordinates.map(coords => [
        cx + coords[0] * r,
        cy + coords[1] * r,
    ])
    return <Polygon points={points} {...props} />
}
