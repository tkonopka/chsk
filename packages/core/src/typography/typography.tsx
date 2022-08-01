import { TypographyProps } from './types'
import { Style } from '../themes/style'

export const TypographyStyles = ({ id }: { id: string }) => (
    <Style id={id} themeKey={'typography'} component={'text'} prefix={'text'} />
)

export const Typography = ({
    x = 0,
    y = 0,
    variant = 'default',
    children = '',
    transform,
    style,
    className,
    wrap = false,
}: TypographyProps) => {
    const isDefault = variant === 'default'
    const role = 'text-' + variant
    const compositeClassName = [isDefault ? undefined : role, className]
        .filter(x => x !== undefined)
        .join(' ')
    const textElement = (
        <text
            role={isDefault ? undefined : role}
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
