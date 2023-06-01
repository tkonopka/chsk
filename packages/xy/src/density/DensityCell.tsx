import { m } from 'framer-motion'
import { DensityCellProps } from './types'

export const DensityCell = ({ value, x, y, width, height, style, ...props }: DensityCellProps) => {
    const r = value < 2 ? width / 2 : 0
    const config = { fill: style?.fill, rx: r, ry: r }
    return (
        <m.rect
            initial={config}
            animate={config}
            role={undefined}
            x={x}
            y={y}
            width={width}
            height={height}
            style={{ ...style, fill: undefined }}
            {...props}
        />
    )
}
