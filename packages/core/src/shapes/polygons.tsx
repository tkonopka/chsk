import { composeClassName } from '../themes'
import { SymbolProps } from './types'
import { roundDecimalPlaces } from '../general/'

// constants below are scaled for an equilateral triangle with area equivalent to a circle r=1

// distance from center of equilateral triangle to one of the vertices
const equilateralArm = 2 * Math.sqrt(Math.PI / (3 * Math.sqrt(3)))
// length of a side of an equilateral triangle of unit area
const equilateralSide = Math.sqrt(3) * equilateralArm

// because of sharp angles, triangles with equal areas to circles "look" bigger than circles
// introduce a visual perception factor here
const equilateralVisualFactor = 0.95

// coordinates for vertices
const equilateralCoordinates = [
    [0, -equilateralArm * equilateralVisualFactor],
    [
        (equilateralSide * equilateralVisualFactor) / 2,
        (equilateralArm * equilateralVisualFactor) / 2,
    ],
    [
        (-equilateralSide * equilateralVisualFactor) / 2,
        (equilateralArm * equilateralVisualFactor) / 2,
    ],
]

// an equilateral triangle (props are the same as for a circle shape)
export const Triangle = ({
    variant = 'default',
    cx = 0,
    cy = 0,
    r = 1,
    className,
    style,
    setRole = true,
    key,
}: SymbolProps) => {
    const compositeClassName = composeClassName([
        variant === 'default' ? undefined : variant,
        className,
    ])
    const points = equilateralCoordinates.map(
        coords =>
            roundDecimalPlaces(cx + coords[0] * r, 2) +
            ',' +
            roundDecimalPlaces(cy + coords[1] * r, 2)
    )
    return (
        <polygon
            key={key}
            role={setRole ? variant : undefined}
            points={points.join(' ')}
            style={style}
            className={compositeClassName}
        />
    )
}

// an equilateral triangle with tip pointing down
// could be achieved via a transform, but a separate class is provided for convenience
export const InvertedTriangle = ({
    variant = 'default',
    cx = 0,
    cy = 0,
    r = 1,
    className,
    style,
    setRole = true,
    key,
}: SymbolProps) => {
    const compositeClassName = composeClassName([
        variant === 'default' ? undefined : variant,
        className,
    ])
    const points = equilateralCoordinates.map(
        coords =>
            roundDecimalPlaces(cx + coords[0] * r, 2) +
            ',' +
            roundDecimalPlaces(cy - coords[1] * r, 2)
    )
    return (
        <polygon
            key={key}
            role={setRole ? variant : undefined}
            points={points.join(' ')}
            style={style}
            className={compositeClassName}
        />
    )
}

// distance from diamond center to one of its corners, scaled so that area matches a circle with r=1
const diamondEdge = Math.sqrt(Math.PI / 2)

const diamondVisualFactor = 0.98

// coordinates for vertices
const diamondCoordinates = [
    [0, -diamondEdge * diamondVisualFactor],
    [diamondEdge * diamondVisualFactor, 0],
    [0, diamondEdge * diamondVisualFactor],
    [-diamondEdge * diamondVisualFactor, 0],
]

// a special type of rectangle (props are the same as for circle)
export const Diamond = ({
    variant = 'default',
    cx = 0,
    cy = 0,
    r = 1,
    className,
    style,
    setRole = true,
    key,
}: SymbolProps) => {
    const compositeClassName = composeClassName([
        variant === 'default' ? undefined : variant,
        className,
    ])
    const points = diamondCoordinates.map(
        coords =>
            roundDecimalPlaces(cx + coords[0] * r, 2) +
            ',' +
            roundDecimalPlaces(cy - coords[1] * r, 2)
    )
    return (
        <polygon
            key={key}
            role={setRole ? variant : undefined}
            points={points.join(' ')}
            style={style}
            className={compositeClassName}
        />
    )
}
