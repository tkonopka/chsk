import { m } from 'framer-motion'
import { getClassName, ssrCompatible, SymbolProps } from '@chsk/core'
import { goldenRectHeight, goldenRectWidth } from './constants'

export const VerticalGoldenRectangle = ({
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
    const x = cx - (r * goldenRectHeight) / 2
    const y = cy - (r * goldenRectWidth) / 2
    const config = { x, y, width: r * goldenRectHeight, height: r * goldenRectWidth }
    return (
        <m.rect
            role={setRole ? variant : undefined}
            initial={config}
            animate={config}
            className={compositeClassName}
            style={ssrCompatible(style, config)}
            {...props}
        />
    )
}
