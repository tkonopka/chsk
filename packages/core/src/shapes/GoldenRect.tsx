import { m } from 'framer-motion'
import { composeClassName } from '../themes'
import { SymbolProps } from './types'
import { goldenRectHeight, goldenRectWidth } from './symbols'

export const GoldenRect = ({
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
    const config = {
        x: cx - (r * goldenRectWidth) / 2,
        y: cy - (r * goldenRectHeight) / 2,
        width: r * goldenRectWidth,
        height: r * goldenRectHeight,
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
