import { m } from 'framer-motion'
import { composeClassName } from '../themes'
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
    const compositeClassName =
        variant === 'default' ? className : composeClassName([variant, className])
    const scaledHalfSide = squareHalfSide * r
    const config = {
        x: cx - scaledHalfSide,
        y: cy - scaledHalfSide,
        width: 2 * scaledHalfSide,
        height: 2 * scaledHalfSide,
    }
    return (
        <m.rect
            role={setRole ? variant : undefined}
            initial={config}
            animate={config}
            style={style}
            className={compositeClassName}
            onMouseLeave={props.onMouseLeave}
            onMouseEnter={props.onMouseEnter}
            onMouseMove={props.onMouseMove}
            onClick={props.onClick}
        />
    )
}
