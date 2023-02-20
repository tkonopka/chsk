import { TooltipItemListThemedProps, TooltipItemThemedProps, TooltipThemedProps } from './types'

export const defaultTooltipProps: TooltipThemedProps = {
    translate: [0, -16],
    padding: [4, 0, 4, 0],
    anchor: [0.5, 1],
    rx: 2,
    ry: 2,
    maxOverhang: [16, 16, 16, 16],
    horizontal: false,
    itemSize: [100, 26],
    itemPadding: [4, 8, 4, 8],
    firstOffset: [0, 0],
    r: 8,
    labelOffset: 4,
}

export const defaultTooltipItemListProps: TooltipItemListThemedProps = {
    horizontal: false,
    itemSize: [100, 26],
    itemPadding: [4, 8, 4, 8],
    r: 8,
    labelOffset: 4,
}

export const defaultTooltipItemProps: TooltipItemThemedProps = {
    size: [100, 26],
    padding: [4, 8, 4, 8],
    translate: [0, 0],
    r: 8,
    labelOffset: 4,
}
