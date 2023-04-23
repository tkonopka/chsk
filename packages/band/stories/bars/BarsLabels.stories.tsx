import { BarsLabels } from '../../src'
import { ChartForBarsLabelsDecorator } from './decorators'

export default {
    title: 'Addons/Band/Bars/BarsLabels',
    component: BarsLabels,
}

export const Default = {
    name: 'default',
    args: {
        minSize: [40, 10],
    },
    decorators: [ChartForBarsLabelsDecorator],
}

export const NearBaseline = {
    name: 'near baseline',
    args: {
        padding: [2, 8, 2, 8],
        align: [0, 0.5],
        style: {
            fill: '#ffffff',
            textAnchor: 'start',
        },
        styleOuter: {
            fill: '#222222',
            textAnchor: 'start',
        },
    },
    decorators: [ChartForBarsLabelsDecorator],
}

export const NearEdge = {
    name: 'near edge',
    args: {
        padding: [2, 8, 2, 8],
        align: [1, 0.5],
        style: {
            fill: '#ffffff',
            textAnchor: 'end',
        },
        styleOuter: {
            fill: '#222222',
            textAnchor: 'start',
        },
    },
    decorators: [ChartForBarsLabelsDecorator],
}

export const SomeLabelsOutsideBars = {
    name: 'some labels outside bars',
    args: {
        padding: [2, 8, 2, 8],
        align: [0, 0.5],
        showOuter: true,
        style: {
            fill: '#ffffff',
            textAnchor: 'start',
        },
        styleOuter: {
            fill: '#222222',
            textAnchor: 'start',
        },
    },
    decorators: [ChartForBarsLabelsDecorator],
}

export const AllLabelsOutsideBars = {
    name: 'all labels outside bars',
    args: {
        padding: [2, 0, 2, 0],
        align: [1, 0.5],
        minSize: [0, 0],
        offset: [8, 0],
        style: {
            fill: '#222222',
            textAnchor: 'start',
        },
    },
    decorators: [ChartForBarsLabelsDecorator],
}

export const SelectedLabels = {
    name: 'selected labels',
    args: {
        ids: ['beta', 'delta'],
        padding: [2, 8, 2, 8],
        align: [0, 0.5],
        showOuter: true,
        style: {
            fill: '#ffffff',
            textAnchor: 'start',
        },
    },
    decorators: [ChartForBarsLabelsDecorator],
}
