import { ReactNode } from 'react'
import { Chart } from '@chsk/core'
import { Pie } from '../../src'

export const pieData = [
    { id: 'alpha', data: 55 },
    { id: 'beta', data: 35 },
    { id: 'gamma', data: 10 },
]

export const commonPieProps = {
    data: pieData,
}

export const ChartDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        {Story()}
    </Chart>
)

export const ChartPieDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Pie {...commonPieProps}>{Story()}</Pie>
    </Chart>
)

export const ChartForSliceDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Pie {...commonPieProps}>
            <g transform={'translate(150,100)'}>{Story()}</g>
        </Pie>
    </Chart>
)
