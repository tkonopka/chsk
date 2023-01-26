import { ReactNode } from 'react'
import { Axis, Chart, Surface, View } from '../../../src'

export const ChartBottomAxisDecorator = (Story: () => ReactNode) => (
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
            <Axis variant={'bottom'}>{Story()}</Axis>
        </View>
    </Chart>
)

export const ChartLeftAxisDecorator = (Story: () => ReactNode) => (
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
            <Axis variant={'left'}>{Story()}</Axis>
        </View>
    </Chart>
)
