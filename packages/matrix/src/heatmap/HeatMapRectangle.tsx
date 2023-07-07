import { m } from 'framer-motion'
import { HeatMapCellProps } from './types'

export const HeatMapRectangle = ({ x, y, width, height, style, ...props }: HeatMapCellProps) => {
    const config = { fill: style?.fill }
    return (
        <m.rect
            {...props}
            initial={config}
            animate={config}
            exit={config}
            x={x - width / 2}
            y={y - height / 2}
            height={height}
            width={width}
            style={{ ...style, fill: undefined }}
        />
    )
}
