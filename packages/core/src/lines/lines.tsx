import { Style } from '../themes/style'
import { LineProps } from './types'

export const LineStyles = ({ id }: { id: string }) => (
    <Style id={id} themeKey={'line'} component={'line'} prefix={'line'} />
)

export const Line = ({ x1 = 0, y1 = 0, x2 = 0, y2 = 0, variant = 'default', style }: LineProps) => {
    return (
        <line
            role={'line-' + variant}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            style={style}
            className={variant === 'default' ? undefined : 'line-' + variant}
        />
    )
}
