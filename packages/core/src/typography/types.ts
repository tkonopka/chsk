import { ReactNode } from 'react'
import {
    NumericPositionSpec,
    FourSideSizeSpec,
    SizeSpec,
    SvgElementVariantProps,
    AlignSpec,
} from '../general'

export interface TypographyProps extends SvgElementVariantProps {
    /** position */
    position?: NumericPositionSpec
    /** variant */
    variant?: 'default' | 'title' | 'subtitle' | 'axisLabel' | 'tickLabel' | string
    /** transform */
    transform?: string
    /** text content **/
    children?: ReactNode
}

export type LabelLocationSpec = {
    /** size of bounding container */
    size?: SizeSpec
    /** space between container and label */
    padding?: FourSideSizeSpec
    /** alignment for origin of label */
    align?: AlignSpec
}

export interface LabelProps extends TypographyProps, LabelLocationSpec {
    /** position for center of label container */
    position?: NumericPositionSpec
}

export interface CounterProps extends TypographyProps {
    /** number of decimal places */
    nDecimalPlaces?: number
}
