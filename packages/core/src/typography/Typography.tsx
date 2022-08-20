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
    return (
        <text
            role={setRole ? variant : undefined}
            x={position[X] === 0 ? undefined : position[X]}
            y={position[Y] === 0 ? undefined : position[Y]}
            style={style}
            transform={transform}
            className={compositeClassName}
        >
            {children}
        </text>
    )
}
