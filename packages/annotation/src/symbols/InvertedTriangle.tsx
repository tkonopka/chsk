import { NumericPositionSpec, SymbolProps, Polygon } from '@chsk/core'
import { equilateralCoordinates } from './constants'

export const InvertedTriangle = ({ cx = 0, cy = 0, r = 1, ...props }: SymbolProps) => {
    const points: Array<NumericPositionSpec> = equilateralCoordinates.map(coords => [
        cx + coords[0] * r,
        cy - coords[1] * r, // distinguishes inverted triangle from regular triangle
    ])
    return <Polygon points={points} {...props} />
}
