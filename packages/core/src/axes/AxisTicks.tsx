import { X, Y } from '../general'
import { Line } from '../lines'
import { getTickCoordinates, getTicks, Scale, useScales } from '../scales'
import { TickFormatType, AxisTicksProps } from './types'
import { useThemedProps } from '../themes'
import { Typography } from '../typography'
import { defaultAxisTicksProps } from './defaults'

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
// Note this re-uses AxisTicksProps with optional props, e.g. tickSize
// However, the expectation is that practical calls will specify all the props
export const getScaleTicks = ({
    variant,
    scale,
    scaleSize,
    ticks,
    tickSize,
    labelOffset,
    labelTranslate = [0, 0],
    labelRotate,
    labelFormat,
    labelStyle,
    tickStyle,
}: AxisTicksProps & {
    scale: Scale
    scaleSize?: number // only relevant for color scales
}) => {
    const tickValues = Array.isArray(ticks) ? ticks : getTicks(scale, ticks)
    if (tickValues.length < 1) return null
    const tickCoordinates: Array<number> = getTickCoordinates(scale, tickValues, 0, scaleSize)

    const horizontal = variant === 'top' || variant === 'bottom'
    const size = tickSize ?? 0
    const offset = labelOffset ?? 0
    const rotate = labelRotate ?? 0
    const tickTranslations = horizontal
        ? tickCoordinates.map(v => [v, 0])
        : tickCoordinates.map(v => [0, v])
    const xMultiplier = variant === 'right' ? 1 : -1
    const yMultiplier = variant === 'top' ? -1 : 1

    const labelX = labelTranslate[X] + (horizontal ? 0 : offset * xMultiplier)
    const labelY = labelTranslate[Y] + (horizontal ? offset * yMultiplier : 0)
    const tickFormat = getFormatFunction(labelFormat)

    return tickTranslations.map((translations, i) => {
        const x = translations[X]
        const y = translations[Y]
        const rotation =
            rotate === 0
                ? ''
                : 'rotate(' + Number(rotate) + ',' + (x + labelX) + ',' + (y + labelY) + ')'
        return (
            <g key={'tick-' + variant + '-' + i}>
                <Line
                    x1={x}
                    y1={y}
                    x2={x + (horizontal ? 0 : size * xMultiplier)}
                    y2={y + (horizontal ? size * yMultiplier : 0)}
                    variant={'tick'}
                    style={tickStyle}
                />
                <Typography
                    position={[x + labelX, y + labelY]}
                    transform={rotation}
                    style={labelStyle}
                    variant={'tick-label'}
                    className={variant}
                >
                    {tickFormat(tickValues[i] as string, i)}
                </Typography>
            </g>
        )
    })
}

const UnthemedAxisTicks = ({
    variant,
    ticks = defaultAxisTicksProps.ticks,
    tickSize = defaultAxisTicksProps.tickSize,
    labelOffset = defaultAxisTicksProps.labelOffset,
    labelTranslate = defaultAxisTicksProps.labelTranslate,
    labelRotate = defaultAxisTicksProps.labelRotate,
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
        labelTranslate,
        labelRotate,
    })

    if (tickMarks === null) return null
    return <g role={'axis-ticks'}>{tickMarks}</g>
}

export const AxisTicks = (props: AxisTicksProps) => (
    <UnthemedAxisTicks {...useThemedProps(props, 'AxisTicks')} />
)
