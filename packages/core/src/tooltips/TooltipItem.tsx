import { Rectangle, Square } from '../shapes'
import { Typography } from '../typography'
import { addColor, composeClassName, useThemedProps } from '../themes'
import { useScales } from '../scales'
import { LEFT, RIGHT, TOP, X, Y } from '../general'
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

    const transform = 'translate(' + position[0] + ',' + position[1] + ')'

    return (
        <g
            key={'tooltip-item-' + item}
            role={setRole ? 'tooltip-item' : undefined}
            transform={transform}
            style={style}
            className={'tooltipItem'}
        >
            <Rectangle
                variant={'tooltip-item'}
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
                className: composeClassName(['tooltipSymbol', className]),
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
