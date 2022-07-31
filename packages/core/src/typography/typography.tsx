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
    style,
}: TypographyProps) => {
    return (
        <text
            role={'text-' + variant}
            x={x}
            y={y}
            style={style}
            className={variant === 'default' ? undefined : 'text-' + variant}
        >
            {children}
        </text>
    )
}
