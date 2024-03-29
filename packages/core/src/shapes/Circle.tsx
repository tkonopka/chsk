import { m } from 'framer-motion'
import { SymbolProps } from './types'
import { getClassName } from '../themes'
import { mergeTargets } from '../general'

export const Circle = ({
    variant = 'default',
    initial,
    animate,
    exit,
    cx,
    cy,
    r,
    className,
    setRole = true,
    ...props
}: SymbolProps) => {
    const config = { cx, cy, r }
    return (
        <m.circle
            role={setRole && variant !== 'default' ? variant : undefined}
            initial={mergeTargets(config, initial)}
            animate={mergeTargets(config, animate)}
            exit={mergeTargets(config, exit)}
            className={getClassName(variant, className)}
            {...props}
        />
    )
}
