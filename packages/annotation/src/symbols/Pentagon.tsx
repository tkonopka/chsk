import { NumericPositionSpec, SymbolProps, Polygon } from '@chsk/core'
import { pentagonCoordinates } from './constants'

export const Pentagon = ({ cx = 0, cy = 0, r = 1, ...props }: SymbolProps) => {
    const points: Array<NumericPositionSpec> = pentagonCoordinates.map(coords => [
        cx + coords[0] * r,
        cy + coords[1] * r,
    ])
    return <Polygon points={points} {...props} />
}
