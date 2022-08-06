import { ThemeSpec } from './themes'
import { ContainerProps } from './views'
import { CSSProperties } from 'react'

export interface ChartProps extends Omit<ContainerProps, 'x' | 'y'> {
    /** identifier for the chart */
    id?: string
    /** theme adjustment **/
    theme?: ThemeSpec
    /** list of styles to include in svg **/
    styles?: Array<string>
    /** css style for svg component */
    style?: Partial<CSSProperties>
}
