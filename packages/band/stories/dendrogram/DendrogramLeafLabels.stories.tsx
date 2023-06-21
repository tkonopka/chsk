import { BoxedLabel } from '@chsk/annotation'
import { DendrogramLeafLabels } from '../../src'
import { ChartDendrogramTreeDecorator, ChartDendrogramTreeHangDecorator } from './decorators'

export default {
    title: 'Addons/Band/Dendrogram/DendrogramLeafLabels',
    component: DendrogramLeafLabels,
}

export const Position = {
    name: 'subset',
    args: {
        offset: [6, 0],
        style: {
            textAnchor: 'start',
        },
    },
    decorators: [ChartDendrogramTreeDecorator],
}

export const Subset = {
    name: 'subset',
    args: {
        ids: ['gamma', 'delta', 'epsilon'],
        offset: [6, 0],
        style: {
            textAnchor: 'start',
        },
    },
    decorators: [ChartDendrogramTreeDecorator],
}

export const Hang = {
    name: 'hang',
    args: {
        offset: [6, 0],
        style: {
            textAnchor: 'start',
        },
    },
    decorators: [ChartDendrogramTreeHangDecorator],
}

export const Boxed = {
    name: 'boxed label',
    args: {
        offset: [0, 0],
        anchor: [0, 0.5],
        size: [55, 25],
        component: BoxedLabel,
        style: {
            textAnchor: 'start',
        },
    },
    decorators: [ChartDendrogramTreeHangDecorator],
}
