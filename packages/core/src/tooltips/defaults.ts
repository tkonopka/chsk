import { TooltipItemListThemedProps, TooltipItemThemedProps, TooltipThemedProps } from './types'

export const defaultTooltipProps: TooltipThemedProps = {
    horizontal: false,
    itemSize: [100, 32],
    itemPadding: [8, 8, 8, 8],
    firstOffset: [0, 0],
    r: 8,
    labelOffset: 6,
    rx: 0,
    ry: 0,
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
