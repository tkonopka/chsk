import { Rectangle, Square } from '../shapes'
import { useProcessedData } from '../views'
import { Typography } from '../typography'
import { addColor, addOpacity, composeClassName, themedProps } from '../themes'
import { useScales } from '../scales'
import { LEFT, RIGHT, TOP, X, Y } from '../general'
import { useChartData } from '../chart'
import { defaultLegendItemProps } from './defaults'
import { LegendItemProps } from './types'

const UnthemedLegendItem = ({
    variant = 'right',
    item,
    position,
    size = defaultLegendItemProps.size,
    padding = defaultLegendItemProps.padding,
    translate = defaultLegendItemProps.translate,
    r = defaultLegendItemProps.r,
    symbol = Square,
    symbolPosition,
    symbolStyle,
    label,
    labelStyle,
    labelPosition,
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
    if (!symbolPosition) {
        symbolPosition = [r + padding[LEFT], r + padding[TOP]]
        if (variant === 'left') {
            symbolPosition[X] = size[0] - padding[RIGHT] - r
        } else if (variant === 'bottom') {
            symbolPosition[X] = padding[LEFT] + (size[X] - padding[LEFT] - padding[RIGHT]) / 2
        } else if (variant === 'top') {
            symbolPosition[X] = padding[LEFT] + (size[X] - padding[LEFT] - padding[RIGHT]) / 2
        }
    }
    if (!labelPosition) {
        labelPosition = [symbolPosition[X], symbolPosition[Y]]
        if (variant === 'left') {
            labelPosition[X] -= labelOffset
        } else if (variant === 'right') {
            labelPosition[X] += labelOffset
        } else if (variant === 'bottom') {
            labelPosition[Y] += labelOffset
        } else if (variant === 'top') {
            labelPosition[Y] -= labelOffset
        }
    }

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
                variant={'legend-item'}
                x={0}
                y={0}
                width={size[0]}
                height={size[1]}
                setRole={false}
            />
            {symbol({
                cx: symbolPosition[0] + translate[0],
                cy: symbolPosition[1] + translate[1],
                r: r,
                className: composeClassName(['legendSymbol', className]),
                style: itemStyle,
                setRole: false,
            })}
            <Typography
                variant={'legend-item'}
                position={[labelPosition[0] + translate[0], labelPosition[1] + translate[1]]}
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
