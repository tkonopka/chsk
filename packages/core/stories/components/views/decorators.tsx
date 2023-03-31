import { ReactNode } from 'react'
import { Chart, View, Surface, Axis } from '../../../src'

export const ChartForControllerDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[60, 80, 40, 40]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
        theme={{
            g: {
                button: { cursor: 'pointer' },
            },
        }}
    >
        <View>
            <Surface key={0} variant={'inner'} />
            <Axis key={1} variant={'left'} />
            <Axis key={2} variant={'bottom'} />
            {Story()}
        </View>
    </Chart>
)
