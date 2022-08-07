import { CSSProperties, ReactNode } from 'react'
import { SvgElementVariantProps } from '../general'

export type SideType = 'top' | 'right' | 'left' | 'bottom'

export type TickType = number | number[] | string[]

export interface AxisProps extends SvgElementVariantProps {
    /** type of axis */
    variant: SideType
    /** specification for tick positions */
    ticks?: TickType | null
    /** text label for axis */
    label?: string
    /** offset from chart surface */
    padding?: number
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
    /** offset between axis line and label */
    padding?: number
    /** position of label along the axis */
    anchor?: 'start' | 'middle' | 'end' | number
    /** rotation angle (degrees) */
    rotate?: number
    /** string label */
    children?: string
}

export type TickFormatType = (v: unknown) => string

export interface TicksProps extends SvgElementVariantProps {
    /** type of axis */
    variant: SideType
    /** specification for tick positions **/
    ticks?: TickType | null
    /** length of tick lines */
    size?: number
    /** padding between axis and tick labels */
    padding?: number
    /** rotation angle (degrees) */
    rotate?: number
    /** format */
    format?: undefined | null | TickFormatType
    /** style for tick marks (line) */
    style?: Partial<CSSProperties>
    /** style for tick labels (text) */
    labelStyle?: Partial<CSSProperties>
}
