import { useDimensions } from '../general'
import { useTheme } from '../themes'
import { AxisLabelProps } from './types'
import { Typography } from '../typography'

const anchorPresets: Record<string, number> = { start: 0, middle: 0.5, end: 1.0 }
const getAnchorFraction = (anchor: string | number | unknown) => {
    if (typeof anchor === 'string') return anchorPresets[anchor] ?? 0
    if (typeof anchor === 'number') return anchor
    return 0.5
}

export const AxisLabel = ({
    variant,
    offset,
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

    const [width, height] = dimensions.innerSize
    const themeProps = theme.AxisLabel[variant]
    const labelOffset = offset ?? (themeProps?.offset as number) ?? 0
    const labelAnchor = anchor ?? themeProps?.anchor ?? 0.5
    const labelRotate = rotate ?? themeProps?.rotate ?? 0
    const anchorFraction = getAnchorFraction(labelAnchor)

    let x = 0,
        y = 0
    if (variant === 'left') x -= labelOffset
    if (variant === 'right') x += labelOffset
    if (variant === 'top') y -= labelOffset
    if (variant === 'bottom') y += labelOffset
    if (variant === 'left' || variant === 'right') y += (1 - anchorFraction) * height
    if (variant === 'top' || variant === 'bottom') x += anchorFraction * width
    const rotation = labelRotate === 0 ? '' : ' rotate(' + String(Number(labelRotate)) + ')'

    return (
        <Typography
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
