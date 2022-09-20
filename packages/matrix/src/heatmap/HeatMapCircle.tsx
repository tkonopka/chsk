import { HeatMapCellProps } from './types'

export const HeatMapCircle = ({ x, y, width, height, className, style }: HeatMapCellProps) => {
    return (
        <circle
            role={undefined}
            cx={x}
            cy={y}
            r={Math.min(width, height) / 2}
            style={style}
            className={className}
        />
    )
}
