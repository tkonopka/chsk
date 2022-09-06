import { LegendItemThemedProps, LegendThemedProps } from './types'

export const defaultLegendProps: LegendThemedProps = {
    horizontal: false,
    align: 'left' as const,
    itemSize: [60, 20],
    itemPadding: [4, 4, 4, 4],
    firstOffset: [0, 0],
    r: 8,
    labelOffset: [14, 0],
    scaleSize: [8, 80],
}

export const defaultLegendItemProps: LegendItemThemedProps = {
    size: [60, 20],
    padding: [4, 4, 4, 4],
    translate: [0, 0],
    align: 'left' as const,
    r: 8,
    labelOffset: [14, 0],
    interactive: true,
}
