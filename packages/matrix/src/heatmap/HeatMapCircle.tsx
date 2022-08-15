import { RectangleProps } from '@chask/core'

export const HeatMapCircle = ({ x, y, width, height, className, style, key }: RectangleProps) => {
    return (
        <circle
            key={key}
            role={undefined}
            cx={x}
            cy={y}
            r={Math.min(width, height) / 2}
            style={style}
            className={className}
        />
    )
}
