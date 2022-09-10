import {
    LegendColorScaleThemedProps,
    LegendItemListThemedProps,
    LegendItemThemedProps,
    LegendSizeScaleThemedProps,
    LegendThemedProps,
} from './types'

export const defaultLegendProps: LegendThemedProps = {
    horizontal: false,
    itemSize: [60, 20],
    itemPadding: [4, 4, 4, 4],
    firstOffset: [0, 0],
    r: 8,
    labelOffset: 6,
    scaleSize: [8, 80],
    interactive: true,
}

export const defaultLegendItemListProps: LegendItemListThemedProps = {
    horizontal: false,
    itemSize: [60, 20],
    itemPadding: [4, 4, 4, 4],
    r: 8,
    labelOffset: 6,
    interactive: true,
}

export const defaultLegendItemProps: LegendItemThemedProps = {
    size: [60, 20],
    padding: [4, 4, 4, 4],
    translate: [0, 0],
    r: 8,
    labelOffset: 6,
    interactive: true,
}

export const defaultLegendColorScaleProps: LegendColorScaleThemedProps = {
    ticks: 4,
}

export const defaultLegendSizeScaleProps: LegendSizeScaleThemedProps = {
    horizontal: false,
    itemSize: [60, 20],
    itemPadding: [4, 4, 4, 4],
    ticks: 3,
    labelOffset: 6,
}
