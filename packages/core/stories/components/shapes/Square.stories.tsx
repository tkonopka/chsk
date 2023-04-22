import type { Meta, StoryObj } from '@storybook/react'
import { Square } from '../../../src'
import { ChartDecorator } from '../decorators'

const meta: Meta<typeof Square> = {
    title: 'Core/Components/Shapes/Square',
    component: Square,
}
export default meta
type Story = StoryObj<typeof Square>

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
