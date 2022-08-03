import { ReactNode } from 'react'
import { PaddingSpec } from './general'
import { ThemeSpec } from './themes'
import { ScaleSpec } from './scales'

export type DataSpec = null | Array<Record<string, unknown>>

export interface ChartProps {
    /** identifier for the chart */
    id?: string
    /** width of the chart */
    width: number
    /** height of the chart */
    height: number
    /** padding **/
    padding: PaddingSpec
    /** data array **/
    data: DataSpec
    /** scale for horizontal axis */
    scaleX: ScaleSpec
    /** scale for vertical axis */
    scaleY: ScaleSpec
    /** theme adjustment **/
    theme?: ThemeSpec
    /** list of styles to include in svg **/
    styles?: Array<string>
    /** content for the chart */
    children?: ReactNode
}
