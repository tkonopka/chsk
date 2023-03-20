import { ReactNode } from 'react'
import { Chart, Circle, Surface } from '@chsk/core'
import { Pie, Origin } from '../../src'

export const ChartOriginDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Pie data={[]}>
            <Surface />
            <Origin>
                <Circle
                    cx={0}
                    cy={0}
                    r={80}
                    style={{ stroke: '#222222', strokeWidth: 1, fillOpacity: 0 }}
                />
                {Story()}
            </Origin>
        </Pie>
    </Chart>
)
