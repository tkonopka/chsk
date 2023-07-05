import { m } from 'framer-motion'
import { LabelProps } from './types'
import { getAlignPosition, getAnchoredOrigin, mergeTargets } from '../general'
import { zeroPadding, zeroPosition, centerAlign } from '../general'

import { getClassName, ssrCompatible } from '../themes'

export const Label = ({
    position = zeroPosition,
    variant = 'label',
    initial,
    animate,
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
    ...props
}: LabelProps) => {
    if (children === undefined || children === '') return null
    const corner = getAnchoredOrigin(position, size, anchor)
    const [x, y] = getAlignPosition(corner, size, align, padding, offset)
    const compositeClassName = getClassName(variant, className)
    const config = { x, y, rotate: angle, originX: '0px', originY: '0px' }
    return (
        <m.text
            role={setRole ? variant : undefined}
            initial={mergeTargets(config, initial)}
            animate={mergeTargets(config, animate)}
            style={ssrCompatible(style, config)}
            className={compositeClassName}
            {...props}
        >
            {children}
        </m.text>
    )
}
