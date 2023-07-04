import { m } from 'framer-motion'
import { getClassName } from '../themes'
import { LineProps } from './types'
import { getMotionTarget } from '../general'

export const Line = ({
    variant = 'default',
    initial,
    animate,
    x1,
    y1,
    x2,
    y2,
    markerStart,
    markerEnd,
    className,
    setRole = true,
    ...props
}: LineProps) => {
    const config = { x1, y1, x2, y2 }
    return (
        <m.line
            role={setRole && variant !== 'default' ? variant : undefined}
            initial={getMotionTarget(config, initial)}
            animate={getMotionTarget(config, animate)}
            className={getClassName(variant, className)}
            markerStart={markerStart ? 'url(#' + markerStart + ')' : undefined}
            markerEnd={markerEnd ? 'url(#' + markerEnd + ')' : undefined}
            {...props}
        />
    )
}
