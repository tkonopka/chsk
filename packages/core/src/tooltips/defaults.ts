import { TooltipItemListThemedProps, TooltipItemThemedProps, TooltipThemedProps } from './types'

export const defaultTooltipProps: TooltipThemedProps = {
    position: [0, -10],
    anchor: [0.5, 1],
    horizontal: false,
    itemSize: [100, 32],
    itemPadding: [8, 8, 8, 8],
    firstOffset: [0, 0],
    r: 8,
    labelOffset: 6,
    rx: 2,
    ry: 2,
}

export const defaultTooltipItemListProps: TooltipItemListThemedProps = {
    horizontal: false,
    itemSize: [100, 32],
    itemPadding: [8, 8, 8, 8],
    r: 8,
    labelOffset: 6,
}

export const defaultTooltipItemProps: TooltipItemThemedProps = {
    size: [100, 32],
    padding: [8, 8, 8, 8],
    translate: [0, 0],
    r: 8,
    labelOffset: 6,
}
