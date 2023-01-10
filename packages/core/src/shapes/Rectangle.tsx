import { m } from 'framer-motion'
import { composeClassName } from '../themes'
import { RectangleProps } from './types'

export const Rectangle = ({
    variant = 'default',
    x,
    y,
    width,
    height,
    center = false,
    className,
    style,
    setRole = true,
    onMouseLeave,
    onMouseEnter,
    onMouseMove,
    onClick,
    ...props
}: RectangleProps) => {
    const compositeClassName =
        variant === 'default' ? className : composeClassName([variant, className])
    if (width < 0) {
        width = Math.abs(width)
        x -= width
    }
    if (height < 0) {
        height = Math.abs(height)
        y -= height
    }
    const config = {
        x: center ? x - width / 2 : x,
        y: center ? y - height / 2 : y,
        width,
        height,
        ...props,
    }
    return (
        <m.rect
            initial={config}
            animate={config}
            role={setRole ? variant : undefined}
            style={style}
            className={compositeClassName}
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
            onMouseMove={onMouseMove}
            onClick={onClick}
        />
    )
}
