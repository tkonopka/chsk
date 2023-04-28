import { ReactNode } from 'react'
import { Chart, Axis } from '@chsk/core'
import { Scatter, ScatterPoints, ScatterLabel } from '../../src'
import { ChartScatterQuadraticDecorator } from './decorators'
import { generateScatterSeries } from './generators'

const dataWithNoise = [
    generateScatterSeries(
        'A',
        Array(10)
            .fill(0)
            .map(() => 1 + 10 * Math.random()),
        x => 0.3 * x + Math.random() * 3
    ),
]

export default {
    title: 'Addons/XY/Scatter/ScatterLabel',
    component: ScatterLabel,
}

const VariantDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Scatter
            data={dataWithNoise}
            x={'x'}
            y={'y'}
            valueSize={4}
            scaleX={{
                variant: 'linear',
                domain: [0, 'auto'],
            }}
            scaleY={{
                variant: 'linear',
                domain: [0, 'auto'],
                nice: true,
            }}
        >
            <Axis variant={'bottom'} label={'x (a.u.)'} />
            <Axis variant={'left'} label={'y (a.u.)'} />
            <ScatterPoints
                ids={['A']}
                symbolStyle={{
                    fill: '#ffffff',
                    stroke: '#333333',
                    strokeWidth: 1,
                }}
            />
            {Story()}
        </Scatter>
    </Chart>
)

export const Position = {
    name: 'xy',
    args: {
        id: 'A',
        position: [5, 2],
        positionUnits: 'view',
        offset: [0, 0],
        anchor: [0.5, 0.5],
        style: {
            textAnchor: 'middle',
            fontWeight: 600,
        },
        children: 'Label',
    },
    decorators: [VariantDecorator],
}

export const X = {
    name: 'x',
    args: {
        variant: 'x',
        id: 'A',
        position: [0.5, 0.5],
        positionUnits: 'relative',
        offset: [0, -12],
        style: {
            textAnchor: 'middle',
            fontWeight: 600,
        },
        children: 'Label',
    },
    decorators: [VariantDecorator],
}

export const Y = {
    name: 'y',
    args: {
        variant: 'y',
        id: 'A',
        position: [0, 0],
        positionUnits: 'relative',
        offset: [0, -12],
        style: {
            textAnchor: 'middle',
            fontWeight: 600,
        },
        children: 'Label',
    },
    decorators: [VariantDecorator],
}

export const ManualAngle = {
    name: 'manual angle',
    args: {
        variant: 'x',
        id: 'quadratic',
        position: [6, 0],
        positionUnits: 'view',
        offset: [0, -10],
        angle: -20,
        style: {
            textAnchor: 'end',
            fontWeight: 600,
        },
        children: 'manual',
    },
    decorators: [ChartScatterQuadraticDecorator],
}

export const AutoRotation = {
    name: 'auto rotation',
    args: {
        variant: 'x',
        id: 'quadratic',
        position: [6, 0],
        positionUnits: 'view',
        offset: [0, -10],
        autoRotate: true,
        style: {
            textAnchor: 'start',
            fontWeight: 600,
        },
        children: 'auto',
    },
    decorators: [ChartScatterQuadraticDecorator],
}
