import { composeClassName } from '../themes'
import { RectangleProps, SymbolProps } from './types'

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
    key,
}: RectangleProps) => {
    const compositeClassName = composeClassName([
        variant === 'default' ? undefined : variant,
        className,
    ])
    return (
        <rect
            key={key}
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

// a special type of rectangle
export const Square = ({
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
    const scaledHalfSide = squareHalfSide * r
    return (
        <rect
            key={key}
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
