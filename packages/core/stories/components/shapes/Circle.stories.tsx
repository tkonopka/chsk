import type { Meta, StoryObj } from '@storybook/react'
import { Circle } from '../../../src'
import { ChartDecorator } from '../decorators'

const meta: Meta<typeof Circle> = {
    title: 'Core/Components/Shapes/Circle',
    component: Circle,
}
export default meta
type Story = StoryObj<typeof Circle>

export const Styled: Story = {
    name: 'styled',
    args: {
        style: {
            fill: '#dd9999',
            stroke: '#993333',
            strokeWidth: '1px',
        },
        cx: 160,
        cy: 110,
        r: 20,
    },
    decorators: [ChartDecorator],
}
