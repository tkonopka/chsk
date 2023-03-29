import { m } from 'framer-motion'
import { useScales, ContinuousAxisScale, getClassName } from '@chsk/core'
import { OriginProps } from './types'

export const Origin = ({
    variant = 'default',
    setRole,
    className,
    style,
    children,
}: OriginProps) => {
    const { scales } = useScales()
    const xScale = scales.x as ContinuousAxisScale
    const yScale = scales.y as ContinuousAxisScale
    const config = { x: xScale(0), y: yScale(0), originX: '0px', originY: '0px' }
    const compositeClassName = getClassName(variant, className)
    return (
        <m.g
            initial={config}
            animate={config}
            role={setRole ? variant : undefined}
            style={style}
            className={compositeClassName}
        >
            {children}
        </m.g>
    )
}
