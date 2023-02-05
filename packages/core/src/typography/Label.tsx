import { m } from 'framer-motion'
import { LabelProps } from './types'
import {
    X,
    Y,
    getAlignPosition,
    getAnchoredOrigin,
    zeroPadding,
    zeroPosition,
    centerAlign,
} from '../general'
import { getClassName } from '../themes'

export const Label = ({
    position = zeroPosition,
    variant = 'label',
    rotate,
    size = [20, 20],
    padding = zeroPadding,
    anchor = centerAlign,
    align = centerAlign,
    style,
    className,
    setRole = true,
    children,
}: LabelProps) => {
    if (children === undefined || children === '') return null
    const corner = getAnchoredOrigin(position, size, anchor)
    const pos = getAlignPosition(corner, size, padding, align)
    const compositeClassName = getClassName(variant, className)
    const config = { x: pos[X], y: pos[Y], rotate, originX: '0px', originY: '0px' }
    return (
        <m.g role={setRole ? variant : undefined} initial={config} animate={config}>
            <text style={style} className={compositeClassName}>
                {children}
            </text>
        </m.g>
    )
}
