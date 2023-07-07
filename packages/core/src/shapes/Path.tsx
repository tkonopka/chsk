import { m } from 'framer-motion'
import { getClassName } from '../themes'
import { mergeTargets } from '../general'
import { PathProps } from './types'
import { createLineGenerator } from './curves'
import { useMemo } from 'react'

export const Path = ({
    variant = 'default',
    initial,
    animate,
    exit,
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
            initial={mergeTargets(config, initial)}
            animate={mergeTargets(config, animate)}
            exit={mergeTargets(config, exit)}
            markerStart={markerStart ? 'url(#' + markerStart + ')' : undefined}
            markerEnd={markerEnd ? 'url(#' + markerEnd + ')' : undefined}
            role={setRole && variant !== 'default' ? variant : undefined}
            className={compositeClassName}
            {...props}
        />
    )
}
