import {
    LegendProps,
    LegendTitleProps,
    LegendItemProps,
    LegendItemThemedProps,
    LegendThemedProps,
    LegendItemListProps,
    LegendItemListThemedProps,
} from '../legends'
import { NumericPositionSpec, AnchorSpec, WithId, FourSideSizeSpec, SideVariant } from '../general'

export type TooltipTitleProps = LegendTitleProps

export type TooltipItemProps = Omit<LegendItemProps, 'interactive'>

export type TooltipItemThemedProps = Omit<LegendItemThemedProps, 'interactive'>

export interface TooltipProps
    extends Omit<
        LegendProps,
        | 'position'
        | 'positionUnits'
        | 'size'
        | 'sizeUnits'
        | 'scaleSize'
        | 'sizeTicks'
        | 'interactive'
    > {
    /** tooltip type */
    variant?: 'list'
    /** size */
    size?: NumericPositionSpec
    /** construction of title */
    titleFormat?: null | ((d: TooltipData) => string | undefined)
    /** construction of label */
    labelFormat?: null | ((d: TooltipDataItem) => string)
    /** extent tooltip can exit its reference region */
    maxOverhang?: FourSideSizeSpec
}

export interface TooltipThemedProps extends Omit<LegendThemedProps, 'interactive' | 'scaleSize'> {
    translate: NumericPositionSpec
    padding: FourSideSizeSpec
    anchor: AnchorSpec
    rx: number
    ry: number
    maxOverhang: FourSideSizeSpec
}

export interface AxisTooltipProps extends Omit<TooltipProps, 'variant'> {
    /** variant */
    variant: SideVariant
}

export interface AxisTooltipThemedProps extends TooltipThemedProps {
    variant: SideVariant
}

export type TooltipItemListProps = Omit<LegendItemListProps, 'interactive'> & {
    /** array of ids */
    ids?: string[]
}

export type TooltipItemListThemedProps = Omit<LegendItemListThemedProps, 'interactive'>

/** Context */

export type TooltipDataItem = WithId & {
    key?: string
    label?: string
    color?: string | number
    data?: unknown
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
