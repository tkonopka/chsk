import { useDimensions } from '../general'
import { useTheme } from '../themes'
import { AxisProps, SideType } from './types'
import { CSSProperties } from 'react'
import { Typography } from '../typography'
import { Line } from '../lines'
import { Ticks } from './ticks'

type WH = {
    width: number
    height: number
}

// produce a 'transform' string for the entire axis
const getAxisTranslate = ({
    variant,
    padding,
    width,
    height,
}: {
    variant: SideType
    padding: number
} & WH) => {
    if (variant === 'left') return 'translate(' + -padding + ',0)'
    if (variant === 'top') return 'translate(0,' + padding + ')'
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
    label,
    padding,
    anchor,
    style,
    width,
    height,
}: Pick<AxisProps, 'variant' | 'label'> &
    WH & {
        style?: CSSProperties
        padding: number
        anchor: string | number | unknown
    }) => {
    if (label === undefined || label === '') return null
    const anchorFraction = getAnchorFraction(anchor)
    let x = 0,
        y = 0
    if (variant === 'left') x -= padding
    if (variant === 'right') x += padding
    if (variant === 'top') y -= padding
    if (variant === 'bottom') y += padding
    if (variant === 'left' || variant === 'right') y += anchorFraction * height
    if (variant === 'top' || variant === 'bottom') x += anchorFraction * width
    return (
        <Typography x={x} y={y} variant={'axisLabel'} style={style} className={variant} wrap={true}>
            {label}
        </Typography>
    )
}

export const Axis = ({
    variant,
    label,
    ticks,
    axisStyle,
    tickStyle,
    tickLabelStyle,
    axisLabelStyle,
}: AxisProps) => {
    const horizontal = variant === 'top' || variant === 'bottom'
    const theme = useTheme()
    const dimensions = useDimensions()
    const { innerWidth: width, innerHeight: height } = dimensions
    const axisTheme = theme.axis[variant]
    const axisLabelTheme = theme.axisLabel[variant]
    const axisPadding = (axisTheme?.padding as number) ?? 0
    const axisLabelPadding = (axisLabelTheme?.padding as number) ?? 0
    const axisLabelAnchor = axisLabelTheme?.anchor ?? 0.5
    const y2 = horizontal ? 0 : height
    const x2 = horizontal ? width : 0

    return (
        <g
            role={'axis-' + variant}
            transform={getAxisTranslate({ variant, padding: axisPadding, width, height })}
        >
            <Ticks variant={variant} ticks={ticks} style={tickStyle} labelStyle={tickLabelStyle} />
            <Line x1={0} y1={0} x2={x2} y2={y2} style={axisStyle} variant={'axis'} />
            <AxisLabel
                variant={variant}
                label={label}
                padding={axisLabelPadding}
                anchor={axisLabelAnchor}
                width={width}
                height={height}
                style={axisLabelStyle}
            />
        </g>
    )
}
