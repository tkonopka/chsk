import { m } from 'framer-motion'
import { composeClassName, SymbolProps, NumericPositionSpec, X, Y } from '@chsk/core'
import { segmentCoordinates } from './constants'

// a line segment/fragment that can be used in a legend
export const Segment = ({
    variant = 'default',
    cx = 0,
    cy = 0,
    r = 1,
    className,
    setRole = true,
    ...props
}: SymbolProps) => {
    const compositeClassName =
        variant === 'default' ? className : composeClassName([variant, className])
    const points: Array<NumericPositionSpec> = segmentCoordinates.map(coords => [
        cx + coords[X] * r,
        cy + coords[Y] * r,
    ])
    const config = {
        x1: points[0][X],
        y1: points[0][Y],
        x2: points[1][X],
        y2: points[1][Y],
    }
    return (
        <m.line
            role={setRole ? variant : undefined}
            initial={config}
            animate={config}
            className={compositeClassName}
            {...props}
        />
    )
}
