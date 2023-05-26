import { ReactNode } from 'react'
import { Chart, View, Surface, Tooltip } from '../../../src'

export const ChartForButtonDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[40, 40, 40, 40]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
        theme={{
            g: {
                button: { cursor: 'pointer' },
            },
        }}
    >
        <View>
            <Surface variant={'inner'} />
            {Story()}
        </View>
    </Chart>
)

export const ChartViewWithTooltipDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[40, 40, 40, 40]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <View
            scaleX={{ variant: 'linear', domain: [0, 100] }}
            scaleY={{ variant: 'linear', domain: [0, 100] }}
            data={[]}
        >
            <Surface variant={'inner'} />
            {Story()}
            <Tooltip size={[110, 30]} />
        </View>
    </Chart>
)
