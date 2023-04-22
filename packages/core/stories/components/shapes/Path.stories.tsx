import type { Meta, StoryObj } from '@storybook/react'
import { Path, NumericPositionSpec } from '../../../src'
import { ChartDecorator } from '../decorators'

const meta: Meta<typeof Path> = {
    title: 'Core/Components/Shapes/Path',
    component: Path,
}
export default meta
type Story = StoryObj<typeof Path>

const openCurve: NumericPositionSpec[] = [
    [0, 200],
    [80, 180],
    [160, 50],
    [240, 90],
    [320, 20],
]

const closedCurve: NumericPositionSpec[] = [
    [50, 120],
    [140, 50],
    [270, 90],
    [200, 190],
    [100, 100],
]

export const Linear: Story = {
    name: 'linear',
    args: {
        points: openCurve,
        curve: 'Linear',
        style: {
            stroke: '#993333',
            fillOpacity: 0,
        },
    },
    decorators: [ChartDecorator],
}

export const Natural: Story = {
    name: 'natural',
    args: {
        points: openCurve,
        curve: 'Natural',
        style: {
            stroke: '#993333',
            fillOpacity: 0,
        },
    },
    decorators: [ChartDecorator],
}

export const MonotoneX: Story = {
    name: 'monotoneX',
    args: {
        points: openCurve,
        curve: 'MonotoneX',
        style: {
            stroke: '#993333',
            fillOpacity: 0,
        },
    },
    decorators: [ChartDecorator],
}

export const Step: Story = {
    name: 'step',
    args: {
        points: openCurve,
        curve: 'Step',
        style: {
            stroke: '#993333',
            fillOpacity: 0,
        },
    },
    decorators: [ChartDecorator],
}

export const LinearClosed: Story = {
    name: 'linear closed',
    args: {
        points: closedCurve,
        curve: 'LinearClosed',
        style: {
            stroke: '#993333',
            fillOpacity: 0,
        },
    },
    decorators: [ChartDecorator],
}

export const BasisClosed: Story = {
    name: 'basis closed',
    args: {
        points: closedCurve,
        curve: 'BasisClosed',

        style: {
            stroke: '#993333',
            fillOpacity: 0,
        },
    },
    decorators: [ChartDecorator],
}

export const CardinalClosed: Story = {
    name: 'cardinal closed',
    args: {
        points: closedCurve,
        curve: 'CardinalClosed',
        style: {
            stroke: '#993333',
            fillOpacity: 0,
        },
    },
    decorators: [ChartDecorator],
}

export const CatmullRomClosed: Story = {
    name: 'catmullRom closed',
    args: {
        points: closedCurve,
        curve: 'CatmullRomClosed',
        style: {
            stroke: '#993333',
            fillOpacity: 0,
        },
    },
    decorators: [ChartDecorator],
}

export const OpenFilled: Story = {
    name: 'open, filled',
    args: {
        points: openCurve,
        curve: 'Linear',
        style: {
            stroke: '#993333',
            fill: '#993333',
            fillOpacity: 0.5,
        },
    },
    decorators: [ChartDecorator],
}

export const ClosedFilled: Story = {
    name: 'closed, filled',
    args: {
        points: closedCurve,
        curve: 'LinearClosed',

        style: {
            stroke: '#993333',
            fill: '#993333',
            fillOpacity: 0.5,
        },
    },
    decorators: [ChartDecorator],
}
