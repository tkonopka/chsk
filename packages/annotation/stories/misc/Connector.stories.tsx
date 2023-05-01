import { ReactNode } from 'react'
import { Chart, Surface } from '@chsk/core'
import { Connector } from '../../src'

export default {
    title: 'Addons/Annotation/Misc/Connector',
    component: Connector,
}

const ConnectorDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 140]} padding={[20, 20, 20, 20]} style={{ display: 'inline-block' }}>
        <Surface variant={'inner'} />
        {Story()}
    </Chart>
)

const coordinates = { x1: 200, x2: 350, y1: 50, y2: 25 }

export const Line = {
    name: 'line',
    args: {
        variant: 'line',
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}

export const ArcLeft = {
    name: 'arc left',
    args: {
        variant: 'arc-left',
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}

export const ArcRight = {
    name: 'arc right',
    args: {
        variant: 'arc-right',
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}

export const ArcH = {
    name: 'arc horizontal',
    args: {
        variant: 'arc-h',
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}

export const ArcV = {
    name: 'arc vertical',
    args: {
        variant: 'arc-v',
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}

export const Radii = {
    name: 'radii',
    args: {
        variant: 'arc-right',
        rx: 150,
        ry: 40,
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}

export const HL = {
    name: 'horizontal line',
    args: {
        variant: 'hl',
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}

export const LH = {
    name: 'line horizontal',
    args: {
        variant: 'lh',
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}

export const VL = {
    name: 'vertical line',
    args: {
        variant: 'vl',
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}

export const LV = {
    name: 'line vertical',
    args: {
        variant: 'vl',
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}

export const ElbowStartRelative = {
    name: 'elbow relative',
    args: {
        variant: 'hl',
        elbow: 0.25,
        elbowUnit: 'relative',
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}

export const ElbowStartAbsolute = {
    name: 'elbow absolute',
    args: {
        variant: 'lh',
        elbow: 20,
        elbowUnit: 'absolute',
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}

export const ElbowEndRelative = {
    name: 'elbow end relative',
    args: {
        variant: 'lh',
        elbow: 0.25,
        elbowUnit: 'relative',
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}

export const ElbowEndAbsolute = {
    name: 'elbow absolute',
    args: {
        variant: 'lh',
        elbow: 20,
        elbowUnit: 'absolute',
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}

export const Smoothing = {
    name: 'smoothing',
    args: {
        variant: 'hl',
        elbow: 0.9,
        beta: 0.85,
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}
