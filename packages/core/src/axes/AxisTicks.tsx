import { X, Y, zeroPosition } from '../general'
import { Line } from '../shapes'
import { getTickCoordinates, getTicks, Scale, useScales } from '../scales'
import { AxisTicksProps } from './types'
import { getClassName, useThemedProps } from '../themes'
import { Typography } from '../typography'
import { defaultAxisTicksProps } from './defaults'

// pre-defined formatting functions
const stringFormat = (v: unknown) => String(v)

// create an array of tick marks (tick lines and tick labels)
// Note this re-uses AxisTicksProps with optional props, e.g. tickSize
// However, the expectation is that practical calls will specify all the props
export const getScaleTicks = ({
    variant = 'top',
    scale,
    scaleSize,
    ticks,
    tickSize = 0,
    labelDistance = 0,
    labelOffset = zeroPosition,
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
    const tickPositions = horizontal
        ? tickCoordinates.map(v => [v, 0])
        : tickCoordinates.map(v => [0, v])
    const xMultiplier = variant === 'right' ? 1 : -1
    const yMultiplier = variant === 'top' ? -1 : 1

    const labelX = labelOffset[X] + (horizontal ? 0 : labelDistance * xMultiplier)
    const labelY = labelOffset[Y] + (horizontal ? labelDistance * yMultiplier : 0)
    const tickFormat = labelFormat ?? stringFormat
    const compositeClassName = getClassName(variant, className)

    return tickPositions.map((position, i) => {
        const [x, y] = position
        return (
            <g key={'tick-' + tickValues[i]} role={setRole ? 'tick' : undefined} style={style}>
                {tickSize > 0 ? (
                    <Line
                        key={0}
                        variant={'tick'}
                        x1={x}
                        y1={y}
                        x2={x + (horizontal ? 0 : tickSize * xMultiplier)}
                        y2={y + (horizontal ? tickSize * yMultiplier : 0)}
                        className={compositeClassName}
                        style={tickStyle}
                        setRole={false}
                    />
                ) : null}
                <Typography
                    key={1}
                    variant={'tick-label'}
                    position={[x + labelX, y + labelY]}
                    angle={labelAngle}
                    style={labelStyle}
                    className={compositeClassName}
                    setRole={false}
                >
                    {tickFormat(tickValues[i], i)}
                </Typography>
            </g>
        )
    })
}

const UnthemedAxisTicks = ({
    variant = 'top',
    ticks = defaultAxisTicksProps.ticks,
    tickSize = defaultAxisTicksProps.tickSize,
    labelDistance = defaultAxisTicksProps.labelDistance,
    labelOffset = defaultAxisTicksProps.labelOffset,
    labelAngle = defaultAxisTicksProps.labelAngle,
    labelFormat,
    labelStyle,
    tickStyle,
    setRole = true,
    className,
    style,
}: AxisTicksProps) => {
    const { scales } = useScales()

    const tickMarks = getScaleTicks({
        scale: variant === 'top' || variant === 'bottom' ? scales.x : scales.y,
        variant,
        ticks,
        tickSize,
        tickStyle,
        labelStyle,
        labelFormat,
        labelDistance,
        labelOffset,
        labelAngle,
        setRole,
        className,
        style,
    })

    if (tickMarks === null) return null
    return <g role={setRole ? 'ticks' : undefined}>{tickMarks}</g>
}

export const AxisTicks = (props: AxisTicksProps) => (
    <UnthemedAxisTicks {...useThemedProps(props, 'AxisTicks')} />
)
