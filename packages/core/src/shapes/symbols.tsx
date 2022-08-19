import { NumericPositionSpec } from '../general/'
import { composeClassName } from '../themes'
import { SymbolProps } from './types'
import { Polygon } from './Polygon'

/**
 * Collection of functions that render symbols, e.g. for scatter plots.
 * Each symbol is centered on (cx, cy) and has a single size parameter, r.
 *
 * Each symbol is scaled so that its area with size r is equal to the area of a
 * circle with radius r.
 *
 * Some symbols are additionally scaled slightly with a 'visual factor'.
 * This balances a visual perception effect, where for example triangles with
 * area A can appear larger visually than circles with the same area A.
 */

/** Rectangles */

const squareVisualFactor = 0.96
const squareHalfSide = 0.5 * Math.sqrt(Math.PI) * squareVisualFactor

export const Square = ({
    variant = 'default',
    cx = 0,
    cy = 0,
    r = 1,
    className,
    style,
    setRole = true,
}: SymbolProps) => {
    const compositeClassName =
        variant === 'default' ? className : composeClassName([variant, className])
    const scaledHalfSide = squareHalfSide * r
    return (
        <rect
            role={setRole ? variant : undefined}
            x={cx - scaledHalfSide}
            y={cy - scaledHalfSide}
            width={2 * scaledHalfSide}
            height={2 * scaledHalfSide}
            style={style}
            className={compositeClassName}
        />
    )
}

const goldenRectVisualFactor = 0.96
const phi = (1 + Math.sqrt(5)) / 2
const goldenRectWidth = Math.sqrt(Math.PI * phi) * goldenRectVisualFactor
const goldenRectHeight = Math.sqrt(Math.PI / phi) * goldenRectVisualFactor

export const GoldenRect = ({
    variant = 'default',
    cx = 0,
    cy = 0,
    r = 1,
    className,
    style,
    setRole = true,
}: SymbolProps) => {
    const compositeClassName =
        variant === 'default' ? className : composeClassName([variant, className])
    return (
        <rect
            role={setRole ? variant : undefined}
            x={cx - (r * goldenRectWidth) / 2}
            y={cy - (r * goldenRectHeight) / 2}
            width={r * goldenRectWidth}
            height={r * goldenRectHeight}
            style={style}
            className={compositeClassName}
        />
    )
}

/** Triangles */

const equilateralVisualFactor = 0.94

// distance from center of equilateral triangle to one of the vertices
const equilateralArm = 2 * Math.sqrt(Math.PI / (3 * Math.sqrt(3))) * equilateralVisualFactor
// length of a side of an equilateral triangle of unit area
const equilateralSide = Math.sqrt(3) * equilateralArm * equilateralVisualFactor
// coordinates for vertices of an equilateral triangle
const equilateralCoordinates = [
    [0, -equilateralArm],
    [equilateralSide / 2, equilateralArm / 2],
    [-equilateralSide / 2, equilateralArm / 2],
]

// equilateral triangle with tip pointing up
export const Triangle = ({
    variant = 'default',
    cx = 0,
    cy = 0,
    r = 1,
    className,
    style,
    setRole = true,
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
        />
    )
}

// equilateral triangle with tip pointing down
// could be achieved via a transform, but a separate class is convenient
export const InvertedTriangle = ({
    variant = 'default',
    cx = 0,
    cy = 0,
    r = 1,
    className,
    style,
    setRole = true,
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
        />
    )
}

/** Diamond */

const diamondVisualFactor = 0.96
// distance from diamond center to one of its corners, scaled so that area matches a circle with r=1
const diamondEdge = Math.sqrt(Math.PI / 2) * diamondVisualFactor
const diamondCoordinates = [
    [0, -diamondEdge],
    [diamondEdge, 0],
    [0, diamondEdge],
    [-diamondEdge, 0],
]

export const Diamond = ({
    variant = 'default',
    cx = 0,
    cy = 0,
    r = 1,
    className,
    style,
    setRole = true,
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
        />
    )
}
