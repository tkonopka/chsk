import { useView } from '../views'
import { useThemedProps } from '../themes'
import { NumericPositionSpec, useDimensions } from '../general'
import { X, Y, LEFT, RIGHT, TOP, BOTTOM } from '../general'
import { defaultTooltipProps } from './defaults'
import { useTooltip } from './contexts'
import { guessLabel } from './utils'
import { BaseTooltip } from './BaseTooltip'
import { AxisTooltipProps } from './types'

const UnthemedAxisTooltip = ({
    variant = 'right',
    // layout of container
    position = defaultTooltipProps.position,
    size,
    anchor = defaultTooltipProps.anchor,
    padding = defaultTooltipProps.padding,
    rx = defaultTooltipProps.rx,
    ry = defaultTooltipProps.ry,
    // organization of items within the container
    itemSize = defaultTooltipProps.itemSize,
    itemPadding = defaultTooltipProps.itemPadding,
    horizontal = defaultTooltipProps.horizontal,
    firstOffset = defaultTooltipProps.firstOffset,
    // title and items
    title,
    titleStyle,
    titleFormat,
    r = defaultTooltipProps.r,
    symbol,
    symbolStyle,
    labelStyle,
    labelOffset = defaultTooltipProps.labelOffset,
    labelFormat = guessLabel,
    //
    className,
    style,
    setRole = true,
    children,
}: AxisTooltipProps) => {
    const { data: tooltip } = useTooltip()
    const container = useDimensions()
    const data = tooltip.data ?? []
    const n = labelFormat === null ? 0 : data.length
    title = title ?? (titleFormat ? titleFormat(tooltip) : tooltip.title)
    const sizeMultiplier = horizontal ? [n + (title ? 1 : 0), 1] : [1, n + (title ? 1 : 0)]
    size = size ?? [
        itemSize[X] * sizeMultiplier[X] + firstOffset[X] + padding[LEFT] + padding[RIGHT],
        itemSize[Y] * sizeMultiplier[Y] + firstOffset[Y] + padding[TOP] + padding[BOTTOM],
    ]
    const { x, y } = useView({ position, size, anchor })

    const tooltipPosition: NumericPositionSpec = [x + (tooltip.x ?? 0), y + (tooltip.y ?? 0)]
    if (variant === 'top') {
        tooltipPosition[Y] = y
    } else if (variant === 'right') {
        tooltipPosition[X] = x + container.size[X]
    } else if (variant === 'bottom') {
        tooltipPosition[Y] = y + container.size[Y]
    } else if (variant === 'left') {
        tooltipPosition[X] = x
    }

    return (
        <BaseTooltip
            variant={variant}
            position={[tooltipPosition[X], tooltipPosition[Y]]}
            size={size}
            padding={padding}
            data={data}
            title={title}
            rx={rx}
            ry={ry}
            horizontal={horizontal}
            firstOffset={firstOffset}
            itemSize={itemSize}
            itemPadding={itemPadding}
            titleStyle={titleStyle}
            labelFormat={labelFormat}
            r={r}
            symbol={symbol}
            symbolStyle={symbolStyle}
            labelStyle={labelStyle}
            labelOffset={labelOffset}
            className={className}
            style={style}
            setRole={setRole}
        >
            {children}
        </BaseTooltip>
    )
}

export const AxisTooltip = (props: AxisTooltipProps) => (
    <UnthemedAxisTooltip {...useThemedProps(props, 'AxisTooltip')} />
)
