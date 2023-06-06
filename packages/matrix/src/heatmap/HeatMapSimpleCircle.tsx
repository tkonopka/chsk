import { HeatMapCellProps } from './types'

export const HeatMapSimpleCircle = ({ x, y, width, height, ...props }: HeatMapCellProps) => {
    delete props.cellSize
    delete props.cellValue
    return <circle cx={x} cy={y} r={Math.min(width, height) / 2} {...props} />
}
