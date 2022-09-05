import { m } from 'framer-motion'
import { composeClassName } from '../themes'
import { RectangleProps } from './types'

export const Rectangle = ({
    variant = 'default',
    x,
    y,
    width,
    height,
    rx,
    ry,
    center = false,
    animated = true,
    className,
    style,
    setRole = true,
}: RectangleProps) => {
    const compositeClassName =
        variant === 'default' ? className : composeClassName([variant, className])
    const computedX = center ? x - width / 2 : x
    const computedY = center ? y - height / 2 : y
    if (!animated) {
        return <rect
            x={computedX}
            y={computedY}
            height={height}
            width={width}
            rx={rx}
            ry={ry}
            role={setRole ? variant : undefined}
            style={style}
            className={compositeClassName}
        />
    }
    const config = { x: computedX, y: computedY, width, height }
    return (
        <m.rect
            initial={config}
            animate={config}
            rx={rx}
            ry={ry}
            role={setRole ? variant : undefined}
            style={style}
            className={compositeClassName}
        />
    )
}
