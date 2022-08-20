import { ReactNode } from 'react'
import { NumericPositionSpec, SideSizeSpec, SizeSpec, SvgElementVariantProps } from '../general'

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
    padding?: SideSizeSpec
    /** alignment for origin of label */
    align?: NumericPositionSpec
}

export interface LabelProps extends TypographyProps, LabelLocationSpec {
    /** position for center of label container */
    position?: NumericPositionSpec
}
