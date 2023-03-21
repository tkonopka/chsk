import { X, Y, zeroPosition } from '../general'
import { Line } from '../shapes'
import { getTickCoordinates, getTicks, Scale, useScales } from '../scales'
import { AxisTicksProps } from './types'
import { getClassName, useThemedProps } from '../themes'
import { Typography } from '../typography'
import { defaultAxisTicksProps } from './defaults'

// special formatting functions
const stringFormat = (v: unknown) => String(v)

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
    labelTranslate = zeroPosition,
    labelAngle,
    labelFormat,
    labelStyle,
    tickStyle,
    setRole,
    className,
    style,
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
    const tickTranslations = horizontal
        ? tickCoordinates.map(v => [v, 0])
        : tickCoordinates.map(v => [0, v])
    const xMultiplier = variant === 'right' ? 1 : -1
    const yMultiplier = variant === 'top' ? -1 : 1

    const labelX = labelTranslate[X] + (horizontal ? 0 : offset * xMultiplier)
    const labelY = labelTranslate[Y] + (horizontal ? offset * yMultiplier : 0)
    const tickFormat = labelFormat ?? stringFormat
    const compositeClassName = getClassName(variant, className)

    return tickTranslations.map((translations, i) => {
        const x = translations[X]
        const y = translations[Y]
        return (
            <g key={'tick-' + variant + '-' + i} role={setRole ? 'tick' : undefined} style={style}>
                <Line
                    variant={'tick'}
                    x1={x}
                    y1={y}
                    x2={x + (horizontal ? 0 : size * xMultiplier)}
                    y2={y + (horizontal ? size * yMultiplier : 0)}
                    className={compositeClassName}
                    style={tickStyle}
                    setRole={false}
                />
                <Typography
                    variant={'tick-label'}
                    position={[x + labelX, y + labelY]}
                    angle={labelAngle}
                    style={labelStyle}
                    className={compositeClassName}
                    setRole={false}
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
    labelAngle = defaultAxisTicksProps.labelAngle,
    labelFormat,
    labelStyle,
    tickStyle,
    setRole = true,
    className,
    style,
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
        labelAngle,
        setRole,
        className,
        style,
    })

    if (tickMarks === null) return null
    return <g role={setRole ? 'axis-ticks' : undefined}>{tickMarks}</g>
}

export const AxisTicks = (props: AxisTicksProps) => (
    <UnthemedAxisTicks {...useThemedProps(props, 'AxisTicks')} />
)
