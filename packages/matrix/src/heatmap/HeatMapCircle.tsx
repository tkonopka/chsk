import { m } from 'framer-motion'
import { HeatMapCellProps } from './types'

export const HeatMapCircle = ({ x, y, width, height, style, ...props }: HeatMapCellProps) => {
    const config = { fill: style?.fill, r: Math.min(width, height) / 2 }
    return (
        <m.circle
            {...props}
            initial={config}
            animate={config}
            exit={config}
            cx={x}
            cy={y}
            style={{ ...style, fill: undefined }}
        />
    )
}
