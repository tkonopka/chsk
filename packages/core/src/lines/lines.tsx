import { getStyles } from '../themes/style'
import { LineProps } from './types'
import { composeClassName } from '../common'

export const getLineStyles = (id: string) => {
    return getStyles({ chartId: id, themeKey: 'line', component: 'line' })
}

export const Line = ({
    x1 = 0,
    y1 = 0,
    x2 = 0,
    y2 = 0,
    variant = 'default',
    className,
    setRole,
    style,
}: LineProps) => {
    const isDefault = variant === 'default'
    const compositeClassName = composeClassName([isDefault ? undefined : variant, className])
    return (
        <line
            role={setRole ? variant : undefined}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            style={style}
            className={compositeClassName}
        />
    )
}
