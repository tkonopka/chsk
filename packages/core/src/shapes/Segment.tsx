import { m } from 'framer-motion'
import { composeClassName } from '../themes'
import { SymbolProps } from './types'
import { NumericPositionSpec, X, Y } from '../general/'

// for segments, segmentArm is equivalent to a 'visual factor' used for shapes
const segmentArm = 1.1

// coordinates for vertices of line segment
const segmentCoordinates = [
    [-segmentArm, 0],
    [segmentArm, 0],
]

// a line segment/fragment that can be used in a legend
export const Segment = ({
    variant = 'default',
    cx = 0,
    cy = 0,
    r = 1,
    className,
    style,
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
            style={style}
            className={compositeClassName}
            onMouseLeave={props.onMouseLeave}
            onMouseEnter={props.onMouseEnter}
            onMouseMove={props.onMouseMove}
            onClick={props.onClick}
        />
    )
}
