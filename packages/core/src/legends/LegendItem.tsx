import { Rectangle, Square } from '../shapes'
import { useProcessedData } from '../views'
import { Typography } from '../typography'
import { addColor, addOpacity, composeClassName, themedProps } from '../themes'
import { useScales } from '../scales'
import { LEFT, RIGHT, TOP } from '../general'
import { useChartData } from '../chart'
import { defaultLegendItemProps } from './defaults'
import { LegendItemProps } from './types'

export const UnthemedLegendItem = ({
    variant = 'default',
    item,
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
    interactive = defaultLegendItemProps.interactive,
    className,
    style,
    setRole = true,
}: LegendItemProps) => {
    const data = useProcessedData()
    const colorScale = useScales().color
    const { data: chartData, setData: setChartData } = useChartData()

    const cIndex = colorIndex ?? data.keys.indexOf(item ?? '')
    const itemStyle = addColor(symbolStyle, colorScale(cIndex))
    label = label ?? item

    // determine position of symbol and text label
    const symbolPos = [r + padding[LEFT], r + padding[TOP]]
    if (align === 'right') {
        symbolPos[0] = size[0] - padding[RIGHT] - r
    } else if (align === 'middle') {
        symbolPos[0] = padding[LEFT] + (size[0] - padding[LEFT] - padding[RIGHT]) / 2
    }
    const labelPos = [symbolPos[0] + labelOffset[0], r + labelOffset[1] + padding[TOP]]

    const handleClick = () => {
        if (!interactive) return
        const disabledKeys: Set<string> = chartData.disabledKeys ?? new Set<string>()
        if (disabledKeys.has(item)) {
            disabledKeys.delete(item)
        } else {
            disabledKeys.add(item)
        }
        setChartData({ ...chartData, disabledKeys })
    }

    const isDisabled = chartData.disabledKeys ? chartData.disabledKeys.has(item) : false
    const transform = 'translate(' + position[0] + ',' + position[1] + ')'
    const gStyle = addOpacity(style, isDisabled ? 0.5 : 1)

    return (
        <g
            role={setRole ? 'legend-item' : undefined}
            transform={transform}
            style={gStyle}
            className={'legendItem'}
            onClick={handleClick}
        >
            <Rectangle
                variant={variant === 'default' ? 'legend-item' : variant}
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
                className: composeClassName(['legendSymbol', className]),
                style: itemStyle,
                setRole: false,
            })}
            <Typography
                variant={variant === 'default' ? 'legend-item' : variant}
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
