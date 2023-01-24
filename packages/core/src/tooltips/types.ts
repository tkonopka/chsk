import { NumericPositionSpec, FourSideSizeSpec, SizeSpec } from '../general'
import { SideType } from '../axes'
import { LegendProps, LegendTitleProps, LegendItemProps } from '../legends'
import { WithId } from '../views'

export type TooltipTitleProps = LegendTitleProps

export type TooltipItemProps = LegendItemProps

export interface TooltipItemThemedProps
    extends Pick<TooltipItemProps, 'size' | 'padding' | 'translate' | 'r' | 'labelOffset'> {
    size: SizeSpec
    padding: FourSideSizeSpec
    translate: NumericPositionSpec
    r: number
    labelOffset: number
}

export interface TooltipProps
    extends Omit<LegendProps, 'scaleSize' | 'sizeTicks' | 'variant' | 'interactive'> {
    /** tooltip type */
    variant?: 'list'
}

export interface TooltipThemedProps
    extends Pick<TooltipProps, 'itemSize' | 'itemPadding' | 'horizontal' | 'firstOffset'> {
    itemSize: SizeSpec
    itemPadding: FourSideSizeSpec
    horizontal: boolean
    firstOffset: NumericPositionSpec
    r: number
    labelOffset: number
}

export interface TooltipItemListProps
    extends Omit<
        TooltipProps,
        'variant' | 'position' | 'title' | 'titleStyle' | 'firstOffset' | 'r'
    > {
    /** variant */
    variant: SideType
    /** array of items to display (for categorical keys) */
    items?: string[]
    /** array of labels to display next to symbols */
    labels?: string[]
    /** array of symbol sizes */
    r?: number[]
    /** position */
    position: NumericPositionSpec
}

export interface TooltipItemListThemedProps
    extends Pick<TooltipItemListProps, 'itemSize' | 'itemPadding' | 'horizontal'> {
    itemSize: SizeSpec
    itemPadding: FourSideSizeSpec
    horizontal: boolean
    r: number
    labelOffset: number
}

/** Context */

export type TooltipDataItem = WithId & {
    key: string
    label: string
}

export type TooltipContextProps = {
    /** x coordinate */
    x?: number
    /** y coordinate */
    y?: number
    /** content of tooltip **/
    data?: TooltipDataItem[]
}
