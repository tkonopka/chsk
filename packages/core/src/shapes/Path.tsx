import { m } from 'framer-motion'
import { getClassName } from '../themes'
import { PathProps } from './types'
import { createLineGenerator } from './curves'
import { useMemo } from 'react'

export const Path = ({
    variant = 'default',
    points,
    curve = 'Linear',
    d,
    className,
    setRole = true,
    style,
    ...props
}: PathProps) => {
    const compositeClassName = getClassName(variant, className)
    const generator = useMemo(() => createLineGenerator(curve), [curve])
    const path = d ?? generator(points ?? [])
    return (
        <m.path
            initial={{ d: path ?? undefined }}
            animate={{ d: path ?? undefined }}
            role={setRole ? variant : undefined}
            style={style}
            className={compositeClassName}
            {...props}
        />
    )
}
