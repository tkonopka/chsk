import { useDimensions } from '../general'
import { useTheme } from '../themes'
import { AxisProps, SideType } from './types'
import { AxisLine } from './AxisLine'
import { AxisLabel } from './AxisLabel'
import { AxisTicks } from './AxisTicks'

// produce a 'transform' string for the entire axis
export const getAxisTranslate = ({
    variant,
    offset,
    width,
    height,
}: {
    variant: SideType
    offset: number
    width: number
    height: number
}) => {
    if (variant === 'left') return 'translate(' + -offset + ',0)'
    if (variant === 'top') return 'translate(0,' + -offset + ')'
    if (variant === 'bottom') return 'translate(0,' + (height + offset) + ')'
    return 'translate(' + (width + offset) + ',0)'
}

export const Axis = ({
    variant,
    label,
    ticks,
    offset,
    className,
    style,
    setRole = true,
    children,
}: AxisProps) => {
    const theme = useTheme()
    const dimensions = useDimensions()
    const [width, height] = dimensions.innerSize
    const axisTheme = theme.Axis[variant]
    const axisOffset = offset ?? (axisTheme?.offset as number) ?? 0

    return (
        <g
            role={setRole ? 'axis-' + variant : undefined}
            transform={getAxisTranslate({ variant, offset: axisOffset, width, height })}
            className={className}
            style={style}
        >
            {children ? (
                children
            ) : (
                <>
                    <AxisTicks variant={variant} ticks={ticks} />
                    <AxisLine style={style} variant={variant} />
                    <AxisLabel variant={variant}>{label}</AxisLabel>
                </>
            )}
        </g>
    )
}
