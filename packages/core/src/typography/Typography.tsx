import { m } from 'framer-motion'
import { X, Y, zeroPosition } from '../general'
import { getClassName } from '../themes'
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
    const config = { x: position[X], y: position[Y], rotate: angle, originX: '0px', originY: '0px' }
    return (
        <m.g
            role={setRole && variant !== 'default' ? variant : undefined}
            initial={config}
            animate={config}
        >
            <text style={style} className={compositeClassName}>
                {children}
            </text>
        </m.g>
    )
}
