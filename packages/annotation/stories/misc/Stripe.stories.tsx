import { Stripe } from '../../src'
import { ChartLinearViewDecorator, ChartBandViewDecorator } from '../decorators'

export default {
    title: 'Addons/Annotation/Misc/Stripe',
    component: Stripe,
}

export const X = {
    name: 'x',
    args: {
        variant: 'x',
        domain: [20, 60],
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
        domain: [20, 60],
        style: { fill: '#ffdddd' },
    },
    decorators: [ChartLinearViewDecorator],
}

export const Units = {
    name: 'units',
    args: {
        variant: 'x',
        domain: [0, 0.5],
        domainUnits: 'relative',
        style: { fill: '#ffdddd' },
    },
    decorators: [ChartLinearViewDecorator],
}

export const Expansion = {
    name: 'expansion',
    args: {
        variant: 'y',
        domain: [25, 75],
        expansion: [30, 20],
        style: { fill: '#ffdddd' },
    },
    decorators: [ChartLinearViewDecorator],
}

export const BandWithoutShift = {
    name: 'band without shift',
    args: {
        variant: 'x',
        domain: ['C', 'E'],
        style: { fill: '#ffdddd' },
    },
    decorators: [ChartBandViewDecorator],
}

export const BandWithShift = {
    name: 'band with shift',
    args: {
        variant: 'x',
        domain: ['C', 'E'],
        shift: [-0.625, 0.625],
        style: { fill: '#ffdddd' },
    },
    decorators: [ChartBandViewDecorator],
}
