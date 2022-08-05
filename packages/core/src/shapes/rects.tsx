import { composeClassName, getStyles } from '../themes'
import { CircleProps, RectangleProps } from './types'

export const getRectStyles = (id: string) => {
    return getStyles({ chartId: id, themeKey: 'rect', component: 'rect' })
}

export const Rectangle = ({
    variant = 'default',
    x,
    y,
    width,
    height,
    rx,
    ry,
    center = false,
    className,
    style,
    setRole = true,
}: RectangleProps) => {
    const compositeClassName = composeClassName([
        variant === 'default' ? undefined : variant,
        className,
    ])
    return (
        <rect
            role={setRole ? variant : undefined}
            x={center ? x - width / 2 : x}
            y={center ? y - height / 2 : y}
            width={width}
            height={height}
            rx={rx}
            ry={ry}
            style={style}
            className={compositeClassName}
        />
    )
}

// length of half a side of a square with an area matching a circle r=1
const squareHalfSide = Math.sqrt(Math.PI) / 2

// a special type of rectangle (props are the same as for circle)
export const Square = ({
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
