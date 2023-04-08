import { ReactNode, FC } from 'react'
import {
    CssProps,
    NumericPositionSpec,
    FourSideSizeSpec,
    SizeSpec,
    SideVariant,
    SvgElementProps,
    ItemListProps,
    ContainerProps,
} from '../general'
import { ViewProps } from '../views'
import { SymbolProps } from '../shapes'
import { AxisTicksProps } from '../axes'

export interface LinearGradientProps {
    /** identifier for the gradient */
    id: string
    /** start position */
    start: NumericPositionSpec
    /** end position */
    end: NumericPositionSpec
    /** color stops */
    stops: string[]
    /** offsets for color stops */
    offsets?: number[]
}

export interface LegendTitleProps
    extends SvgElementProps,
        Pick<ContainerProps, 'position' | 'size' | 'padding' | 'offset'> {
    /** variant */
    variant?: SideVariant
    /** position */
    position?: NumericPositionSpec
    /** children components */
    children?: ReactNode
}

export type WithInteractive = {
    /** activate interactive features */
    interactive?: boolean
}

export interface LegendItemProps extends LegendTitleProps, WithInteractive {
    /** key */
    item: string
    /** size of symbol */
    r?: number
    /** symbol function */
    symbol?: FC<SymbolProps>
    /** symbol position (overrides auto-calculation based on item index and legend variant) */
    symbolPosition?: NumericPositionSpec
    /** style for symbol */
    symbolStyle?: CssProps
    /** text label */
    label: string
    /** label position (overrides auto-calculation based on item index and legend variant) */
    labelPosition?: NumericPositionSpec
    /** style for text label */
    labelStyle?: CssProps
    /** distance from symbol to label */
    labelDistance?: number
    /** color */
    color?: string | number
}

export interface LegendItemThemedProps
    extends Pick<LegendItemProps, 'size' | 'padding' | 'offset' | 'r' | 'labelDistance'> {
    size: SizeSpec
    padding: FourSideSizeSpec
    offset: NumericPositionSpec
    r: number
    labelDistance: number
    interactive: boolean
}

export interface LegendColorScaleProps extends Omit<LegendTitleProps, 'variant'>, AxisTicksProps {
    /** number, or location, of ticks */
    ticks?: number[] | number
    /** distance of axis from gradient */
    axisDistance?: number
    /** identifier for gradient */
    gradientId?: string
    /** horizontal orientation */
    horizontal?: boolean
}

export interface LegendColorScaleThemedProps
    extends Pick<
        LegendColorScaleProps,
        'ticks' | 'tickSize' | 'tickStyle' | 'labelAngle' | 'labelDistance'
    > {
    padding: FourSideSizeSpec
    ticks: number | number[]
    axisOffset: number
}

export interface LegendProps
    extends SvgElementProps,
        ContainerProps,
        ItemListProps,
        Pick<ViewProps, 'children'>,
        Pick<
            LegendItemProps,
            'r' | 'symbol' | 'symbolStyle' | 'labelStyle' | 'labelDistance' | 'interactive'
        > {
    /** legend type */
    variant?: 'list' | 'color' | 'size'
    /** horizontal corner radius */
    rx?: number
    /** vertical corner radius */
    ry?: number
    /** size for color gradient scale */
    scaleSize?: SizeSpec
    /** settings for size scale */
    sizeTicks?: number | number[]
}

export interface LegendThemedProps
    extends Pick<LegendProps, 'padding' | 'scaleSize'>,
        Pick<ItemListProps, 'itemSize' | 'itemPadding' | 'horizontal' | 'firstOffset'> {
    offset: NumericPositionSpec
    padding: FourSideSizeSpec
    rx: number
    ry: number
    itemSize: SizeSpec
    itemPadding: FourSideSizeSpec
    horizontal: boolean
    firstOffset: NumericPositionSpec
    scaleSize: SizeSpec
    r: number
    labelDistance: number
    interactive: boolean
}

export interface LegendItemListProps
    extends Omit<
        LegendProps,
        'variant' | 'position' | 'title' | 'titleStyle' | 'firstOffset' | 'r'
    > {
    /** variant */
    variant: SideVariant
    /** array of items to display (for categorical keys) */
    keys?: string[]
    /** array of labels to display next to symbols */
    labels?: string[]
    /** array of colors */
    colors?: Array<string | number | undefined>
    /** array of symbol sizes */
    r?: number | number[]
    /** position */
    position: NumericPositionSpec
}

export interface LegendItemListThemedProps
    extends Pick<LegendItemListProps, 'itemSize' | 'itemPadding' | 'horizontal' | 'interactive'> {
    itemSize: SizeSpec
    itemPadding: FourSideSizeSpec
    horizontal: boolean
    r: number
    labelDistance: number
}

export interface LegendSizeScaleProps
    extends Omit<LegendTitleProps, 'variant' | 'size' | 'padding'>,
        Omit<AxisTicksProps, 'tickSize' | 'tickStyle'>,
        Pick<
            LegendItemListProps,
            | 'itemSize'
            | 'itemPadding'
            | 'itemStyle'
            | 'horizontal'
            | 'interactive'
            | 'labelStyle'
            | 'symbol'
            | 'symbolStyle'
        > {
    /** ticks */
    ticks?: number | number[]
    /** array of items to display (for categorical keys) */
    items?: string[]
    /** array of labels to display next to symbols */
    labels?: string[]
    /** array of symbol sizes */
    sizes?: number[]
}

export interface LegendSizeScaleThemedProps
    extends Pick<
        LegendSizeScaleProps,
        'itemSize' | 'itemPadding' | 'itemStyle' | 'horizontal' | 'interactive'
    > {
    itemSize: SizeSpec
    itemPadding: FourSideSizeSpec
    horizontal: boolean
    labelDistance: number
    ticks: number | number[]
}
