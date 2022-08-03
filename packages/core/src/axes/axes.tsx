import { useDimensions } from '../general'
import { useTheme } from '../themes'
import { AxisLabelProps, AxisLineProps, AxisProps, SideType } from './types'
import { Typography } from '../typography'
import { Line } from '../lines'
import { AxisTicks } from './ticks'

// produce a 'transform' string for the entire axis
const getAxisTranslate = ({
    variant,
    padding,
    width,
    height,
}: {
    variant: SideType
    padding: number
    width: number
    height: number
}) => {
    if (variant === 'left') return 'translate(' + -padding + ',0)'
    if (variant === 'top') return 'translate(0,' + -padding + ')'
    if (variant === 'bottom') return 'translate(0,' + (height + padding) + ')'
    return 'translate(' + (width + padding) + ',0)'
}

const anchorPresets: Record<string, number> = { start: 0, middle: 0.5, end: 1.0 }
const getAnchorFraction = (anchor: string | number | unknown) => {
    if (typeof anchor === 'string') return anchorPresets[anchor] ?? 0
    if (typeof anchor === 'number') return anchor
    return 0.5
}

/** Places a text label for an axis */
export const AxisLabel = ({
    variant,
    padding,
    anchor,
    rotate,
    className,
    style,
    setRole,
    children,
}: AxisLabelProps) => {
    const theme = useTheme()
    const dimensions = useDimensions()
    if (children === undefined || children === '') return null

    const { innerWidth: width, innerHeight: height } = dimensions
    const themeProps = theme.AxisLabel[variant]
    const labelPadding = padding ?? (themeProps?.padding as number) ?? 0
    const labelAnchor = anchor ?? themeProps?.anchor ?? 0.5
    const labelRotate = rotate ?? themeProps?.rotate ?? 0
    const anchorFraction = getAnchorFraction(labelAnchor)

    let x = 0,
        y = 0
    if (variant === 'left') x -= labelPadding
    if (variant === 'right') x += labelPadding
    if (variant === 'top') y -= labelPadding
    if (variant === 'bottom') y += labelPadding
    if (variant === 'left' || variant === 'right') y += (1 - anchorFraction) * height
    if (variant === 'top' || variant === 'bottom') x += anchorFraction * width
    const rotation = labelRotate === 0 ? '' : ' rotate(' + String(Number(labelRotate)) + ')'

    return (
        <Typography
            x={0}
            y={0}
            variant={'axisLabel'}
            transform={'translate(' + x + ', ' + y + ')' + rotation}
            style={style}
            className={className ?? variant}
            setRole={setRole}
        >
            {children}
        </Typography>
    )
}

/** draw the dominant axis line */
export const AxisLine = ({ variant, className, style, setRole }: AxisLineProps) => {
    const horizontal = variant === 'top' || variant === 'bottom'
    const dimensions = useDimensions()
    const { innerWidth: width, innerHeight: height } = dimensions
    return (
        <Line
            x1={0}
            y1={0}
            x2={horizontal ? width : 0}
            y2={horizontal ? 0 : height}
            variant={'axis'}
            className={className}
            style={style}
            setRole={setRole}
        />
    )
}

export const Axis = ({
    variant,
    label,
    ticks,
    padding,
    className,
    style,
    setRole = true,
    children,
}: AxisProps) => {
    const theme = useTheme()
    const dimensions = useDimensions()
    const { innerWidth: width, innerHeight: height } = dimensions
    const axisTheme = theme.Axis[variant]
    const axisPadding = padding ?? (axisTheme?.padding as number) ?? 0

    return (
        <g
            role={setRole ? 'axis-' + variant : undefined}
            transform={getAxisTranslate({ variant, padding: axisPadding, width, height })}
            className={className}
            style={style}
        >
            {children}
            <AxisTicks variant={variant} ticks={ticks} />
            <AxisLine style={style} variant={variant} />
            <AxisLabel variant={variant}>{label}</AxisLabel>
        </g>
    )
}
