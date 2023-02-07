import {
    LegendProps,
    LegendTitleProps,
    LegendItemProps,
    LegendItemThemedProps,
    LegendThemedProps,
    LegendItemListProps,
    LegendItemListThemedProps,
} from '../legends'
import { NumericPositionSpec, AnchorSpec, WithId } from '../general'

export type TooltipTitleProps = LegendTitleProps

export type TooltipItemProps = Omit<LegendItemProps, 'interactive'>

export type TooltipItemThemedProps = Omit<LegendItemThemedProps, 'interactive'>

export interface TooltipProps extends Omit<LegendProps, 'scaleSize' | 'sizeTicks' | 'interactive'> {
    /** tooltip type */
    variant?: 'list'
    /** horizontal corner radius */
    rx?: number
    /** vertical corner radius */
    ry?: number
    /** construction of title */
    titleFormat?: (d: TooltipData) => string | undefined
    /** construction of label */
    labelFormat?: (d: TooltipDataItem) => string
}

export interface TooltipThemedProps extends Omit<LegendThemedProps, 'interactive' | 'scaleSize'> {
    position: NumericPositionSpec
    anchor: AnchorSpec
    rx: number
    ry: number
}

export type TooltipItemListProps = Omit<LegendItemListProps, 'interactive'>

export type TooltipItemListThemedProps = Omit<LegendItemListThemedProps, 'interactive'>

/** Context */

export type TooltipDataItem = WithId & {
    key?: string
    label?: string
}

export type TooltipData = {
    /** x coordinate */
    x?: number
    /** y coordinate */
    y?: number
    /** coordinates for the event that triggers the tooltip */
    eventPosition?: NumericPositionSpec
    /** title */
    title?: string
    /** content of tooltip **/
    data?: TooltipDataItem[]
}

export type TooltipProviderValue = {
    data: TooltipData
    setData: (d: TooltipData) => unknown
}
