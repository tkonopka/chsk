import { m } from 'framer-motion'
import { getClassName, SymbolProps } from '@chsk/core'
import { goldenRectHeight, goldenRectWidth } from './constants'

export const VerticalGoldenRectangle = ({
    variant = 'default',
    cx = 0,
    cy = 0,
    r = 1,
    className,
    setRole = true,
    ...props
}: SymbolProps) => {
    const compositeClassName = getClassName(variant, className)
    const config = {
        x: cx - (r * goldenRectHeight) / 2,
        y: cy - (r * goldenRectWidth) / 2,
        width: r * goldenRectHeight,
        height: r * goldenRectWidth,
    }
    return (
        <m.rect
            role={setRole ? variant : undefined}
            initial={config}
            animate={config}
            className={compositeClassName}
            {...props}
        />
    )
}
