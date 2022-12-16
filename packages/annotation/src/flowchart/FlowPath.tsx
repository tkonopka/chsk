import { useMemo } from 'react'
import { motion } from 'framer-motion'
import {
    composeClassName,
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
    style,
    transition = { pathLength: { duration: 0.5 } },
    // interactivity
    ...props
}: FlowPathProps) => {
    const scales = useScales()
    const dimensions = useDimensions()
    const viewPoints = useMemo(
        () => points.map(point => getAbsolutePosition(point, units, dimensions.innerSize, scales)),
        [points, units, dimensions, scales]
    )
    const isDefault = variant === 'default'
    const compositeClassName = composeClassName([isDefault ? undefined : variant, className])
    const generator = useMemo(() => createLineGenerator(curve), [curve])
    const path = generator(viewPoints)
    return (
        <motion.path
            initial={{ d: path ?? undefined, pathLength: 0 }}
            animate={{ d: path ?? undefined, pathLength: 1 }}
            transition={transition}
            role={setRole ? variant : undefined}
            markerStart={markerStart ? 'url(#' + markerStart + ')' : undefined}
            markerEnd={markerEnd ? 'url(#' + markerEnd + ')' : undefined}
            style={style}
            className={compositeClassName}
            onMouseLeave={props.onMouseLeave}
            onMouseEnter={props.onMouseEnter}
            onMouseMove={props.onMouseMove}
            onClick={props.onClick}
        />
    )
}
