import { useContainer } from '../views'
import { useThemedProps } from '../themes'
import { addPositions, getAnchoredOrigin, NumericPositionSpec } from '../general'
import { defaultTooltipProps } from './defaults'
import { useTooltip } from './contexts'
import { exitsParent, flipPositionAnchor, guessLabel } from './utils'
import { TooltipProps } from './types'
import { BaseTooltip } from './BaseTooltip'
import { getSizeEstimate } from '../legends/utils'
import { useMemo } from 'react'

const UnthemedTooltip = ({
    // layout of container
    offset = defaultTooltipProps.offset,
    size,
    anchor = defaultTooltipProps.anchor,
    padding = defaultTooltipProps.padding,
    rx = defaultTooltipProps.rx,
    ry = defaultTooltipProps.ry,
    maxOverhang = defaultTooltipProps.maxOverhang,
    // organization of items within the container
    itemSize = defaultTooltipProps.itemSize,
    itemPadding = defaultTooltipProps.itemPadding,
    itemStyle,
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
    labelDistance = defaultTooltipProps.labelDistance,
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
    const hasTitle = title !== '' && title !== undefined
    const tooltipSize = useMemo(
        () => size ?? getSizeEstimate(padding, itemSize, n, firstOffset, hasTitle, false),
        [size, padding, itemSize, n, firstOffset, hasTitle]
    )
    const { x, y, dimensions } = useContainer({
        position: offset,
        positionUnits: 'absolute',
        size: tooltipSize,
        sizeUnits: 'absolute',
        anchor,
    })
    // in cases when the tooltip would exit the parent container, adjust position and anchor
    const tooltipPosition: NumericPositionSpec = [tooltip.x ?? 0, tooltip.y ?? 0]
    const flip = exitsParent(
        addPositions([x, y], tooltipPosition),
        tooltipSize,
        dimensions.size,
        maxOverhang
    )
    const { flippedPosition, flippedAnchor } = flipPositionAnchor(offset, anchor, flip)
    const originPosition = getAnchoredOrigin(flippedPosition, tooltipSize, flippedAnchor)

    return (
        <BaseTooltip
            variant={horizontal ? 'bottom' : 'right'}
            position={addPositions(originPosition, tooltipPosition)}
            size={tooltipSize}
            padding={padding}
            data={data}
            title={title}
            rx={rx}
            ry={ry}
            horizontal={horizontal}
            firstOffset={firstOffset}
            itemSize={itemSize}
            itemPadding={itemPadding}
            itemStyle={itemStyle}
            titleStyle={titleStyle}
            labelFormat={labelFormat}
            r={r}
            symbol={symbol}
            symbolStyle={symbolStyle}
            labelStyle={labelStyle}
            labelDistance={labelDistance}
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
