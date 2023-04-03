import {
    SvgElementVariantProps,
    CssProps,
    ContainerProps,
    SideVariant,
    FourSideSizeSpec,
    PositionSpec,
    SizeSpec,
    TypographyProps,
    AngleUnit,
    SvgElementProps,
    LineProps,
    PositionUnits,
    TwoSideSizeSpec,
    NumericPositionSpec,
} from '@chsk/core'
import { ReactNode } from 'react'

/** labels with boxes */

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
    /** size of box in absolute units */
    size: SizeSpec
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

/** labels with lines */

export interface LineLabelProps
    extends SvgElementProps,
        Pick<LineProps, 'markerStart' | 'markerEnd'> {
    /** start position */
    start: PositionSpec
    /** end position */
    end: PositionSpec
    /** units for start and end positions */
    units?: PositionUnits
    /** expansion of interval (multiples of bandwidth) */
    expansion?: TwoSideSizeSpec
    /** alignment for text label in [0, 1] */
    align?: number
    /** translation for text label */
    offset?: NumericPositionSpec
    /** rotation of text label */
    angle?: number
    /** padding for text label */
    padding?: SizeSpec
    /** styles for line */
    lineStyle?: CssProps
    /** styles for text */
    textStyle?: CssProps
    /** children components */
    children?: ReactNode
}

export interface BracketLabelProps extends Omit<LineLabelProps, 'markerStart' | 'markerEnd'> {
    /** left- or right- handed ticks */
    variant?: 'right' | 'left'
    /** size of marker at the end of line */
    tickSize?: number
}

export interface BraceLabelProps extends BracketLabelProps {
    /** smoothness of brace edges */
    braceR?: number
}

/** Miscellaneous text */

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

export interface FlowTypographyProps extends TypographyProps {
    /** duration of animation (seconds) */
    duration?: number
    /** animation rate (seconds per character) */
    rate?: number
}
