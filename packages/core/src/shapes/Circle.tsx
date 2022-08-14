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
    key,
}: CircleProps) => {
    const compositeClassName =
        variant === 'default' ? className : composeClassName([variant, className])
    return (
        <circle
            key={key}
            role={setRole ? variant : undefined}
            cx={cx}
            cy={cy}
            r={r}
            style={style}
            className={compositeClassName}
        />
    )
}
