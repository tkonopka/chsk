import { ReactNode } from 'react'
import { Chart, Axis } from '@chsk/core'
import { Scatter, ScatterPoints, ScatterChargedLabels } from '../../src'

const dataTwo = [
    {
        id: 'A',
        data: [
            { x: 5, y: 5 },
            { x: 5.5, y: 3.5 },
        ],
    },
]

const dataBubbles = [
    {
        id: 'A',
        data: [
            { x: 3, y: 7, r: 4 },
            { x: 7, y: 4, r: 200 },
        ],
    },
]

export default {
    title: 'Addons/XY/Scatter/ScatterChargedLabels',
    component: ScatterChargedLabels,
}

const TwoChargedLabelsDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Scatter
            data={dataTwo}
            x={'x'}
            y={'y'}
            scaleX={{ variant: 'linear', domain: [0, 10] }}
            scaleY={{ variant: 'linear', domain: [0, 10] }}
        >
            <Axis variant={'bottom'} label={'x (a.u.)'} />
            <Axis variant={'left'} label={'y (a.u.)'} />
            <ScatterPoints
                ids={['A']}
                symbolStyle={{
                    fill: '#333333',
                }}
            />
            {Story()}
        </Scatter>
    </Chart>
)

const BubbleChargedLabelsDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Scatter
            data={dataBubbles}
            x={'x'}
            y={'y'}
            valueSize={'r'}
            scaleX={{ variant: 'linear', domain: [0, 10] }}
            scaleY={{ variant: 'linear', domain: [0, 10] }}
            scaleSize={{ variant: 'sqrt', domain: [0, 'auto'], size: 40 }}
        >
            <Axis variant={'bottom'} label={'x (a.u.)'} />
            <Axis variant={'left'} label={'y (a.u.)'} />
            <ScatterPoints
                ids={['A']}
                symbolStyle={{
                    fill: '#333333',
                }}
            />
            {Story()}
        </Scatter>
    </Chart>
)

export const TwoA = {
    name: 'above point',
    args: {
        data: [{ id: 'A', index: 0, size: [60, 16], content: 'label A' }],
    },
    decorators: [TwoChargedLabelsDecorator],
}
export const TwoB = {
    name: 'beside point',
    args: {
        data: [{ id: 'A', index: 1, size: [60, 16], content: 'label B' }],
    },
    decorators: [TwoChargedLabelsDecorator],
}

export const Offset = {
    name: 'offset',
    args: {
        data: [{ id: 'A', index: 0, size: [60, 16], content: 'label A' }],
        offset: [0, 0.1],
    },
    decorators: [TwoChargedLabelsDecorator],
}

export const Clearance = {
    name: 'clearance',
    args: {
        data: [
            { id: 'A', index: 0, size: [60, 16], content: 'label A' },
            { id: 'A', index: 1, size: [60, 16], content: 'label B' },
        ],
        clearance: 2,
    },
    decorators: [TwoChargedLabelsDecorator],
}

export const Bubbles = {
    name: 'bubbles',
    args: {
        data: [
            { id: 'A', index: 0, size: [60, 16], content: 'label A' },
            { id: 'A', index: 1, size: [60, 16], content: 'label B' },
        ],
        clearance: 4,
    },
    decorators: [BubbleChargedLabelsDecorator],
}
