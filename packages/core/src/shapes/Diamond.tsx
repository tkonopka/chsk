import { NumericPositionSpec } from '../general'
import { SymbolProps } from './types'
import { Polygon } from './Polygon'
import { diamondCoordinates } from './symbols'

export const Diamond = ({
    variant = 'default',
    cx = 0,
    cy = 0,
    r = 1,
    className,
    style,
    setRole = true,
    ...props
}: SymbolProps) => {
    const points: Array<NumericPositionSpec> = diamondCoordinates.map(coords => [
        cx + coords[0] * r,
        cy - coords[1] * r,
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
