import { NumericPositionSpec, SymbolProps, Polygon } from '@chsk/core'
import { starCoordinates } from './constants'

export const Star = ({ cx = 0, cy = 0, r = 1, ...props }: SymbolProps) => {
    const points: Array<NumericPositionSpec> = starCoordinates.map(coords => [
        cx + coords[0] * r,
        cy + coords[1] * r,
    ])
    return <Polygon points={points} {...props} />
}
