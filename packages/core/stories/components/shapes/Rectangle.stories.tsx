import type { Meta, StoryObj } from '@storybook/react'
import { Rectangle } from '../../../src'
import { ChartDecorator } from '../decorators'

const meta: Meta<typeof Rectangle> = {
    title: 'Core/Components/Shapes/Rectangle',
    component: Rectangle,
}
export default meta
type Story = StoryObj<typeof Rectangle>

export const Centered: Story = {
    name: 'centered',
    args: {
        style: {
            fill: '#dd9999',
        },
        x: 0,
        y: 0,
        width: 60,
        height: 30,
        center: true,
    },
    decorators: [ChartDecorator],
}

export const RoundedCorners: Story = {
    name: 'rounded corners',
    args: {
        style: {
            fill: '#dd9999',
            strokeWidth: '1px',
            stroke: '#aa7777',
        },
        x: 30,
        y: 20,
        width: 240,
        height: 90,
        rx: 30,
        ry: 20,
    },
    decorators: [ChartDecorator],
}
