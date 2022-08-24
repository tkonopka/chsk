import { Line } from '../lines'
import { getTickCoordinates, getTicks, Scale, useScales } from '../scales'
import { TickFormatType, AxisTicksProps } from './types'
import { useTheme } from '../themes'
import { Typography } from '../typography'

// special formatting functions
const stringFormat = (v: unknown) => String(v)
// emptyFormat always returns an empty string; the if-else construct avoids lint warnings
const emptyFormat = (v: unknown) => (v ? '' : '')

const getFormatFunction = (format: undefined | null | TickFormatType) => {
    if (format === undefined) return stringFormat
    if (format === null) return emptyFormat
    return format
}

// create an array of tick marks (tick lines and tick labels)
export const getScaleTicks = ({
    variant,
    scale,
    scaleSize,
    ticks,
    tickSize,
    labelOffset,
    labelRotate,
    labelFormat,
    labelStyle,
    tickStyle,
}: AxisTicksProps & {
    scale: Scale
    scaleSize?: number // only relevant for color scales
}) => {
    const theme = useTheme()
    const tickValues = Array.isArray(ticks) ? ticks : getTicks(scale, ticks)
    if (tickValues.length <= 1) return null
    const tickCoordinates: Array<number> = getTickCoordinates(scale, tickValues, 0, scaleSize)

    const horizontal = variant === 'top' || variant === 'bottom'
    const tickTheme = theme.AxisTicks[variant]
    const size = tickSize ?? (tickTheme?.tickSize as number) ?? 0
    const offset = labelOffset ?? (tickTheme?.labelOffset as number) ?? 0
    const rotate = labelRotate ?? (tickTheme?.labelRotate as number) ?? 0
    const tickTranslations = horizontal
        ? tickCoordinates.map(v => [v, 0])
        : tickCoordinates.map(v => [0, v])
    const xMultiplier = variant === 'right' ? 1 : -1
    const yMultiplier = variant === 'top' ? -1 : 1

    const labelX = horizontal ? 0 : offset * xMultiplier
    const labelY = horizontal ? offset * yMultiplier : 0
    const transformTranslate = 'translate(' + labelX + ',' + labelY + ')'
    const transformRotate = rotate === 0 ? '' : 'rotate(' + Number(rotate) + ')'

    const tickFormat = getFormatFunction(labelFormat)

    return tickTranslations.map((translations, i) => (
        <g
            transform={'translate(' + translations[0] + ', ' + translations[1] + ')'}
            key={'tick-' + variant + '-' + i}
        >
            <Line
                x1={0}
                y1={0}
                x2={horizontal ? 0 : size * xMultiplier}
                y2={horizontal ? size * yMultiplier : 0}
                variant={'tick'}
                style={tickStyle}
            />
            <Typography
                transform={transformTranslate + transformRotate}
                style={labelStyle}
                variant={'tickLabel'}
                className={variant}
            >
                {tickFormat(tickValues[i] as string)}
            </Typography>
        </g>
    ))
}

export const AxisTicks = ({
    variant,
    ticks,
    tickSize,
    labelOffset,
    labelRotate,
    labelFormat,
    labelStyle,
    tickStyle,
}: AxisTicksProps) => {
    const scales = useScales()

    const tickMarks = getScaleTicks({
        scale: variant === 'top' || variant === 'bottom' ? scales.x : scales.y,
        variant,
        ticks,
        tickSize,
        tickStyle,
        labelStyle,
        labelFormat,
        labelOffset,
        labelRotate,
    })

    if (tickMarks === null) return null
    return <g role={'axis-ticks'}>{tickMarks}</g>
}
