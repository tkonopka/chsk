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

const coordinates = { x1: 50, x2: 200, y1: 75, y2: 25 }

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

export const HStart = {
    name: 'horizontal start',
    args: {
        variant: 'h-start',
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}

export const HEnd = {
    name: 'horizontal end',
    args: {
        variant: 'h-end',
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}

export const VStart = {
    name: 'vertical start',
    args: {
        variant: 'v-start',
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}

export const VEnd = {
    name: 'vertical end',
    args: {
        variant: 'v-end',
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}

export const Radii = {
    name: 'radii',
    args: {
        variant: 'arc-right',
        rx: 200,
        ry: 50,
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}

export const ElbowStartRelative = {
    name: 'elbow relative',
    args: {
        variant: 'h-start',
        elbow: 0.25,
        elbowUnit: 'relative',
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}

export const ElbowStartAbsolute = {
    name: 'elbow absolute',
    args: {
        variant: 'h-start',
        elbow: 20,
        elbowUnit: 'absolute',
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}

export const ElbowEndRelative = {
    name: 'elbow end relative',
    args: {
        variant: 'h-end',
        elbow: 0.25,
        elbowUnit: 'relative',
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}

export const ElbowEndAbsolute = {
    name: 'elbow absolute',
    args: {
        variant: 'h-end',
        elbow: 20,
        elbowUnit: 'absolute',
        ...coordinates,
    },
    decorators: [ConnectorDecorator],
}
