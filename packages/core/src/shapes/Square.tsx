import { m } from 'framer-motion'
import { getClassName, ssrCompatible } from '../themes'
import { SymbolProps } from './types'

const squareVisualFactor = 0.96
const squareHalfSide = 0.5 * Math.sqrt(Math.PI) * squareVisualFactor

export const Square = ({
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
    const scaledHalfSide = squareHalfSide * r
    const config = {
        x: cx - scaledHalfSide,
        y: cy - scaledHalfSide,
        width: 2 * scaledHalfSide,
        height: 2 * scaledHalfSide,
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
