import { CSSProperties, ReactNode } from 'react'
import { SvgElementVariantProps } from '../general'

export type SideType = 'top' | 'right' | 'left' | 'bottom'

export type TickType = number | number[] | string[]

export interface AxisProps extends SvgElementVariantProps {
    /** type of axis */
    variant: SideType
    /** specification for tick positions */
    ticks?: TickType
    /** text label for axis */
    label?: string
    /** offset from chart surface */
    offset?: number
    /** components rendered within the axis frame */
    children?: ReactNode
}

export interface AxisLineProps extends SvgElementVariantProps {
    /** type of axis */
    variant: SideType
}

export interface AxisLabelProps extends SvgElementVariantProps {
    /** type of axis */
    variant: SideType
    /** distance between axis line and label */
    offset?: number
    /** position of label along the axis */
    anchor?: 'start' | 'middle' | 'end' | number
    /** rotation angle (degrees) */
    rotate?: number
    /** string label */
    children?: string
}

export type TickFormatType = (v: unknown) => string

export interface AxisTicksProps extends SvgElementVariantProps {
    /** type of axis */
    variant: SideType
    /** specification for tick positions **/
    ticks?: TickType
    /** length of tick lines */
    tickSize?: number
    /** style for tick marks (line) */
    tickStyle?: Partial<CSSProperties>
    /** distance between axis and tick labels */
    labelOffset?: number
    /** rotation angle (degrees) */
    labelRotate?: number
    /** format */
    labelFormat?: undefined | null | TickFormatType
    /** style for tick labels (text) */
    labelStyle?: Partial<CSSProperties>
}
