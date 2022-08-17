import { LegendItemProps } from './types'
import { GoldenRect } from '../shapes'
import { useProcessedData } from '../views'
import { Typography } from '../typography'
import { useTheme } from '../themes'
import { useScales } from '../scales'
import { addColor } from '../themes'

export const LegendItem = ({
    position,
    r,
    symbol = GoldenRect,
    symbolStyle,
    label,
    labelStyle,
    labelOffset,
    colorIndex,
    className,
    style,
    setRole = true,
}: LegendItemProps) => {
    const data = useProcessedData()
    const colorScale = useScales().color
    const theme = useTheme()

    const offset = labelOffset ?? theme.Legend.labelOffset
    const cIndex = colorIndex ?? data.keys.indexOf(label ?? '')
    const itemStyle = addColor(symbolStyle, colorScale(cIndex))
    const itemR = r ?? theme.Legend.r ?? 1

    const translate = 'translate(' + (position[0] + itemR) + ',' + (position[1] + itemR) + ')'
    return (
        <g role={setRole ? 'legend-item' : undefined} transform={translate} style={style}>
            {symbol({
                cx: 0,
                cy: 0,
                r: itemR,
                className,
                style: itemStyle,
                setRole: false,
            })}
            <Typography
                variant={'legendLabel'}
                x={offset[0]}
                y={offset[1]}
                style={labelStyle}
                setRole={false}
            >
                {label}
            </Typography>
        </g>
    )
}
