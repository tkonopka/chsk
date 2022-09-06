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
    className,
    style,
    setRole = true,
}: RectangleProps) => {
    const compositeClassName =
        variant === 'default' ? className : composeClassName([variant, className])
    const config = { x: center ? x - width / 2 : x, y: center ? y - height / 2 : y, width, height }
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
