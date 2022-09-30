import { SymbolProps } from './types'
import { NumericPositionSpec } from '../general'
import { Polygon } from './Polygon'
import { equilateralCoordinates } from './symbols'

export const InvertedTriangle = ({
    variant = 'default',
    cx = 0,
    cy = 0,
    r = 1,
    className,
    style,
    setRole = true,
    ...props
}: SymbolProps) => {
    const points: Array<NumericPositionSpec> = equilateralCoordinates.map(coords => [
        cx + coords[0] * r,
        cy - coords[1] * r, // distinguishes inverted triangle from regular triangle
    ])
    return (
        <Polygon
            variant={variant}
            points={points}
            style={style}
            className={className}
            setRole={setRole}
            onMouseLeave={props.onMouseLeave}
            onMouseEnter={props.onMouseEnter}
            onMouseMove={props.onMouseMove}
            onClick={props.onClick}
        />
    )
}
