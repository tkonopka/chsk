import { CSSProperties } from 'react'

export type SideType = 'top' | 'right' | 'left' | 'bottom'

export type TickType = number | number[] | string[]

export interface AxisProps {
    /** type of axis */
    variant: SideType
    /** text label for axis */
    label: string
    /** specification for tick positions */
    ticks?: TickType
    /** style for tick marks */
    tickStyle?: Partial<CSSProperties>
    /** style for tick labels */
    tickLabelStyle?: Partial<CSSProperties>
    /** style for axis line */
    axisStyle?: Partial<CSSProperties>
    /** style for axis label */
    axisLabelStyle?: Partial<CSSProperties>
}

export interface TicksProps {
    /** type of axis */
    variant: SideType
    /** specification for tick positions **/
    ticks?: TickType
    /** style for tick marks (line) */
    style?: Partial<CSSProperties>
    /** style for tick labels (text) */
    labelStyle?: Partial<CSSProperties>
}
