import { m } from 'framer-motion'
import { getClassName, ssrCompatible } from '../themes'
import { mergeTargets } from '../general'
import { SymbolProps } from './types'

const squareVisualFactor = 0.96
const squareHalfSide = 0.5 * Math.sqrt(Math.PI) * squareVisualFactor

export const Square = ({
    variant = 'default',
    initial,
    animate,
    cx = 0,
    cy = 0,
    r = 1,
    className,
    style,
    setRole = true,
    ...props
}: SymbolProps) => {
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
            initial={mergeTargets(config, initial)}
            animate={mergeTargets(config, animate)}
            className={getClassName(variant, className)}
            style={ssrCompatible(style, config)}
            {...props}
        />
    )
}
