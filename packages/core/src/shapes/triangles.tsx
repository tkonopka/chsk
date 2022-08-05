import { composeClassName, getStyles } from '../themes'
import { CircleProps } from './types'

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

export const getTriangleStyles = (id: string) => {
    return getStyles({ chartId: id, themeKey: 'rect', component: 'rect' })
}

// an equilateral triangle (props are the same as for a circle shape)
export const Triangle = ({
    variant = 'default',
    cx = 0,
    cy = 0,
    r = 1,
    className,
    style,
    setRole = true,
}: CircleProps) => {
    const compositeClassName = composeClassName([
        variant === 'default' ? undefined : variant,
        className,
    ])
    const points = equilateralCoordinates.map(
        coords => cx + coords[0] * r + ',' + (cy + coords[1] * r)
    )
    return (
        <polygon
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
}: CircleProps) => {
    const compositeClassName = composeClassName([
        variant === 'default' ? undefined : variant,
        className,
    ])
    const points = equilateralCoordinates.map(
        coords => cx + coords[0] * r + ',' + (cy - coords[1] * r)
    )
    return (
        <polygon
            role={setRole ? variant : undefined}
            points={points.join(' ')}
            style={style}
            className={compositeClassName}
        />
    )
}
