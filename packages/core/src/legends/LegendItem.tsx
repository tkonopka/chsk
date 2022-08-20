import { LegendItemProps } from './types'
import { Rectangle, Square } from '../shapes'
import { useProcessedData } from '../views'
import { Typography } from '../typography'
import { useTheme } from '../themes'
import { useScales } from '../scales'
import { addColor } from '../themes'
import { LEFT, RIGHT, TOP } from '../general'

export const LegendItem = ({
    position,
    size,
    padding,
    translate = [0, 0],
    align,
    r,
    symbol = Square,
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
    const theme = useTheme().Legend

    const cIndex = colorIndex ?? data.keys.indexOf(label ?? '')
    const itemSize = size ?? theme.itemSize
    const itemPadding = padding ?? theme.itemPadding
    const itemStyle = addColor(symbolStyle, colorScale(cIndex))
    const itemR = r ?? theme.r
    const itemAlign = align ?? theme.align
    const labOffset = labelOffset ?? theme.labelOffset

    // determine position of symbol and text label
    const symbolPos = [itemR + itemPadding[LEFT], itemR + itemPadding[TOP]]
    if (itemAlign === 'right') {
        symbolPos[0] = itemSize[0] - itemPadding[RIGHT] - itemR
    } else if (itemAlign === 'middle') {
        symbolPos[0] =
            itemPadding[LEFT] + (itemSize[0] - itemPadding[LEFT] - itemPadding[RIGHT]) / 2
    }
    const labelPos = [symbolPos[0] + labOffset[0], itemR + labOffset[1] + itemPadding[TOP]]

    const transform = 'translate(' + position[0] + ',' + position[1] + ')'
    return (
        <g role={setRole ? 'legend-item' : undefined} transform={transform} style={style}>
            <Rectangle
                variant="legendItem"
                x={0}
                y={0}
                width={itemSize[0]}
                height={itemSize[1]}
                setRole={false}
            />
            {symbol({
                cx: symbolPos[0] + translate[0],
                cy: symbolPos[1] + translate[1],
                r: itemR,
                className,
                style: itemStyle,
                setRole: false,
            })}
            <Typography
                variant={'legendLabel'}
                position={[labelPos[0] + translate[0], labelPos[1] + translate[1]]}
                style={labelStyle}
                setRole={false}
            >
                {label}
            </Typography>
        </g>
    )
}
