import { m } from 'framer-motion'
import { DensityCellProps } from './types'

export const DensityCell = ({ value, x, y, width, height, style, ...props }: DensityCellProps) => {
    const r = value < 2 ? width / 2 : 0
    const config = { fill: style?.fill, opacity: style?.opacity, rx: r, ry: r }
    return (
        <m.rect
            initial={config}
            animate={config}
            role={undefined}
            x={x - width / 2}
            y={y - height / 2}
            width={width}
            height={height}
            style={{ ...style, fill: undefined, opacity: undefined }}
            {...props}
        />
    )
}
