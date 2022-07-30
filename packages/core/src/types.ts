import { ReactNode } from 'react'
import { MarginSpec } from './general'
import { ThemeSpec } from './themes'

export type DataSpec = null | Array<Record<string, unknown>>

export interface ChartProps {
    /** width of the chart */
    width: number
    /** height of the chart */
    height: number
    /** margin **/
    margin: MarginSpec
    /** data array **/
    data: DataSpec
    /** theme adjustment **/
    theme?: ThemeSpec
    /** list of styles to include in svg **/
    styles?: Array<string>
    children: ReactNode
}
