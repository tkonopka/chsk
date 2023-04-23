import { Label } from '../../../src'
import { ChartDecorator } from '../decorators'
import { ChartForLabelDecorator, ChartForAnchoredLabelDecorator } from './decorators'

export default {
    title: 'Core/Components/Text/Label',
    component: Label,
}

export const Default = {
    name: 'default',
    args: {
        position: [0, 0],
        children: 'label',
    },
    decorators: [ChartDecorator],
}

export const AlignedMiddleLeft = {
    name: 'aligned middle-left',
    args: {
        position: [160, 110],
        size: [160, 50],
        padding: [5, 15, 5, 15],
        align: [0, 0.5],
        style: {
            textAnchor: 'start',
        },
        children: 'abc abc',
    },
    decorators: [ChartForLabelDecorator],
}

export const AlignedMiddleRight = {
    name: 'aligned middle-right',
    args: {
        position: [160, 110],
        size: [160, 50],
        padding: [5, 15, 5, 15],
        align: [1, 0.5],

        style: {
            textAnchor: 'end',
        },

        children: 'abc abc',
    },
    decorators: [ChartForLabelDecorator],
}

export const AnchoredTopLeft = {
    name: 'anchored top-left',
    args: {
        position: [160, 110],
        size: [160, 50],
        padding: [5, 15, 5, 15],
        align: [0, 0.5],
        anchor: [0, 0],
        style: {
            textAnchor: 'start',
        },
        children: 'abc abc',
    },
    decorators: [ChartForAnchoredLabelDecorator],
}
