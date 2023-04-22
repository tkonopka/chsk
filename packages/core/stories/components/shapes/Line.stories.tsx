import type { Meta, StoryObj } from '@storybook/react'
import { Line } from '../../../src'
import { ChartDecorator } from '../decorators'

const meta: Meta<typeof Line> = {
    title: 'Core/Components/Shapes/Line',
    component: Line,
}
export default meta
type Story = StoryObj<typeof Line>

export const Tick: Story = {
    name: 'tick',
    args: {
        variant: 'tick',
        x1: 140,
        y1: 80,
        x2: 140,
        y2: 86,
    },
    decorators: [ChartDecorator],
}

export const Grid: Story = {
    name: 'grid',
    args: {
        variant: 'grid',
        x1: 0,
        y1: 40,
        x2: 320,
        y2: 40,
    },
    decorators: [ChartDecorator],
}

export const Color: Story = {
    name: 'color',
    args: {
        variant: 'default',
        x1: 0,
        y1: 80,
        x2: 280,
        y2: 0,
        style: {
            stroke: '#dd4444',
        },
    },
    decorators: [ChartDecorator],
}

export const Dasharray: Story = {
    name: 'dasharray',
    args: {
        variant: 'default',
        x1: 40,
        y1: 0,
        x2: 320,
        y2: 80,
        style: {
            stroke: '#222222',
            strokeDasharray: '15,15',
            strokeLinecap: 'round',
            strokeWidth: 5,
        },
    },
    decorators: [ChartDecorator],
}
