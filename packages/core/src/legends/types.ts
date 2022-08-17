import { CssProps, NumericPositionSpec, SizeSpec, SvgElementProps } from '../general'
import { ContainerProps } from '../views'
import { SymbolFunction } from '../shapes'

export interface LegendItemProps extends SvgElementProps {
    /** position of symbol */
    position: NumericPositionSpec
    /** size of symbol */
    r?: number
    /** symbol function */
    symbol?: SymbolFunction
    /** style for symbol */
    symbolStyle?: CssProps
    /** text label */
    label?: string
    /** style for text label */
    labelStyle?: CssProps
    /** offset of label from symbol */
    labelOffset: NumericPositionSpec
    /** color index (internal use) */
    colorIndex?: number
}

export interface LegendProps
    extends ContainerProps,
        Omit<LegendItemProps, 'position' | 'label' | 'colorIndex'> {
    /** size of a single legend item */
    itemSize?: SizeSpec
    /** legend title */
    title?: string
    /** style for legend title */
    titleStyle?: CssProps
    /** arrange the legend items horizontally */
    horizontal?: boolean
    /** offset/translate first item relative to default position */
    firstOffset?: NumericPositionSpec
}
