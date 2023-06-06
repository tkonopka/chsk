import { HeatMapCellProps } from './types'

export const HeatMapSimpleRectangle = ({ x, y, width, height, ...props }: HeatMapCellProps) => {
    delete props.cellSize
    delete props.cellValue
    return <rect x={x - width / 2} y={y - height / 2} height={height} width={width} {...props} />
}
