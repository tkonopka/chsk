import { createElement } from 'react'
import { getTranslate, X, Y } from '../general'
import { Square } from '../shapes'
import { getClassName, useThemedProps } from '../themes'
import { useScales } from '../scales'
import { defaultTooltipItemProps } from './defaults'
import { TooltipItemProps } from './types'
import { getLabelPosition, getSymbolPosition, getSymbolStyle } from '../legends/utils'

const UnthemedTooltipItem = ({
    variant = 'right',
    item,
    position,
    size = defaultTooltipItemProps.size,
    padding = defaultTooltipItemProps.padding,
    translate = defaultTooltipItemProps.translate,
    r = defaultTooltipItemProps.r,
    symbol = Square,
    symbolPosition,
    symbolStyle,
    label,
    labelStyle,
    labelPosition,
    labelOffset = defaultTooltipItemProps.labelOffset,
    color,
    className,
    style,
    setRole = true,
}: TooltipItemProps) => {
    const colorScale = useScales().scales.color
    symbolPosition = symbolPosition ?? getSymbolPosition(variant, size, padding, r)
    labelPosition = labelPosition ?? getLabelPosition(variant, symbolPosition, labelOffset, r)
    const itemStyle = getSymbolStyle(symbolStyle, color, colorScale, item)
    const symbolClassName = getClassName('tooltipSymbol ' + variant, className)
    const textClassName = getClassName('tooltipItem ' + variant, className)

    return (
        <g
            key={'tooltip-item-' + item}
            role={setRole ? 'tooltip-item' : undefined}
            transform={getTranslate(position[X], position[Y])}
            style={style}
            className={textClassName}
        >
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
                className={textClassName}
                style={labelStyle}
            >
                {label ?? item}
            </text>
        </g>
    )
}

export const TooltipItem = (props: TooltipItemProps) => (
    <UnthemedTooltipItem {...useThemedProps(props, 'TooltipItem')} />
)
