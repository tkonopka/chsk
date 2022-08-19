import { composeClassName } from '../themes'
import { CircleProps } from './types'

export const Circle = ({
    variant = 'default',
    cx,
    cy,
    r,
    className,
    style,
    setRole = true,
}: CircleProps) => {
    const compositeClassName =
        variant === 'default' ? className : composeClassName([variant, className])
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
