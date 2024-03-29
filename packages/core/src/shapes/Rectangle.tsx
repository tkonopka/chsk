import { m } from 'framer-motion'
import { getClassName, ssrCompatible } from '../themes'
import { mergeTargets, trimTarget } from '../general'
import { RectangleProps } from './types'

export const Rectangle = ({
    variant = 'default',
    initial,
    animate,
    exit,
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
    const config = trimTarget({
        x: center ? x - width / 2 : x,
        y: center ? y - height / 2 : y,
        width,
        height,
        stroke,
        strokeWidth,
        fill,
        fillOpacity,
        opacity,
    })
    return (
        <m.rect
            role={setRole && variant !== 'default' ? variant : undefined}
            initial={mergeTargets(config, initial)}
            animate={mergeTargets(config, animate)}
            exit={mergeTargets(config, exit)}
            className={getClassName(variant, className)}
            style={ssrCompatible(style, config)}
            {...props}
        />
    )
}
