import { DensityCellProps } from './types'

export const DensitySimpleCell = ({ value, x, y, width, height, ...props }: DensityCellProps) => {
    if (value < 2) {
        return (
            <circle
                role={undefined}
                cx={x + width / 2}
                cy={y + height / 2}
                r={width / 2}
                {...props}
            />
        )
    }
    return <rect role={undefined} x={x} y={y} width={width} height={height} {...props} />
}
