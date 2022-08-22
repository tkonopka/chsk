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

export interface LegendTitleProps extends SvgElementProps {
    /** position of symbol */
    position: NumericPositionSpec
    /** size of a single legend item */
    size?: SizeSpec
    /** padding for a single legend item */
    padding?: FourSideSizeSpec
    /** alignment of symbol and text */
    align?: 'left' | 'middle' | 'right'
    /** additional translation */
    translate?: TranslateSpec
    /** children components */
    children?: ReactNode
}

export interface LegendItemProps extends LegendTitleProps {
    /** size of symbol */
    r?: number
    /** symbol function */
    symbol?: FC<SymbolProps>
    /** style for symbol */
    symbolStyle?: CssProps
    /** text label */
    label?: string
    /** style for text label */
    labelStyle?: CssProps
    /** offset of label from symbol */
    labelOffset?: NumericPositionSpec
    /** color index (internal use) */
    colorIndex?: number
}

export interface LegendColorScaleProps extends LegendTitleProps {
    /** size of the color scale */
    size?: SizeSpec
    /** horizontal gradient */
    horizontal?: boolean
    /** number, or location, of ticks */
    ticks?: number[] | number
}

export interface LegendProps
    extends SvgElementProps,
        ContainerProps,
        Pick<
            LegendItemProps,
            'align' | 'r' | 'symbol' | 'symbolStyle' | 'labelStyle' | 'labelOffset'
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
    /** size for scale */
    scaleSize?: SizeSpec
}
