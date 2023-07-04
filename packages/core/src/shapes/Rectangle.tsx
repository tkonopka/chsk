import { m } from 'framer-motion'
import { getClassName, ssrCompatible } from '../themes'
import { RectangleProps } from './types'
import { getMotionTarget } from '../general'

export const Rectangle = ({
    variant = 'default',
    initial,
    animate,
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
    style,
    ...props
}: RectangleProps) => {
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
            role={setRole && variant !== 'default' ? variant : undefined}
            initial={getMotionTarget(config, initial)}
            animate={getMotionTarget(config, animate)}
            className={getClassName(variant, className)}
            style={ssrCompatible(style, config)}
            {...props}
        />
    )
}
