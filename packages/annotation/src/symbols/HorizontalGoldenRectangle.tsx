import { m } from 'framer-motion'
import { getClassName, ssrCompatible, SymbolProps } from '@chsk/core'
import { goldenRectHeight, goldenRectWidth } from './constants'

export const HorizontalGoldenRectangle = ({
    variant = 'default',
    cx = 0,
    cy = 0,
    r = 1,
    className,
    style,
    setRole = true,
    ...props
}: SymbolProps) => {
    const compositeClassName = getClassName(variant, className)
    const config = {
        x: cx - (r * goldenRectWidth) / 2,
        y: cy - (r * goldenRectHeight) / 2,
        width: r * goldenRectWidth,
        height: r * goldenRectHeight,
    }
    return (
        <m.rect
            role={setRole && variant !== 'default' ? variant : undefined}
            initial={config}
            animate={config}
            className={compositeClassName}
            style={ssrCompatible(style, config)}
            {...props}
        />
    )
}
