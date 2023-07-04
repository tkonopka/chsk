import { m } from 'framer-motion'
import { getMotionTarget } from '../general'
import { getClassName } from '../themes'
import { PathProps } from './types'
import { createLineGenerator } from './curves'
import { useMemo } from 'react'

export const Path = ({
    variant = 'default',
    initial,
    animate,
    points,
    curve = 'Linear',
    d,
    closed,
    markerStart,
    markerEnd,
    className,
    setRole = true,
    ...props
}: PathProps) => {
    const compositeClassName = getClassName(variant, className)
    const generator = useMemo(() => createLineGenerator(curve), [curve])
    let path = d ?? generator(points ?? [])
    if (closed && path && !(path.endsWith('z') || path.endsWith('Z'))) {
        path += 'Z'
    }
    const config = { d: path ?? undefined }
    return (
        <m.path
            initial={getMotionTarget(config, initial)}
            animate={getMotionTarget(config, animate)}
            markerStart={markerStart ? 'url(#' + markerStart + ')' : undefined}
            markerEnd={markerEnd ? 'url(#' + markerEnd + ')' : undefined}
            role={setRole && variant !== 'default' ? variant : undefined}
            className={compositeClassName}
            {...props}
        />
    )
}
