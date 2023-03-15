import { SymbolProps } from './types'
import { getClassName } from '../themes'
import { m } from 'framer-motion'

export const Circle = ({
    variant = 'default',
    cx,
    cy,
    r,
    className,
    style,
    setRole = true,
    ...props
}: SymbolProps) => {
    const compositeClassName = getClassName(variant, className)
    const config = { cx, cy, r }
    return (
        <m.circle
            role={setRole && variant !== 'default' ? variant : undefined}
            initial={config}
            animate={config}
            style={style}
            className={compositeClassName}
            {...props}
        />
    )
}
