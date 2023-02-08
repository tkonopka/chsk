import { createElement } from 'react'
import { Square } from '../shapes'
import { Typography } from '../typography'
import { getClassName, useThemedProps } from '../themes'
import { useScales } from '../scales'
import { getTranslate } from '../general'
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
    const colorScale = useScales().color

    symbolPosition = symbolPosition ?? getSymbolPosition(variant, size, padding, r)
    labelPosition = labelPosition ?? getLabelPosition(variant, symbolPosition, labelOffset)
    const itemStyle = getSymbolStyle(symbolStyle, color, colorScale, item)

    return (
        <g
            key={'tooltip-item-' + item}
            role={setRole ? 'tooltip-item' : undefined}
            transform={getTranslate(position[0], position[1])}
            style={style}
            className={'tooltipItem'}
        >
            {createElement(symbol, {
                cx: symbolPosition[0] + translate[0],
                cy: symbolPosition[1] + translate[1],
                r: r,
                className: getClassName('tooltipSymbol', className),
                style: itemStyle,
                setRole: false,
            })}
            <Typography
                variant={'tooltip-item'}
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

export const TooltipItem = (props: TooltipItemProps) => (
    <UnthemedTooltipItem {...useThemedProps(props, 'TooltipItem')} />
)
