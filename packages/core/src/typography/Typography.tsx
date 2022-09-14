import { m } from 'framer-motion'
import { composeClassName } from '../themes'
import { TypographyProps } from './types'
import { X, Y } from '../general'

export const Typography = ({
    position = [0, 0],
    variant = 'default',
    transform,
    style,
    className,
    setRole = true,
    children,
}: TypographyProps) => {
    if (children === undefined || children === '') return null
    const isDefault = variant === 'default'
    const compositeClassName = composeClassName([isDefault ? undefined : variant, className])
    const config = { x: position[X], y: position[Y] }
    if (transform) {
        return (
            <text
                x={config.x}
                y={config.y}
                role={setRole ? variant : undefined}
                style={style}
                className={compositeClassName}
                transform={transform}
            >
                {children}
            </text>
        )
    }
    return (
        <m.text
            initial={config}
            animate={config}
            role={setRole ? variant : undefined}
            style={style}
            className={compositeClassName}
        >
            {children}
        </m.text>
    )
}
