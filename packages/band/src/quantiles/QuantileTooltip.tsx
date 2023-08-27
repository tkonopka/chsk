import {
    LEFT,
    Square,
    TOP,
    useTooltip,
    X,
    Y,
    NumericPositionSpec,
    Tooltip,
    defaultTooltipProps,
    TooltipTitle,
    RIGHT,
    BOTTOM,
    TooltipDataItem,
} from '@chsk/core'
import { QuantileProcessedSummary, QuantileTooltipProps } from './types'
import { isQuantileProcessedSummary } from './predicates'
import { QuantileTooltipItem } from './QuantileTooltipItem'

export const QuantileTooltip = ({
    // layout of container
    offset = defaultTooltipProps.offset,
    size,
    anchor = defaultTooltipProps.anchor,
    padding = defaultTooltipProps.padding,
    rx = defaultTooltipProps.rx,
    ry = defaultTooltipProps.ry,
    maxOverhang = defaultTooltipProps.maxOverhang,
    // organization of items (title and labels)
    itemSize = defaultTooltipProps.itemSize,
    itemPadding = defaultTooltipProps.itemPadding,
    firstOffset = defaultTooltipProps.firstOffset,
    title,
    titleStyle,
    titleFormat,
    r = defaultTooltipProps.r,
    symbol = Square,
    symbolStyle,
    labelStyle,
    labelDistance = defaultTooltipProps.labelDistance,
    labelFormat,
    // organization of information table
    valueFormat = (x: number) => String(x),
    cellSize = [40, 20],
    cellPadding = 20,
    cellStyle,
    //
    className,
    style,
    setRole = true,
}: QuantileTooltipProps) => {
    const { data: tooltip } = useTooltip()
    const tooltipData: TooltipDataItem[] = tooltip?.data ?? []
    if (!tooltipData.every(data => isQuantileProcessedSummary(data))) return null

    title =
        title ?? (titleFormat === null ? '' : titleFormat ? titleFormat(tooltip) : tooltip.title)
    const n = tooltipData.length
    const infoSize: NumericPositionSpec = [cellSize[X] * 4 + cellPadding, cellSize[Y] * 5]
    size = size ?? [
        Math.max(itemSize[X], infoSize[X]) + padding[LEFT] + padding[RIGHT],
        itemSize[Y] * n +
            (title ? itemSize[Y] : 0) +
            infoSize[Y] * n +
            padding[TOP] +
            padding[BOTTOM],
    ]

    const titlePosition: NumericPositionSpec = [padding[LEFT], padding[TOP]]
    const itemsPosition: NumericPositionSpec = [padding[LEFT], padding[TOP]]
    const step: NumericPositionSpec = [0, itemSize[Y]]
    if (title) {
        itemsPosition[0] += step[0] + firstOffset[0]
        itemsPosition[1] += step[1] + firstOffset[1]
    }
    const infoPositions: NumericPositionSpec[] = Array(n)
        .fill(0)
        .map((_, i) => [padding[LEFT], itemsPosition[Y] + (itemSize[Y] + infoSize[Y]) * i])

    const content = tooltipData.map((data, i) => {
        const fallbackLabel = data.key ?? ''
        return (
            <QuantileTooltipItem
                key={'item-' + i}
                position={infoPositions[i]}
                data={data as QuantileProcessedSummary & TooltipDataItem} // already checked at start
                label={labelFormat ? labelFormat(data) ?? fallbackLabel : fallbackLabel}
                labelDistance={labelDistance}
                item={data.key ?? ''}
                padding={itemPadding}
                symbol={symbol}
                symbolStyle={symbolStyle}
                labelStyle={labelStyle}
                className={className}
                valueFormat={valueFormat}
                cellPadding={cellPadding}
                cellSize={cellSize}
                cellStyle={cellStyle}
            />
        )
    })
    return (
        <Tooltip
            offset={offset}
            size={size}
            padding={padding}
            anchor={anchor}
            rx={rx}
            ry={ry}
            maxOverhang={maxOverhang}
            style={style}
            setRole={setRole}
        >
            <TooltipTitle
                key={'title'}
                variant={'right'}
                position={titlePosition}
                size={itemSize}
                padding={itemPadding}
                offset={[0, r]}
                style={titleStyle}
                className={className}
            >
                {title}
            </TooltipTitle>
            {content}
        </Tooltip>
    )
}
