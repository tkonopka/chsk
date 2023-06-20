import { ReactNode } from 'react'
import { Chart, Surface } from '@chsk/core'
import { DendrogramDataItem, DendrogramProps } from '../../src'

const dataHierarchy: Array<DendrogramDataItem> = [
    {
        id: 'data',
        merge: [
            [-1, -2],
            [-4, -5],
            [-3, 2],
            [1, 3],
        ],
        height: [0.25, 0.5, 0.75, 1],
        ids: ['alpha', 'beta', 'gamma', 'delta', 'epsilon'],
    },
]

export const commonDendrogramProps: DendrogramProps = {
    data: dataHierarchy,
}

export const ChartWithLegendDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 80, 60]} style={{ display: 'inline-block' }}>
        <Surface variant={'inner'} />
        {Story()}
    </Chart>
)
