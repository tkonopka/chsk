import { ReactNode, Ref } from 'react'
import { CssProps } from '../general'
import { SvgBaseComponent, ThemeSpec } from '../themes'
import { ContainerProps, WithId } from '../views'

export type ChartDataContextProps = WithId &
    Record<string, unknown> & {
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
    updateData: (d: Omit<ChartDataContextProps, 'id'>) => void
    toggleMilestone: (milestone: string) => void
}

export interface ChartProps extends Omit<ContainerProps, 'x' | 'y'> {
    /** identifier for the chart */
    id?: string
    /** adjust size to fill parent container */
    stretch?: boolean
    /** theme **/
    theme?: ThemeSpec
    /** chart settings, e.g. milestones */
    data?: Omit<ChartDataContextProps, 'id'>
    /** list of styles to include in svg **/
    styles?: Array<SvgBaseComponent>
    /** css style for svg component */
    style?: CssProps
    /** forwarded ref */
    fref?: Ref<ChartRef>
}
