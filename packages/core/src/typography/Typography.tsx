import { m } from 'framer-motion'
import { getMotionTarget, zeroPosition } from '../general'
import { getClassName, ssrCompatible } from '../themes'
import { TypographyProps } from './types'

export const Typography = ({
    position = zeroPosition,
    variant = 'default',
    initial,
    animate,
    angle,
    style,
    className,
    setRole = true,
    children,
    ...props
}: TypographyProps) => {
    if (!children) return null
    const compositeClassName = getClassName(variant, className)
    const [x, y] = position
    const config = { x, y, rotate: angle, originX: '0px', originY: '0px' }
    const role = setRole && variant !== 'default' ? variant : undefined
    return (
        <m.text
            role={role}
            initial={getMotionTarget(config, initial)}
            animate={getMotionTarget(config, animate)}
            style={ssrCompatible(style, config)}
            className={compositeClassName}
            {...props}
        >
            {children}
        </m.text>
    )
}
