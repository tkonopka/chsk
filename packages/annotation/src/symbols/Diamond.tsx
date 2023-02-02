import { NumericPositionSpec, SymbolProps, Polygon } from '@chsk/core'
import { diamondCoordinates } from './constants'

export const Diamond = ({ cx = 0, cy = 0, r = 1, ...props }: SymbolProps) => {
    const points: Array<NumericPositionSpec> = diamondCoordinates.map(coords => [
        cx + coords[0] * r,
        cy - coords[1] * r,
    ])
    return <Polygon points={points} {...props} />
}
