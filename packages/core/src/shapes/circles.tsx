import { getStyles } from '../themes/style'
import { CircleProps } from './types'
import { composeClassName } from '../common'

export const getCircleStyles = (id: string) => {
    return getStyles({ chartId: id, themeKey: 'circle', component: 'circle' })
}

export const Circle = ({
    variant = 'default',
    cx = 0,
    cy = 0,
    r = 1,
    className,
    style,
    setRole = true,
}: CircleProps) => {
    const compositeClassName = composeClassName([
        variant === 'default' ? undefined : variant,
        className,
    ])
    return (
        <circle
            role={setRole ? variant : undefined}
            cx={cx}
            cy={cy}
            r={r}
            style={style}
            className={compositeClassName}
        />
    )
}
