import { useMemo, useRef } from 'react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import {
    getClassName,
    createLineGenerator,
    getAbsolutePosition,
    useDimensions,
    useScales,
} from '@chsk/core'
import { FlowPathProps } from './types'

export const FlowPath = ({
    variant = 'flow',
    points,
    units = 'view',
    curve = 'Linear',
    markerStart,
    markerEnd,
    className,
    setRole = true,
    transition = { pathLength: { duration: 0.5 } },
    // style and interactivity
    ...props
}: FlowPathProps) => {
    const ref = useRef<SVGPathElement>(null)
    const { scales } = useScales()
    const { size } = useDimensions()
    const viewPoints = useMemo(
        () => points.map(point => getAbsolutePosition(point, units, size, scales)),
        [points, units, size, scales]
    )
    const compositeClassName = getClassName(variant, className)
    const generator = useMemo(() => createLineGenerator(curve), [curve])
    const path = generator(viewPoints)
    return (
        <LazyMotion features={domAnimation}>
            <m.path
                ref={ref}
                initial={{ d: path ?? undefined, pathLength: 0 }}
                animate={{ d: path ?? undefined, pathLength: 1 }}
                onAnimationStart={() => {
                    if (markerStart) {
                        ref.current?.setAttribute('marker-start', 'url(#' + markerStart + ')')
                    }
                }}
                onAnimationComplete={() => {
                    if (markerEnd) {
                        ref.current?.setAttribute('marker-end', 'url(#' + markerEnd + ')')
                    }
                    ref.current?.removeAttribute('stroke-dasharray')
                    ref.current?.removeAttribute('stroke-dashoffset')
                }}
                transition={transition}
                role={setRole ? variant : undefined}
                className={compositeClassName}
                {...props}
            />
        </LazyMotion>
    )
}
