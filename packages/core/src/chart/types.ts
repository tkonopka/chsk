import { ReactNode, Ref } from 'react'
import { CssProps } from '../general'
import { SvgBaseComponent, ThemeSpec } from '../themes'
import { ContainerProps } from '../views'

export type ChartDataContextProps = Record<string, unknown> & {
    disabledKeys?: Set<string>
    milestones?: Set<string>
}

export type ChartDataProviderValue = {
    data: ChartDataContextProps
    setData: (d: ChartDataContextProps) => unknown
}

export type ChartDataProviderProps = {
    value: ChartDataProviderValue
    children: ReactNode
}

export interface ChartRef {
    updateData: (d: ChartDataContextProps) => void
    toggleMilestone: (milestone: string) => void
}

export interface ChartProps extends Omit<ContainerProps, 'x' | 'y'> {
    /** identifier for the chart */
    id?: string
    /** theme adjustment **/
    theme?: ThemeSpec
    /** data with arbitrary chart settings, e.g. milestone */
    data?: ChartDataContextProps
    /** list of styles to include in svg **/
    styles?: Array<SvgBaseComponent>
    /** css style for svg component */
    style?: CssProps
    /** forwarded ref */
    fref?: Ref<ChartRef>
}
