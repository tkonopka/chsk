import { HeatMapCellProps } from './types'

export const HeatMapSimpleCircle = ({
    x,
    y,
    width,
    height,
    className,
    style,
}: HeatMapCellProps) => {
    return (
        <circle cx={x} cy={y} r={Math.min(width, height) / 2} style={style} className={className} />
    )
}
