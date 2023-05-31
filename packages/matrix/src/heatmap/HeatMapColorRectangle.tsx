import { m } from 'framer-motion'
import { HeatMapCellProps } from './types'

export const HeatMapColorRectangle = ({
    x,
    y,
    width,
    height,
    className,
    style,
}: HeatMapCellProps) => {
    const config = { fill: style?.fill }
    return (
        <m.rect
            initial={config}
            animate={config}
            role={undefined}
            x={x - width / 2}
            y={y - height / 2}
            height={height}
            width={width}
            style={{ ...style, fill: undefined }}
            className={className}
        />
    )
}
