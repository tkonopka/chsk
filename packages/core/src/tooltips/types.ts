import {
    LegendProps,
    LegendTitleProps,
    LegendItemProps,
    LegendItemThemedProps,
    LegendThemedProps,
    LegendItemListProps,
    LegendItemListThemedProps,
} from '../legends'
import { WithId } from '../views'

export type TooltipTitleProps = LegendTitleProps

export type TooltipItemProps = Omit<LegendItemProps, 'interactive'>

export type TooltipItemThemedProps = Omit<LegendItemThemedProps, 'interactive'>

export interface TooltipProps extends Omit<LegendProps, 'scaleSize' | 'sizeTicks' | 'interactive'> {
    /** tooltip type */
    variant?: 'list'
}

export type TooltipThemedProps = Omit<LegendThemedProps, 'interactive' | 'scaleSize'>

export type TooltipItemListProps = Omit<LegendItemListProps, 'interactive'>

export type TooltipItemListThemedProps = Omit<LegendItemListThemedProps, 'interactive'>

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
