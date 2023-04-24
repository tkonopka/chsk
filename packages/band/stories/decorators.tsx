import { ReactNode } from 'react'
import { Chart, roundDecimalPlaces, Surface } from '@chsk/core'
import { generateUniformValues } from './generators'

export const ChartDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Surface variant={'inner'} />
        {Story()}
    </Chart>
)

export const dataRawValues = [
    {
        id: 'alpha',
        x: generateUniformValues(30, [0, 10]).map(v => roundDecimalPlaces(v, 4)),
        y: generateUniformValues(30, [2, 16]).map(v => roundDecimalPlaces(v, 4)),
    },
    {
        id: 'beta',
        x: generateUniformValues(30, [5, 15]).map(v => roundDecimalPlaces(v, 4)),
        y: generateUniformValues(30, [10, 20]).map(v => roundDecimalPlaces(v, 4)),
    },
]
