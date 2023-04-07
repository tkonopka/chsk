import { m } from 'framer-motion'
import { LabelProps } from './types'
import {
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
    angle,
    size = [20, 20],
    padding = zeroPadding,
    align = centerAlign,
    anchor = centerAlign,
    offset = zeroPosition,
    style,
    className,
    setRole = true,
    children,
}: LabelProps) => {
    if (children === undefined || children === '') return null
    const corner = getAnchoredOrigin(position, size, anchor)
    const [x, y] = getAlignPosition(corner, size, align, padding, offset)
    const compositeClassName = getClassName(variant, className)
    const config = { x, y, rotate: angle, originX: '0px', originY: '0px' }
    return (
        <m.g role={setRole ? variant : undefined} initial={config} animate={config}>
            <text style={style} className={compositeClassName}>
                {children}
            </text>
        </m.g>
    )
}
