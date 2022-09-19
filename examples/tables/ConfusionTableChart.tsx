import { Chart, Surface, Counter } from '@chask/core'
import { MilestoneStory } from '../types'
import { randomUniformValue } from '../utils'

export const generateConfusionTableData = () => [
    {
        id: 'A',
        A: Math.round(randomUniformValue(50, 100)),
        B: Math.round(randomUniformValue(20, 50)),
        C: Math.round(randomUniformValue(10, 40)),
    },
    {
        id: 'B',
        A: Math.round(randomUniformValue(10, 50)),
        B: Math.round(randomUniformValue(40, 100)),
        C: Math.round(randomUniformValue(10, 40)),
    },
    {
        id: 'C',
        A: Math.round(randomUniformValue(10, 50)),
        B: Math.round(randomUniformValue(10, 50)),
        C: Math.round(randomUniformValue(50, 100)),
    },
]

export const ConfusionTableChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="confusion-table"
            size={[600, 400]}
            padding={[60, 60, 60, 60]}
        >
            <Surface variant={'outer'} style={{ fill: '#f6f6f6' }} />
            <Counter>{String(rawData[0]['A'])}</Counter>
        </Chart>
    )
}
