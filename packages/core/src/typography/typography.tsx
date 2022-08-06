import { composeClassName, getStyles } from '../themes'
import { TextProps } from './types'

export const getTextStyles = (id: string) => {
    return getStyles({ chartId: id, themeKey: 'text', component: 'text' })
}

export const Text = ({
    x = 0,
    y = 0,
    variant = 'default',
    children,
    transform,
    style,
    className,
    setRole = true,
}: TextProps) => {
    if (children === undefined || children === '') return null

    const isDefault = variant === 'default'
    const compositeClassName = composeClassName([isDefault ? undefined : variant, className])

    return (
        <text
            role={setRole ? variant : undefined}
            x={x === 0 ? undefined : x}
            y={y === 0 ? undefined : y}
            style={style}
            transform={transform}
            className={compositeClassName}
        >
            {children}
        </text>
    )
}
