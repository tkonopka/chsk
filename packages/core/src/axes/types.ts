import { CSSProperties, ReactNode } from 'react'
import {
    NumericPositionSpec,
    SideVariant,
    SvgElementVariantProps,
    TwoSideSizeSpec,
} from '../general'

export type TickType = undefined | number | number[] | string[]

export interface AxisProps extends SvgElementVariantProps {
    /** type of axis */
    variant: SideVariant
    /** specification for tick positions */
    ticks?: TickType
    /** text label for axis */
    label?: string
    /** offset from chart surface */
    offset?: number
    /** components rendered within the axis frame */
    children?: ReactNode
}
export interface AxisThemedProps extends Pick<AxisProps, 'offset' | 'ticks' | 'style'> {
    offset: number
    ticks: TickType
}

export interface AxisLineProps extends SvgElementVariantProps {
    /** type of axis */
    variant: SideVariant
}

export interface AxisLabelProps extends SvgElementVariantProps {
    /** type of axis */
    variant: SideVariant
    /** distance between axis line and label */
    offset?: number
    /** position of label along the axis */
    anchor?: 'start' | 'middle' | 'end' | number
    /** rotation angle (degrees) */
    rotate?: number
    /** string label */
    children?: string
}

export interface AxisLabelThemedProps
    extends Pick<AxisLabelProps, 'anchor' | 'offset' | 'rotate' | 'style'> {
    anchor: 'start' | 'middle' | 'end' | number
    offset: number
    rotate: number
}

export interface AxisTicksProps extends SvgElementVariantProps {
    /** type of axis */
    variant: SideVariant
    /** specification for tick positions **/
    ticks?: TickType
    /** length of tick lines */
    tickSize?: number
    /** style for tick marks (line) */
    tickStyle?: Partial<CSSProperties>
    /** distance between axis and tick labels */
    labelOffset?: number
    /** additional translation for label position */
    labelTranslate?: NumericPositionSpec
    /** rotation angle (degrees) */
    labelRotate?: number
    /** format */
    labelFormat?: (value: unknown, index: number) => string
    /** style for tick labels (text) */
    labelStyle?: Partial<CSSProperties>
}

export interface AxisTicksThemedProps
    extends Pick<
        AxisTicksProps,
        | 'ticks'
        | 'tickSize'
        | 'labelOffset'
        | 'labelTranslate'
        | 'labelRotate'
        | 'labelStyle'
        | 'tickStyle'
    > {
    ticks: TickType
    tickSize: number
    labelOffset: number
    labelTranslate: NumericPositionSpec
    labelRotate: number
}

export interface GridLinesProps extends SvgElementVariantProps {
    /** variant */
    variant: 'x' | 'y'
    /** positions for grid lines */
    values?: number | number[] | string[]
    /** shift gridlines compared to natural tick position (multiple of bandwidth) */
    shift?: number[]
    /** expansion of lines at the start and end of the scale */
    expansion?: number | TwoSideSizeSpec
}

export interface GridLinesThemedProps extends Pick<GridLinesProps, 'shift' | 'expansion'> {
    shift: number[]
    expansion: number | TwoSideSizeSpec
}
