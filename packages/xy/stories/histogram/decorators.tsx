import { ReactNode } from 'react'
import { Chart, Axis } from '@chsk/core'
import { generateHistogramSeries, randomNormalValue } from './generators'
import { Histogram } from '../../src'

export const sampleData = [
    generateHistogramSeries('A', 150, () => randomNormalValue(-2, 0.8)),
    generateHistogramSeries('B', 150, () => randomNormalValue(2, 1.6)),
]

export const ChartHistogramDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Histogram
            data={sampleData}
            breaks={[-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]}
            scaleX={{
                variant: 'linear',
                domain: 'auto',
            }}
            scaleY={{
                variant: 'linear',
                domain: 'auto',
            }}
        >
            <Axis variant={'bottom'} label={'x (a.u.)'} />
            <Axis variant={'left'} label={'counts'} />
            {Story()}
        </Histogram>
    </Chart>
)

export const ChartDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        {Story()}
    </Chart>
)

export const ChartWithLegendSpaceDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 140, 60, 60]} style={{ display: 'inline-block' }}>
        {Story()}
    </Chart>
)
