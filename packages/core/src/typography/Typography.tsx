import { m } from 'framer-motion'
import { zeroPosition } from '../general'
import { getClassName, ssrCompatible } from '../themes'
import { TypographyProps } from './types'

export const Typography = ({
    position = zeroPosition,
    variant = 'default',
    angle,
    style,
    className,
    setRole = true,
    children,
}: TypographyProps) => {
    if (!children) return null
    const compositeClassName = getClassName(variant, className)
    const [x, y] = position
    const config = { x, y, rotate: angle, originX: '0px', originY: '0px' }
    const role = setRole && variant !== 'default' ? variant : undefined
    return (
        <m.text
            role={role}
            initial={config}
            animate={config}
            style={ssrCompatible(style, config)}
            className={compositeClassName}
        >
            {children}
        </m.text>
    )
}
