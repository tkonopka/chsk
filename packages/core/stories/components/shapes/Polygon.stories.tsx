import type { Meta, StoryObj } from '@storybook/react'
import { Polygon, NumericPositionSpec } from '../../../src'
import { ChartDecorator } from '../decorators'

const meta: Meta<typeof Polygon> = {
    title: 'Core/Components/Shapes/Polygon',
    component: Polygon,
}
export default meta
type Story = StoryObj<typeof Polygon>

const points: NumericPositionSpec[] = [
    [50, 120],
    [140, 50],
    [270, 90],
    [200, 190],
    [100, 100],
]

export const Transparent: Story = {
    name: 'transparent',
    args: {
        points: points,
        style: {
            stroke: '#993333',
            strokeWidth: 2,
            fillOpacity: 0,
        },
    },
    decorators: [ChartDecorator],
}

export const Filled = {
    name: ' filled',
    args: {
        points: points,
        style: {
            stroke: '#993333',
            strokeWidth: 2,
            fill: '#993333',
            fillOpacity: 0.5,
        },
    },
    decorators: [ChartDecorator],
}
