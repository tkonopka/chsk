import { Typography, TypographyProps } from '../typography'

export const LegendTitle = ({
    x,
    y,
    transform,
    className,
    style,
    setRole = true,
    children,
}: TypographyProps) => {
    return (
        <Typography
            x={x}
            y={y}
            transform={transform}
            variant={'legend-title'}
            className={className}
            style={style}
            setRole={setRole}
        >
            {children}
        </Typography>
    )
}
