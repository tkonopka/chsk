import { createElement } from 'react'
import { Rectangle, Square } from '../shapes'
import { Typography } from '../typography'
import { addOpacity, getClassName, useThemedProps } from '../themes'
import { useScales } from '../scales'
import { useChartData } from '../charts'
import { defaultLegendItemProps } from './defaults'
import { LegendItemProps } from './types'
import { getLabelPosition, getSymbolPosition, getSymbolStyle } from './utils'

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
    color,
    interactive = defaultLegendItemProps.interactive,
    className,
    style,
    setRole = true,
}: LegendItemProps) => {
    const colorScale = useScales().color
    const { data: chartData, setData: setChartData } = useChartData()

    symbolPosition = symbolPosition ?? getSymbolPosition(variant, size, padding, r)
    labelPosition = labelPosition ?? getLabelPosition(variant, symbolPosition, labelOffset)
    const itemStyle = getSymbolStyle(symbolStyle, color, colorScale, item)

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
            {createElement(symbol, {
                cx: symbolPosition[0] + translate[0],
                cy: symbolPosition[1] + translate[1],
                r: r,
                className: getClassName('legendSymbol', className),
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
                {label ?? item}
            </Typography>
        </g>
    )
}

export const LegendItem = (props: LegendItemProps) => (
    <UnthemedLegendItem {...useThemedProps(props, 'LegendItem')} />
)
