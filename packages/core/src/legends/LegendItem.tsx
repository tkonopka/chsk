import { createElement } from 'react'
import { getTranslate, X, Y } from '../general'
import { Square } from '../shapes'
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
    const colorScale = useScales().scales.color
    const { data: chartData, setData: setChartData } = useChartData()

    symbolPosition = symbolPosition ?? getSymbolPosition(variant, size, padding, r)
    labelPosition = labelPosition ?? getLabelPosition(variant, symbolPosition, labelOffset, r)
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
    const gStyle = addOpacity(style, isDisabled ? 0.5 : 1)
    const symbolClassName = getClassName('legendSymbol', className)
    const textClassName = getClassName('legendItem', className)

    // the <rect> is needed to provide a surface that can be clicked on
    return (
        <g
            role={setRole ? 'legend-item' : undefined}
            transform={getTranslate(position[X], position[Y])}
            style={gStyle}
            className={'legendItem'}
            onClick={handleClick}
        >
            <rect x={0} y={0} width={size[X]} height={size[Y]} className={textClassName} />
            {createElement(symbol, {
                cx: symbolPosition[X] + translate[X],
                cy: symbolPosition[Y] + translate[Y],
                r: r,
                className: symbolClassName,
                style: itemStyle,
                setRole: false,
            })}
            <text
                x={labelPosition[X] + translate[X]}
                y={labelPosition[Y] + translate[Y]}
                style={labelStyle}
                className={textClassName}
            >
                {label ?? item}
            </text>
        </g>
    )
}

export const LegendItem = (props: LegendItemProps) => (
    <UnthemedLegendItem {...useThemedProps(props, 'LegendItem')} />
)
