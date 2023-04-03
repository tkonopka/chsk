import {
    LegendColorScaleThemedProps,
    LegendItemListThemedProps,
    LegendItemThemedProps,
    LegendSizeScaleThemedProps,
    LegendThemedProps,
} from './types'

export const defaultLegendProps: LegendThemedProps = {
    offset: [0, 0],
    padding: [0, 0, 0, 0],
    rx: 0,
    ry: 0,
    horizontal: false,
    itemSize: [60, 20],
    itemPadding: [4, 4, 4, 4],
    firstOffset: [0, 0],
    r: 8,
    labelDistance: 6,
    scaleSize: [8, 80],
    interactive: true,
}

export const defaultLegendItemListProps: LegendItemListThemedProps = {
    horizontal: false,
    itemSize: [60, 20],
    itemPadding: [4, 4, 4, 4],
    r: 8,
    labelDistance: 6,
    interactive: true,
}

export const defaultLegendItemProps: LegendItemThemedProps = {
    size: [60, 20],
    padding: [4, 4, 4, 4],
    offset: [0, 0],
    r: 8,
    labelDistance: 4,
    interactive: true,
}

export const defaultLegendColorScaleProps: LegendColorScaleThemedProps = {
    padding: [4, 4, 4, 4],
    ticks: 4,
    tickSize: 5,
    axisOffset: 0,
    labelDistance: 9,
    labelAngle: 0,
}

export const defaultLegendSizeScaleProps: LegendSizeScaleThemedProps = {
    horizontal: false,
    itemSize: [60, 20],
    itemPadding: [4, 4, 4, 4],
    ticks: 3,
    labelDistance: 4,
}
