import { ReactNode } from 'react'
import { Chart } from '@chsk/core'

export const ChartDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        {Story()}
    </Chart>
)
