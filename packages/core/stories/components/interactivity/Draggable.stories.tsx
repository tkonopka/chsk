import { Draggable } from '../../../src'
import { ChartForButtonDecorator } from './decorators'

export default {
    title: 'Core/Components/Interactivity/Draggable',
    component: Draggable,
}

export const XY = {
    name: 'xy',
    args: {
        variant: 'xy',
        children: <rect x={20} y={20} width={40} height={40} style={{ fill: '#ffcccc' }} />,
    },
    decorators: [ChartForButtonDecorator],
}

export const X = {
    name: 'x',
    args: {
        variant: 'x',
        children: <rect x={20} y={20} width={40} height={40} style={{ fill: '#ffcccc' }} />,
    },
    decorators: [ChartForButtonDecorator],
}

export const Y = {
    name: 'y',
    args: {
        variant: 'y',
        children: <rect x={20} y={20} width={40} height={40} style={{ fill: '#ffcccc' }} />,
    },
    decorators: [ChartForButtonDecorator],
}
