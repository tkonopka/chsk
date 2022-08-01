import { Line } from '../lines'
import { getTickCoordinates, getTicks, useScales } from '../scales'
import { TicksProps } from './types'
import { useTheme } from '../themes'
import { Typography } from '../typography'

export const Ticks = ({ variant, ticks, style, labelStyle }: TicksProps) => {
    const horizontal = variant === 'top' || variant === 'bottom'
    const scales = useScales()
    const scale = horizontal ? scales.scaleX : scales.scaleY

    const tickValues: Array<unknown> = Array.isArray(ticks) ? ticks : getTicks(scale, ticks)
    const tickCoordinates: Array<number> = getTickCoordinates(scale, ticks)

    const theme = useTheme()
    const tickTheme = theme.tick[variant]
    const tickSize = (tickTheme?.size as number) ?? 0
    const tickPadding = (tickTheme?.padding as number) ?? 0
    const tickTranslations =
        variant === 'top' || variant === 'bottom'
            ? tickCoordinates.map(v => [v, 0])
            : tickCoordinates.map(v => [0, v])

    const xMultiplier = variant === 'right' ? 1 : -1
    const yMultiplier = variant === 'top' ? -1 : 1

    const tickMarks = tickTranslations.map((translations, i) => (
        <g
            role="tick"
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
                x={horizontal ? 0 : tickPadding * xMultiplier}
                y={horizontal ? tickPadding * yMultiplier : 0}
                style={labelStyle}
                variant={'tickLabel'}
                className={variant}
                wrap={true}
            >
                {tickValues[i] as string}
            </Typography>
        </g>
    ))

    return <g role={'axis-ticks'}>{tickMarks}</g>
}
