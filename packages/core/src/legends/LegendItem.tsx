import { createElement } from 'react'
import { getTranslate, X, Y, zeroPosition } from '../general'
import { Square } from '../shapes'
import { getClassName, useThemedProps } from '../themes'
import { useScales } from '../scales'
import { useChartData } from '../charts'
import { defaultLegendItemProps } from './defaults'
import { LegendItemProps } from './types'
import { getLabelPosition, getSymbolPosition, getSymbolStyle } from './utils'

const UnthemedLegendItem = ({
    variant = 'right',
    item,
    position = zeroPosition,
    size = defaultLegendItemProps.size,
    padding = defaultLegendItemProps.padding,
    offset = defaultLegendItemProps.offset,
    r = defaultLegendItemProps.r,
    symbol = Square,
    symbolPosition,
    symbolStyle,
    label,
    labelStyle,
    labelPosition,
    labelDistance = defaultLegendItemProps.labelDistance,
    color,
    interactive = defaultLegendItemProps.interactive,
    disabledStyle = defaultLegendItemProps.disabledStyle,
    className,
    style,
    setRole = true,
}: LegendItemProps) => {
    const colorScale = useScales().scales.color
    const { data: chartData, setData: setChartData } = useChartData()

    symbolPosition = symbolPosition ?? getSymbolPosition(variant, size, padding, r)
    labelPosition = labelPosition ?? getLabelPosition(variant, symbolPosition, r + labelDistance)
    const itemStyle = getSymbolStyle(symbolStyle, color, colorScale, item)

    const handleClick = () => {
        if (!interactive) return
        const disabledKeys: Set<string> = chartData.disabledKeys ?? new Set<string>()
        if (disabledKeys.has(item)) {
            disabledKeys.delete(item)
        } else {
            disabledKeys.add(item)
        }
        setChartData?.({ ...chartData, disabledKeys })
    }

    const isDisabled = chartData.disabledKeys ? chartData.disabledKeys.has(item) : false
    const gStyle = isDisabled ? { ...style, ...disabledStyle } : style
    const symbolClassName = getClassName('legendSymbol', className)
    const itemClassName = getClassName('legendItem', className)

    return (
        <g
            role={setRole ? 'legend-item' : undefined}
            transform={getTranslate(position)}
            style={gStyle}
            className={'legendItem'}
            onClick={handleClick}
        >
            <rect x={0} y={0} width={size[X]} height={size[Y]} className={itemClassName} />
            {createElement(symbol, {
                cx: symbolPosition[X] + offset[X],
                cy: symbolPosition[Y] + offset[Y],
                r: r,
                className: symbolClassName,
                style: itemStyle,
                setRole: false,
            })}
            <text
                x={labelPosition[X] + offset[X]}
                y={labelPosition[Y] + offset[Y]}
                style={labelStyle}
                className={itemClassName}
            >
                {label ?? item}
            </text>
        </g>
    )
}

export const LegendItem = (props: LegendItemProps) => (
    <UnthemedLegendItem {...useThemedProps(props, 'LegendItem')} />
)
