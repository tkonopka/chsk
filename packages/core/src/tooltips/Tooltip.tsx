import { useView } from '../views'
import { useThemedProps } from '../themes'
import {
    addPositions,
    BOTTOM,
    getAnchoredOrigin,
    LEFT,
    NumericPositionSpec,
    RIGHT,
    TOP,
    X,
    Y,
} from '../general'
import { defaultTooltipProps } from './defaults'
import { useTooltip } from './contexts'
import { exitsParent, flipPositionAnchor, guessLabel } from './utils'
import { TooltipProps } from './types'
import { BaseTooltip } from './BaseTooltip'

const UnthemedTooltip = ({
    // layout of container
    translate = defaultTooltipProps.translate,
    size,
    anchor = defaultTooltipProps.anchor,
    padding = defaultTooltipProps.padding,
    rx = defaultTooltipProps.rx,
    ry = defaultTooltipProps.ry,
    maxOverhang = defaultTooltipProps.maxOverhang,
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
}: TooltipProps) => {
    const { data: tooltip } = useTooltip()
    const data = tooltip.data ?? []
    const n = labelFormat === null ? 0 : data.length
    title =
        title ?? (titleFormat === null ? '' : titleFormat ? titleFormat(tooltip) : tooltip.title)
    const sizeMultiplier = horizontal ? [n + (title ? 1 : 0), 1] : [1, n + (title ? 1 : 0)]
    size = size ?? [
        itemSize[X] * sizeMultiplier[X] + firstOffset[X] + padding[LEFT] + padding[RIGHT],
        itemSize[Y] * sizeMultiplier[Y] + firstOffset[Y] + padding[TOP] + padding[BOTTOM],
    ]
    const { x, y, dimensions } = useView({ position: translate, size, anchor })

    // in cases when the tooltip would exit the parent container, adjust position and anchor
    const tooltipPosition: NumericPositionSpec = [tooltip.x ?? 0, tooltip.y ?? 0]
    const flip = exitsParent(
        addPositions([x, y], tooltipPosition),
        size,
        dimensions.size,
        maxOverhang
    )
    const { flippedPosition, flippedAnchor } = flipPositionAnchor(translate, anchor, flip)
    const originPosition = getAnchoredOrigin(flippedPosition, size, flippedAnchor)

    return (
        <BaseTooltip
            variant={horizontal ? 'bottom' : 'right'}
            position={addPositions(originPosition, tooltipPosition)}
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

export const Tooltip = (props: TooltipProps) => (
    <UnthemedTooltip {...useThemedProps(props, 'Tooltip')} />
)
