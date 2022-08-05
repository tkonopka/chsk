import { ThemeSpec } from './themes'
import { ContainerProps } from './views'

export interface ChartProps extends Omit<ContainerProps, 'x' | 'y'> {
    /** identifier for the chart */
    id?: string
    /** theme adjustment **/
    theme?: ThemeSpec
    /** list of styles to include in svg **/
    styles?: Array<string>
}
