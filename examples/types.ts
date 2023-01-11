import { FC, Ref } from 'react'
import { ChartDataContextProps, ChartRef, RawData } from '@chsk/core'

export type MilestoneStep = string | number

export interface MilestoneStory {
    /** data object passed to the 'Chart' component */
    chartData: Omit<ChartDataContextProps, 'id'>
    /** ref used to toggle milestones */
    fref?: Ref<ChartRef>
    /** raw dataset used for plotting */
    rawData: RawData
}

export interface ControllerProps {
    /** function that generates a synthetic raw dataset */
    generator: () => RawData
    /** component that renders a chart */
    chart: FC<MilestoneStory>
    /** array of milestones */
    steps: MilestoneStep[]
    /** comment */
    comment?: string
    /** width of comment box */
    commentWidth?: string
}
