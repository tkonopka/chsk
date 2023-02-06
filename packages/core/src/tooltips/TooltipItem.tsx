import { Square } from '../shapes'
import { Typography } from '../typography'
import { addColor, getClassName, useThemedProps } from '../themes'
import { useScales } from '../scales'
import { getTranslate, TOP, LEFT, RIGHT, X, Y } from '../general'
import { defaultTooltipItemProps } from './defaults'
import { TooltipItemProps } from './types'
import { createElement } from 'react'

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
    colorIndex,
    className,
    style,
    setRole = true,
}: TooltipItemProps) => {
    const colorScale = useScales().color
    const cIndex = colorIndex ?? colorScale.domain().indexOf(item ?? '')
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
                {label}
            </Typography>
        </g>
    )
}

export const TooltipItem = (props: TooltipItemProps) => (
    <UnthemedTooltipItem {...useThemedProps(props, 'TooltipItem')} />
)
