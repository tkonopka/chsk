import { composeClassName, getStyles } from '../themes'
import { TypographyProps } from './types'

export const getTypographyStyles = (id: string) => {
    return getStyles({ chartId: id, themeKey: 'typography', component: 'text' })
}

export const Typography = ({
    x = 0,
    y = 0,
    variant = 'default',
    children,
    transform,
    style,
    className,
    setRole = true,
}: TypographyProps) => {
    if (children === undefined || children === '') return null

    const isDefault = variant === 'default'
    const compositeClassName = composeClassName([isDefault ? undefined : variant, className])

    return (
        <text
            role={setRole ? variant : undefined}
            x={x}
            y={y}
            style={style}
            transform={transform}
            className={compositeClassName}
        >
            {children}
        </text>
    )
}
