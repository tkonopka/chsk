import { composeClassName, getStyles } from '../themes'
import { CircleProps } from './types'

export const getCircleStyles = (id: string) => {
    return getStyles({ chartId: id, themeKey: 'circle', component: 'circle' })
}

export const Circle = ({
    variant = 'default',
    cx,
    cy,
    r,
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
