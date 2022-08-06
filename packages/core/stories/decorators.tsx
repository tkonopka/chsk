import { ReactNode } from 'react'
import { Chart, BackgroundSurface, View, Axis } from '../src'

export const ChartDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[40, 40, 40, 40]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <BackgroundSurface variant={'inner'} />
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
                min: 0,
                max: 100,
            }}
            scaleY={{
                variant: 'linear',
                min: 0,
                max: 100,
            }}
            data={[]}
        >
            <BackgroundSurface variant={'inner'} />
            {Story()}
        </View>
    </Chart>
)

export const ChartAxisDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[60, 60, 60, 60]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <View
            scaleX={{
                variant: 'linear',
                min: 0,
                max: 100,
            }}
            scaleY={{
                variant: 'linear',
                min: 0,
                max: 100,
            }}
            data={[]}
        >
            <BackgroundSurface variant={'inner'} />
            <Axis variant={'bottom'} ticks={null}>
                {Story()}
            </Axis>
        </View>
    </Chart>
)

export const DivDecorator = (Story: () => ReactNode) => (
    <div style={{ margin: '0.5em', display: 'inline-block' }}>{Story()}</div>
)
