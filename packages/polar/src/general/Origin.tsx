import { m } from 'framer-motion'
import { useScales, ContinuousAxisScale, getClassName, ssrCompatible } from '@chsk/core'
import { OriginProps } from './types'

export const Origin = ({ setRole = true, className, style, children }: OriginProps) => {
    const { scales } = useScales()
    const xScale = scales.x as ContinuousAxisScale
    const yScale = scales.y as ContinuousAxisScale
    const config = { x: xScale(0), y: yScale(0), originX: '0px', originY: '0px' }
    const compositeClassName = getClassName('origin', className)
    return (
        <m.g
            initial={config}
            animate={config}
            role={setRole ? 'origin' : undefined}
            style={ssrCompatible(style, config)}
            className={compositeClassName}
        >
            {children}
        </m.g>
    )
}
