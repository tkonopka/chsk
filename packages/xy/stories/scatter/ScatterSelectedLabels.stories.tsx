import { ReactNode } from 'react'
import { Chart, Axis, Circle, Line, LabelProps } from '@chsk/core'
import { Scatter, ScatterPoints, ScatterSelectedLabels } from '../../src'
import { BoxedLabel } from '../../../annotation/src'

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

const dataGrid = [
    {
        id: 'A',
        data: Array.from(Array(9).fill(0).keys()).map(i => ({
            x: 4 + Math.floor(i / 3),
            y: 4 + (i % 3),
        })),
    },
]

export default {
    title: 'Addons/XY/Scatter/ScatterSelectedLabels',
    component: ScatterSelectedLabels,
}

const TwoSelectedLabelsDecorator = (Story: () => ReactNode) => (
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
            <ScatterPoints />
            {Story()}
        </Scatter>
    </Chart>
)

const BubbleSelectedLabelsDecorator = (Story: () => ReactNode) => (
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
            <ScatterPoints />
            {Story()}
        </Scatter>
    </Chart>
)

const GridSelectedLabelsDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Scatter
            data={dataGrid}
            x={'x'}
            y={'y'}
            valueSize={6}
            scaleX={{ variant: 'linear', domain: [0, 10] }}
            scaleY={{ variant: 'linear', domain: [0, 10] }}
        >
            <Axis variant={'bottom'} label={'x (a.u.)'} />
            <Axis variant={'left'} label={'y (a.u.)'} />
            <ScatterPoints />
            {Story()}
        </Scatter>
    </Chart>
)

export const TwoA = {
    name: 'above point',
    args: {
        data: [{ id: 'A', index: 0, size: [60, 16], content: 'label A' }],
    },
    decorators: [TwoSelectedLabelsDecorator],
}
export const TwoB = {
    name: 'beside point',
    args: {
        data: [{ id: 'A', index: 1, size: [60, 16], content: 'label B' }],
    },
    decorators: [TwoSelectedLabelsDecorator],
}

export const Offset = {
    name: 'offset',
    args: {
        data: [{ id: 'A', index: 0, size: [60, 16], content: 'label A' }],
        offset: [0, 0.1],
    },
    decorators: [TwoSelectedLabelsDecorator],
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
    decorators: [TwoSelectedLabelsDecorator],
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
    decorators: [BubbleSelectedLabelsDecorator],
}

export const Grid = {
    name: 'grid',
    args: {
        data: [{ id: 'A', index: 4, size: [60, 20], content: 'center' }],
        style: {
            textAnchor: 'start',
        },
        offset: [0.2, -0.2],
        anchor: [0.5, 1],
        symbol: Circle,
        symbolStyle: { stroke: '#000000', strokeWidth: 2 },
        clearance: 15,
    },
    decorators: [GridSelectedLabelsDecorator],
}

export const Connector = {
    name: 'connector',
    args: {
        data: [{ id: 'A', index: 0, size: [60, 16], content: 'label A' }],
        offset: [10, -4],
        clearance: 30,
        connector: Line,
        connectorStyle: { stroke: '#000000', strokeWidth: 1 },
    },
    decorators: [TwoSelectedLabelsDecorator],
}

export const SymbolConnector = {
    name: 'symbol and connector',
    args: {
        data: [{ id: 'A', index: 0, size: [60, 16], content: 'label A' }],
        offset: [10, -4],
        style: { textAnchor: 'start' },
        clearance: 30,
        symbol: Circle,
        symbolStyle: { stroke: '#000000', strokeWidth: 1 },
        connector: Line,
        connectorStyle: { stroke: '#000000', strokeWidth: 1 },
    },
    decorators: [TwoSelectedLabelsDecorator],
}

const WhiteBoxedLabel = (props: LabelProps) => {
    return (
        <BoxedLabel
            {...props}
            rx={3}
            ry={3}
            boxStyle={{ fill: '#ffffff', stroke: '#000000', strokeWidth: 1 }}
        />
    )
}

export const Custom = {
    name: 'custom components',
    args: {
        data: [
            { id: 'A', index: 0, size: [60, 25], content: 'label A' },
            { id: 'A', index: 1, size: [60, 25], content: 'label B' },
        ],
        offset: [0.2, 0],
        anchor: [0, 0.5],
        clearance: 20,
        component: WhiteBoxedLabel,
        symbol: Circle,
        symbolStyle: { stroke: '#000000', strokeWidth: 2 },
        connector: Line,
        connectorStyle: { stroke: '#000000', strokeWidth: 1 },
    },
    decorators: [TwoSelectedLabelsDecorator],
}
