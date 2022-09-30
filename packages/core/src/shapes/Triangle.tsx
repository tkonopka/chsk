import { NumericPositionSpec } from '../general'
import { SymbolProps } from './types'
import { Polygon } from './Polygon'
import { equilateralCoordinates } from './symbols'

export const Triangle = ({
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
        cy + coords[1] * r,
    ])
    return (
        <Polygon
            variant={variant}
            points={points}
            className={className}
            style={style}
            setRole={setRole}
            onMouseLeave={props.onMouseLeave}
            onMouseEnter={props.onMouseEnter}
            onMouseMove={props.onMouseMove}
            onClick={props.onClick}
        />
    )
}
