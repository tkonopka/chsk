import { ReactNode } from 'react'
import { Chart, Surface, View, Axis } from '../../src'

export const viewSeriesIndexesKeys = {
    seriesIndexes: { X: 0, Y: 1 },
    keys: ['alpha', 'beta', 'gamma'],
}

export const DivDecorator = (Story: () => ReactNode) => (
    <div style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}>
        {Story()}
    </div>
)

export const ChartPlainDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[40, 40, 40, 40]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        {Story()}
    </Chart>
)

export const ChartDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[40, 40, 40, 40]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <Surface variant={'inner'} />
        {Story()}
    </Chart>
)

export const ChartViewDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[60, 60, 60, 60]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <View
            scaleX={{
                variant: 'linear',
                domain: [0, 100],
            }}
            scaleY={{
                variant: 'linear',
                domain: [0, 100],
            }}
            data={[]}
        >
            <Surface variant={'inner'} />
            {Story()}
        </View>
    </Chart>
)

export const ChartBandViewDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[60, 40, 60, 80]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <View
            scaleX={{
                variant: 'band',
                domain: ['alpha', 'beta', 'gamma', 'delta', 'epsilon'],
                padding: 0,
            }}
            scaleY={{
                variant: 'band',
                domain: ['alpha', 'beta', 'gamma', 'delta', 'epsilon'],
                padding: 0,
            }}
            data={[]}
        >
            <Surface variant={'inner'} />
            {Story()}
            <Axis variant={'left'} />
        </View>
    </Chart>
)
