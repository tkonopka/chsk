import { m } from 'framer-motion'
import { composeClassName } from '../themes'
import { TypographyProps } from './types'
import { X, Y } from '../general'

export const Typography = ({
    position = [0, 0],
    variant = 'default',
    rotate,
    style,
    className,
    setRole = true,
    children,
}: TypographyProps) => {
    if (children === undefined || children === '') return null
    const isDefault = variant === 'default'
    const compositeClassName = composeClassName([isDefault ? undefined : variant, className])
    const config = { x: position[X], y: position[Y], rotate, originX: '0px', originY: '0px' }
    return (
        <m.g role={setRole ? variant : undefined} initial={config} animate={config}>
            <text style={style} className={compositeClassName}>
                {children}
            </text>
        </m.g>
    )
}
