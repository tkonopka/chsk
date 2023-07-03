import { FC, ReactNode } from 'react'
import {
    NumericPositionSpec,
    SvgElementVariantProps,
    LocationProps,
    WithTransition,
} from '../general'

export interface TypographyProps extends SvgElementVariantProps {
    /** position (absolute coordinates) */
    position?: NumericPositionSpec
    /** variant */
    variant?: 'default' | 'title' | 'subtitle' | 'axisLabel' | 'tickLabel' | string
    /** rotation (degrees) */
    angle?: number
    /** content */
    children?: ReactNode
}

export type LabelProps = TypographyProps & LocationProps

export interface CounterProps extends LabelProps, WithTransition {
    /** number of decimal places */
    nDecimalPlaces?: number
    /** format */
    format?: (v: number) => ReactNode
    /** component to replace default text */
    component?: FC<LabelProps>
}
