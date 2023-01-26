import { ReactNode } from 'react'
import { Chart, Surface, Circle, Rectangle } from '../../../src'

export const ChartForLabelDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[40, 40, 40, 40]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <Surface variant={'inner'} />
        <Circle cx={160} cy={110} r={2} style={{ fill: '#222222' }} />
        <Rectangle
            x={160}
            y={110}
            width={160}
            height={50}
            style={{ fillOpacity: 0, stroke: '#222222', strokeWidth: 1 }}
            center={true}
        />
        <Rectangle
            x={165}
            y={110}
            width={140}
            height={40}
            style={{ fillOpacity: 0, stroke: '#777777', strokeWidth: 1, strokeDasharray: 4 }}
            center={true}
        />
        {Story()}
    </Chart>
)
