import { ReactNode, FC } from 'react'
import { CssProps, NumericPositionSpec, SideSizeSpec, SizeSpec, SvgElementProps } from '../general'
import { ContainerProps } from '../views'
import { SymbolProps } from '../shapes'

export interface LegendTitleProps extends SvgElementProps {
    /** position of symbol */
    position: NumericPositionSpec
    /** size of a single legend item */
    size?: SizeSpec
    /** padding for a single legend item */
    padding?: SideSizeSpec
    /** alignment of symbol and text */
    align?: 'left' | 'middle' | 'right'
    /** additional translation */
    translate?: NumericPositionSpec
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

export interface LegendProps
    extends SvgElementProps,
        ContainerProps,
        Pick<
            LegendItemProps,
            'align' | 'r' | 'symbol' | 'symbolStyle' | 'labelStyle' | 'labelOffset'
        > {
    /** size of a single legend item */
    itemSize?: SizeSpec
    /** padding for a single legend item */
    itemPadding?: SideSizeSpec
    /** legend title */
    title?: string
    /** style for legend title */
    titleStyle?: CssProps
    /** arrange the legend items horizontally */
    horizontal?: boolean
    /** offset/translate first item relative to default position */
    firstOffset?: NumericPositionSpec
}
