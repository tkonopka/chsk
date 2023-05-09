import { FC, ReactNode } from 'react'
import {
    NumericPositionSpec,
    SvgElementVariantProps,
    SvgElementProps,
    LocationProps,
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

export type LabelProps = TypographyProps & LocationProps

export interface CounterProps extends LabelProps {
    /** number of decimal places */
    nDecimalPlaces?: number
    /** format */
    format?: (v: number) => string | ReactNode
    /** component to replace default text */
    component?: FC<TextContentProps>
}
