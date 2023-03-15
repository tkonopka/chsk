import { ReactNode } from 'react'
import { Chart, Surface } from '@chsk/core'
import { generateUniformValues } from './generators'

export const ChartDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Surface variant={'inner'} />
        {Story()}
    </Chart>
)

export const ChartWithLegendDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 80, 60]} style={{ display: 'inline-block' }}>
        <Surface variant={'inner'} />
        {Story()}
    </Chart>
)

export const dataRawValues = [
    {
        id: 'alpha',
        x: generateUniformValues(30, [0, 10]),
        y: generateUniformValues(30, [2, 16]),
    },
    {
        id: 'beta',
        x: generateUniformValues(30, [5, 15]),
        y: generateUniformValues(30, [10, 20]),
    },
]
