import { m } from 'framer-motion'
import { composeClassName } from '../themes'
import { LineProps } from './types'

export const Line = ({
    x1,
    y1,
    x2,
    y2,
    variant = 'default',
    markerStart,
    markerEnd,
    className,
    setRole = true,
    style,
}: LineProps) => {
    const isDefault = variant === 'default'
    const compositeClassName = composeClassName([isDefault ? undefined : variant, className])
    const config = { x1, y1, x2, y2 }
    return (
        <m.line
            role={setRole ? variant : undefined}
            initial={config}
            animate={config}
            style={style}
            className={compositeClassName}
            markerStart={markerStart ? 'url(#' + markerStart + ')' : undefined}
            markerEnd={markerEnd ? 'url(#' + markerEnd + ')' : undefined}
        />
    )
}
