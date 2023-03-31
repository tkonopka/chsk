import { ReactNode } from 'react'
import { Chart, View, Surface } from '../../../src'

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
