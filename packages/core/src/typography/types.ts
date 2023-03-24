import { FC, ReactNode } from 'react'
import {
    NumericPositionSpec,
    FourSideSizeSpec,
    SizeSpec,
    SvgElementVariantProps,
    AlignSpec,
    SvgElementProps,
} from '../general'

export interface TextContentProps extends Pick<SvgElementProps, 'style' | 'className'> {
    /** content */
    children?: ReactNode
}

export interface TypographyProps extends SvgElementVariantProps, TextContentProps {
    /** position (absolute coordinates) */
    position?: NumericPositionSpec
    /** variant */
    variant?: 'default' | 'title' | 'subtitle' | 'axisLabel' | 'tickLabel' | string
    /** rotation (degrees) */
    angle?: number
}

export type LabelLocationSpec = {
    /** size of bounding container */
    size?: SizeSpec
    /** space between container and label */
    padding?: FourSideSizeSpec
    /** position of anchor point relative to box size */
    anchor?: AlignSpec
    /** alignment of label within its bounding container */
    align?: AlignSpec
}

export type LabelProps = TypographyProps & LabelLocationSpec

export interface CounterProps extends LabelProps {
    /** number of decimal places */
    nDecimalPlaces?: number
    /** format */
    format?: (v: number) => string
    /** component to replace default text */
    component?: FC<TextContentProps>
}
