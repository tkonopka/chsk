import { ReactNode } from 'react'
import { Chart, Surface, ThemeSpec } from '@chsk/core'
import { Dendrogram, DendrogramTree, DendrogramDataItem, DendrogramProps } from '../../src'

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
        keys: ['alpha', 'beta', 'gamma', 'delta', 'epsilon'],
    },
]

export const commonDendrogramProps: DendrogramProps = {
    data: dataHierarchy,
}

export const ChartWithLegendDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Surface variant={'inner'} />
        {Story()}
    </Chart>
)

export const ChartDendrogramDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Dendrogram data={dataHierarchy} variant={'bottom'}>
            <Surface variant={'inner'} />
            {Story()}
        </Dendrogram>
    </Chart>
)

const customTheme: ThemeSpec = {
    rect: {
        leafLabel: {
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: 1,
        },
    },
}

export const ChartDendrogramTreeDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[40, 60, 40, 40]}
        style={{ display: 'inline-block' }}
        theme={customTheme}
    >
        <Dendrogram data={dataHierarchy} variant={'right'}>
            <Surface variant={'inner'} />
            <DendrogramTree />
            {Story()}
        </Dendrogram>
    </Chart>
)

export const ChartDendrogramTreeHangDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[40, 60, 40, 40]}
        style={{ display: 'inline-block' }}
        theme={customTheme}
    >
        <Dendrogram data={dataHierarchy} variant={'right'} hang={0.05}>
            <Surface variant={'inner'} />
            <DendrogramTree />
            {Story()}
        </Dendrogram>
    </Chart>
)

export const ChartDendrogramSurfaceDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[40, 60, 40, 40]}
        style={{ display: 'inline-block' }}
        theme={customTheme}
    >
        <Dendrogram data={dataHierarchy} variant={'right'}>
            <Surface variant={'inner'} />
            {Story()}
            <DendrogramTree style={{ pointerEvents: 'none' }} />
        </Dendrogram>
    </Chart>
)
