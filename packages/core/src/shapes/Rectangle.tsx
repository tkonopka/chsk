import { m } from 'framer-motion'
import { getClassName } from '../themes'
import { RectangleProps } from './types'

export const Rectangle = ({
    variant = 'default',
    x,
    y,
    width,
    height,
    center = false,
    className,
    setRole = true,
    stroke,
    strokeWidth,
    fill,
    fillOpacity,
    opacity,
    ...props
}: RectangleProps) => {
    const compositeClassName = getClassName(variant, className)
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
        stroke,
        strokeWidth,
        fill,
        fillOpacity,
        opacity,
    }
    return (
        <m.rect
            initial={config}
            animate={config}
            role={setRole && variant !== 'default' ? variant : undefined}
            className={compositeClassName}
            {...props}
        />
    )
}
