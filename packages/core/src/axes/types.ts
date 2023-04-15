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
    /** distance from view boundary */
    distance?: number
    /** components rendered within the axis frame */
    children?: ReactNode
}
export interface AxisThemedProps extends Pick<AxisProps, 'distance' | 'ticks' | 'style'> {
    distance: number
    ticks: TickType
}

export interface AxisLineProps extends Omit<SvgElementVariantProps, 'setRole'> {
    /** type of axis */
    variant: SideVariant
}

export interface AxisLabelProps extends SvgElementVariantProps {
    /** type of axis */
    variant: SideVariant
    /** distance between axis line and label */
    distance?: number
    /** offset */
    offset?: NumericPositionSpec
    /** alignment of label along the axis */
    align?: number
    /** rotation angle (degrees) */
    angle?: number
    /** string label */
    children?: string
}

export interface AxisLabelThemedProps
    extends Pick<AxisLabelProps, 'distance' | 'align' | 'offset' | 'angle' | 'style'> {
    distance: number
    align: number
    offset: NumericPositionSpec
    angle: number
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
    labelDistance?: number
    /** additional translation for label position */
    labelOffset?: NumericPositionSpec
    /** rotation angle (degrees) */
    labelAngle?: number
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
        | 'labelDistance'
        | 'labelOffset'
        | 'labelAngle'
        | 'labelStyle'
        | 'tickStyle'
    > {
    ticks: TickType
    tickSize: number
    labelDistance: number
    labelOffset: NumericPositionSpec
    labelAngle: number
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
