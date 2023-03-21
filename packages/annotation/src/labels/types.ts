import {
    SvgElementVariantProps,
    CssProps,
    ContainerProps,
    AlignSpec,
    SideVariant,
    FourSideSizeSpec,
    PositionSpec,
    SizeSpec,
    TranslateSpec,
    TypographyProps,
    AngleUnit,
} from '@chsk/core'
import { ReactNode } from 'react'

interface BoxedTextProps {
    /** expansion of box size */
    expansion?: FourSideSizeSpec
    /** horizontal radius of box */
    rx?: number
    /** vertical radius of box */
    ry?: number
    /** style for box */
    boxStyle?: CssProps
    /** style for text */
    textStyle?: CssProps
    /** children */
    children?: ReactNode
}

export interface BoxedLabelProps extends SvgElementVariantProps, ContainerProps, BoxedTextProps {
    /** variant */
    variant?: 'boxed-label' | string
    /** position of label anchor point */
    position: PositionSpec
    /** size of box in absolute units */
    size: SizeSpec
    /** additional translation */
    translate?: TranslateSpec
    /** position of anchor point relative to box size */
    anchor?: AlignSpec
    /** angle */
    angle?: number
    /** angle unit */
    angleUnit?: AngleUnit
}

export interface BoxedTitleProps extends SvgElementVariantProps, BoxedTextProps {
    /** variant, side of the chart */
    variant: SideVariant
    /** absolute size of box in direction orthogonal to the axis */
    size?: number
    /** distance from axis */
    offset?: number
}

export interface ParagraphProps extends Omit<TypographyProps, 'variant'> {
    /** size of individual lines (width, height) */
    size: SizeSpec
    /** vertical alignment */
    align?: number
    /** separator string used to split text into lines */
    separator?: string
    /** base letter width profiles */
    letterBaseWidths?: 'serif' | 'sans'
    /** letter widths */
    letterWidths?: Record<string, number>
}
