import { TypographyProps } from './types'
import { getStyles } from '../themes/style'
import { composeClassName } from '../common'

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
    wrap = false,
    setRole = true,
}: TypographyProps) => {
    if (children === undefined) return null

    const isDefault = variant === 'default'
    const compositeClassName = composeClassName([isDefault ? undefined : variant, className])

    const textElement = (
        <text
            role={setRole ? variant : undefined}
            x={wrap ? 0 : x}
            y={wrap ? 0 : y}
            style={style}
            transform={transform}
            className={compositeClassName}
        >
            {children}
        </text>
    )
    if (!wrap) return textElement
    return <g transform={'translate(' + x + ',' + y + ')'}>{textElement}</g>
}
