import { ReactNode, FC } from 'react'
import {
    CssProps,
    NumericPositionSpec,
    FourSideSizeSpec,
    SizeSpec,
    SvgElementProps,
    TranslateSpec,
} from '../general'
import { ContainerProps } from '../views'
import { SymbolProps } from '../shapes'
import { AxisTicksProps, SideType } from '../axes'

export interface LegendTitleProps extends SvgElementProps {
    /** variant */
    variant?: SideType
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

export interface LegendItemProps extends Omit<LegendTitleProps, 'variant'> {
    /** variant */
    variant?: SideType
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
    /** color index (internal use) */
    colorIndex?: number
    /** interactivity */
    interactive?: boolean
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
    extends Pick<LegendColorScaleProps, 'ticks' | 'tickSize' | 'labelRotate' | 'labelOffset'> {
    ticks: number | number[]
}

export interface LegendProps
    extends SvgElementProps,
        ContainerProps,
        Pick<
            LegendItemProps,
            'r' | 'symbol' | 'symbolStyle' | 'labelStyle' | 'labelOffset' | 'interactive'
        > {
    /** legend type */
    variant?: 'list' | 'color' | 'size'
    /** size of a single legend item */
    itemSize?: SizeSpec
    /** padding for a single legend item */
    itemPadding?: FourSideSizeSpec
    /** legend title */
    title?: string
    /** style for legend title */
    titleStyle?: CssProps
    /** arrange the legend items horizontally */
    horizontal?: boolean
    /** offset/translate first item relative to default position */
    firstOffset?: NumericPositionSpec
    /** size for color gradient scale */
    scaleSize?: SizeSpec
    /** settings for size scale */
    sizeTicks?: number | number[]
}

export interface LegendThemedProps
    extends Pick<
        LegendProps,
        'itemSize' | 'itemPadding' | 'horizontal' | 'firstOffset' | 'scaleSize'
    > {
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
    extends Pick<LegendSizeScaleProps, 'itemSize' | 'itemPadding' | 'horizontal' | 'interactive'> {
    itemSize: SizeSpec
    itemPadding: FourSideSizeSpec
    horizontal: boolean
    labelOffset: number
    ticks: number | number[]
}
