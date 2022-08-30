import { FC, Ref } from 'react'
import { ChartDataContextProps, ChartRef } from '@chask/core'

export type MilestoneStep = string | number

// function that produces a chart
export interface MilestoneStory {
    data: ChartDataContextProps
    fref?: Ref<ChartRef>
}

export interface ControllerProps {
    chart: FC<MilestoneStory>
    steps: MilestoneStep[]
}
