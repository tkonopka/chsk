import { HeatMapCellProps } from './types'

export const HeatMapRectangle = ({ x, y, width, height, className, style }: HeatMapCellProps) => {
    return (
        <rect
            x={x - width / 2}
            y={y - height / 2}
            height={height}
            width={width}
            role={undefined}
            style={style}
            className={className}
        />
    )
}
