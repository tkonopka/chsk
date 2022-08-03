import { Line } from '../lines'
import { getTickCoordinates, getTicks, useScales } from '../scales'
import { TicksProps } from './types'
import { useTheme } from '../themes'
import { Typography } from '../typography'

export const AxisTicks = ({
    variant,
    ticks,
    size,
    padding,
    rotate,
    style,
    labelStyle,
}: TicksProps) => {
    const scales = useScales()
    const theme = useTheme()
    if (ticks === null) return null

    const horizontal = variant === 'top' || variant === 'bottom'
    const scale = horizontal ? scales.scaleX : scales.scaleY
    const tickValues: Array<unknown> = Array.isArray(ticks) ? ticks : getTicks(scale, ticks)
    const tickCoordinates: Array<number> = getTickCoordinates(scale, ticks)

    const tickTheme = theme.AxisTicks[variant]
    const tickSize = size ?? (tickTheme?.size as number) ?? 0
    const tickPadding = padding ?? (tickTheme?.padding as number) ?? 0
    const tickRotate = rotate ?? (tickTheme?.rotate as number) ?? 0
    const tickTranslations =
        variant === 'top' || variant === 'bottom'
            ? tickCoordinates.map(v => [v, 0])
            : tickCoordinates.map(v => [0, v])
    const xMultiplier = variant === 'right' ? 1 : -1
    const yMultiplier = variant === 'top' ? -1 : 1
    const labelX = horizontal ? 0 : tickPadding * xMultiplier
    const labelY = horizontal ? tickPadding * yMultiplier : 0
    const transformTranslate = 'translate(' + labelX + ',' + labelY + ')'
    const transformRotate = tickRotate === 0 ? '' : 'rotate(' + String(Number(tickRotate)) + ')'

    const tickMarks = tickTranslations.map((translations, i) => (
        <g
            role="tick-group"
            transform={'translate(' + translations[0] + ', ' + translations[1] + ')'}
            key={'tick-' + variant + '-' + i}
        >
            <Line
                x1={0}
                y1={0}
                x2={horizontal ? 0 : tickSize * xMultiplier}
                y2={horizontal ? tickSize * yMultiplier : 0}
                variant={'tick'}
                style={style}
            />
            <Typography
                x={0}
                y={0}
                transform={transformTranslate + transformRotate}
                style={labelStyle}
                variant={'tickLabel'}
                className={variant}
            >
                {tickValues[i] as string}
            </Typography>
        </g>
    ))

    return <g role={'axis-ticks'}>{tickMarks}</g>
}
