import { m } from 'framer-motion'
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
    const config = { cx, cy, r }
    return (
        <m.circle
            role={setRole ? variant : undefined}
            initial={config}
            animate={config}
            style={style}
            className={compositeClassName}
        />
    )
}
