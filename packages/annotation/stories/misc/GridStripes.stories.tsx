import { GridStripes } from '../../src'
import { ChartLinearViewDecorator, ChartBandViewDecorator } from '../decorators'

export default {
    title: 'Addons/Annotation/Misc/GridStripes',
    component: GridStripes,
}

export const X = {
    name: 'x',
    args: {
        variant: 'x',
        style: {
            fill: '#ffdddd',
        },
    },
    decorators: [ChartLinearViewDecorator],
}

export const Y = {
    name: 'y',
    args: {
        variant: 'y',
        style: { fill: '#ffdddd' },
    },
    decorators: [ChartLinearViewDecorator],
}

export const Even = {
    name: 'even',
    args: {
        variant: 'x',
        parity: 'even',
        style: { fill: '#ffdddd' },
    },
    decorators: [ChartLinearViewDecorator],
}

export const Odd = {
    name: 'odd',
    args: {
        variant: 'x',
        parity: 'odd',
        style: { fill: '#ffdddd' },
    },
    decorators: [ChartLinearViewDecorator],
}

export const BetweenBands = {
    name: 'between bands',
    args: {
        variant: 'x',
        style: { fill: '#ffdddd' },
    },
    decorators: [ChartBandViewDecorator],
}

export const CenteredOnBands = {
    name: 'centered on bands',
    args: {
        variant: 'x',
        parity: 'even',
        shift: [-0.5],
        style: { fill: '#ffdddd' },
    },
    decorators: [ChartBandViewDecorator],
}
