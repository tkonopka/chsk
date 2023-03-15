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
    markerStart,
    markerEnd,
    className,
    setRole = true,
    ...props
}: PathProps) => {
    const compositeClassName = getClassName(variant, className)
    const generator = useMemo(() => createLineGenerator(curve), [curve])
    const path = d ?? generator(points ?? [])
    return (
        <m.path
            initial={{ d: path ?? undefined }}
            animate={{ d: path ?? undefined }}
            markerStart={markerStart ? 'url(#' + markerStart + ')' : undefined}
            markerEnd={markerEnd ? 'url(#' + markerEnd + ')' : undefined}
            role={setRole && variant !== 'default' ? variant : undefined}
            className={compositeClassName}
            {...props}
        />
    )
}
