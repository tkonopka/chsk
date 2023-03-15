import { m } from 'framer-motion'
import { getClassName } from '../themes'
import { LineProps } from './types'

export const Line = ({
    variant = 'default',
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
    const compositeClassName = getClassName(variant, className)
    const config = { x1, y1, x2, y2 }
    return (
        <m.line
            role={setRole && variant !== 'default' ? variant : undefined}
            initial={config}
            animate={config}
            className={compositeClassName}
            markerStart={markerStart ? 'url(#' + markerStart + ')' : undefined}
            markerEnd={markerEnd ? 'url(#' + markerEnd + ')' : undefined}
            {...props}
        />
    )
}
