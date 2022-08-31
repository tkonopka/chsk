import { Rectangle, Square } from '../shapes'
import { useProcessedData } from '../views'
import { Typography } from '../typography'
import { addColor, addOpacity, themedProps } from '../themes'
import { useScales } from '../scales'
import { LEFT, RIGHT, TOP } from '../general'
import { useChartData } from '../chart'
import { defaultLegendItemProps } from './defaults'
import { LegendItemProps } from './types'

export const UnthemedLegendItem = ({
    variant = 'legend-item',
    position,
    size = defaultLegendItemProps.size,
    padding = defaultLegendItemProps.padding,
    translate = defaultLegendItemProps.translate,
    align = defaultLegendItemProps.align,
    r = defaultLegendItemProps.r,
    symbol = Square,
    symbolStyle,
    label,
    labelStyle,
    labelOffset = defaultLegendItemProps.labelOffset,
    colorIndex,
    className,
    style,
    setRole = true,
}: LegendItemProps) => {
    const data = useProcessedData()
    const colorScale = useScales().color
    const { data: chartData, setData: setChartData } = useChartData()

    const cIndex = colorIndex ?? data.keys.indexOf(label ?? '')
    const itemStyle = addColor(symbolStyle, colorScale(cIndex))

    // determine position of symbol and text label
    const symbolPos = [r + padding[LEFT], r + padding[TOP]]
    if (align === 'right') {
        symbolPos[0] = size[0] - padding[RIGHT] - r
    } else if (align === 'middle') {
        symbolPos[0] = padding[LEFT] + (size[0] - padding[LEFT] - padding[RIGHT]) / 2
    }
    const labelPos = [symbolPos[0] + labelOffset[0], r + labelOffset[1] + padding[TOP]]

    const handleClick = () => {
        const disabledKeys: Set<string> = chartData.disabledKeys ?? new Set<string>()
        if (disabledKeys.has(label)) {
            disabledKeys.delete(label)
        } else {
            disabledKeys.add(label)
        }
        setChartData({ ...chartData, disabledKeys })
    }

    const isDisabled = chartData.disabledKeys ? chartData.disabledKeys.has(label) : false
    const transform = 'translate(' + position[0] + ',' + position[1] + ')'
    const gStyle = addOpacity(style, isDisabled ? 0.5 : 1)

    return (
        <g
            role={setRole ? variant : undefined}
            transform={transform}
            style={gStyle}
            className={variant}
            onClick={handleClick}
        >
            <Rectangle
                variant={variant}
                x={0}
                y={0}
                width={size[0]}
                height={size[1]}
                setRole={false}
            />
            {symbol({
                cx: symbolPos[0] + translate[0],
                cy: symbolPos[1] + translate[1],
                r: r,
                className,
                style: itemStyle,
                setRole: false,
            })}
            <Typography
                variant={variant}
                position={[labelPos[0] + translate[0], labelPos[1] + translate[1]]}
                style={labelStyle}
                className={className}
                setRole={false}
            >
                {label}
            </Typography>
        </g>
    )
}

export const LegendItem = (props: LegendItemProps) => (
    <UnthemedLegendItem {...themedProps(props, 'LegendItem')} />
)
