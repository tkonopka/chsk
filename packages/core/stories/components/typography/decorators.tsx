import { ReactNode } from 'react'
import { Chart, Surface, Circle, Rectangle } from '../../../src'

export const labelsTheme = {
    rect: {
        box: {
            fillOpacity: 0,
            stroke: '#222222',
            strokeWidth: 1,
        },
        padding: {
            fillOpacity: 0,
            stroke: '#777777',
            strokeWidth: 1,
            strokeDasharray: 4,
        },
    },
    circle: {
        default: {
            fill: '#222222',
        },
    },
}

export const ChartForLabelDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[40, 40, 40, 40]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
        theme={labelsTheme}
    >
        <Surface variant={'inner'} />
        <Circle cx={160} cy={110} r={3} />
        <Rectangle x={160} y={110} width={160} height={50} className={'box'} center={true} />
        <Rectangle x={160} y={110} width={130} height={40} className={'padding'} center={true} />
        {Story()}
    </Chart>
)

export const ChartForAnchoredLabelDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[40, 40, 40, 40]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <Surface variant={'inner'} />
        <Circle cx={160} cy={110} r={3} />
        <Rectangle
            x={160}
            y={110}
            width={160}
            height={50}
            style={{ fillOpacity: 0, stroke: '#222222', strokeWidth: 1 }}
            center={false}
        />
        <Rectangle
            x={160 + 15}
            y={110 + 5}
            width={130}
            height={40}
            style={{ fillOpacity: 0, stroke: '#777777', strokeWidth: 1, strokeDasharray: 4 }}
            center={false}
        />
        {Story()}
    </Chart>
)
