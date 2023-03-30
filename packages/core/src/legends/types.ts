import { ReactNode, FC } from 'react'
import {
    CssProps,
    NumericPositionSpec,
    FourSideSizeSpec,
    SizeSpec,
    SideVariant,
    SvgElementProps,
    TranslateSpec,
    ItemListProps,
} from '../general'
import { ContainerProps, ViewProps } from '../views'
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

export interface LegendTitleProps extends SvgElementProps {
    /** variant */
    variant?: SideVariant
    /** position of symbol */
    position: NumericPositionSpec
    /** size of a single legend item */
    size?: SizeSpec
    /** padding for a single legend item */
    padding?: FourSideSizeSpec
    /** additional translation */
    translate?: TranslateSpec
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
    /** symbol position (overrides auto-calculation based on position and variant) */
    symbolPosition?: NumericPositionSpec
    /** style for symbol */
    symbolStyle?: CssProps
    /** text label */
    label: string
    /** label position (overrides auto-calculation based on position and variant) */
    labelPosition?: NumericPositionSpec
    /** style for text label */
    labelStyle?: CssProps
    /** offset of label from symbol */
    labelOffset?: number
    /** color */
    color?: string | number
}

export interface LegendItemThemedProps
    extends Pick<LegendItemProps, 'size' | 'padding' | 'translate' | 'r' | 'labelOffset'> {
    size: SizeSpec
    padding: FourSideSizeSpec
    translate: NumericPositionSpec
    r: number
    labelOffset: number
    interactive: boolean
}

export interface LegendColorScaleProps extends Omit<LegendTitleProps, 'variant'>, AxisTicksProps {
    /** number, or location, of ticks */
    ticks?: number[] | number
    /** offset of color axis from default position */
    offset?: number
    /** identifier for gradient */
    gradientId?: string
    /** horizontal orientation */
    horizontal?: boolean
}

export interface LegendColorScaleThemedProps
    extends Pick<
        LegendColorScaleProps,
        'ticks' | 'tickSize' | 'tickStyle' | 'labelAngle' | 'labelOffset'
    > {
    padding: FourSideSizeSpec
    ticks: number | number[]
}

export interface LegendProps
    extends SvgElementProps,
        ContainerProps,
        ItemListProps,
        Pick<ViewProps, 'children'>,
        Pick<
            LegendItemProps,
            'r' | 'symbol' | 'symbolStyle' | 'labelStyle' | 'labelOffset' | 'interactive'
        > {
    /** legend type */
    variant?: 'list' | 'color' | 'size'
    /** offset position (absolute values) */
    translate?: NumericPositionSpec
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
    translate: NumericPositionSpec
    padding: FourSideSizeSpec
    rx: number
    ry: number
    itemSize: SizeSpec
    itemPadding: FourSideSizeSpec
    horizontal: boolean
    firstOffset: NumericPositionSpec
    scaleSize: SizeSpec
    r: number
    labelOffset: number
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
    labelOffset: number
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
    labelOffset: number
    ticks: number | number[]
}
