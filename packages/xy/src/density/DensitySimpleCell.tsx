import { DensityCellProps } from './types'

export const DensitySimpleCell = ({ value, x, y, width, height, ...props }: DensityCellProps) => {
    if (value < 2) {
        return <circle role={undefined} cx={x} cy={y} r={width / 2} {...props} />
    }
    return (
        <rect
            role={undefined}
            x={x - width / 2}
            y={y - height / 2}
            width={width}
            height={height}
            {...props}
        />
    )
}
