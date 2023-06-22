import { DendrogramTree } from '../../src'
import { ChartDendrogramDecorator } from './decorators'

export default {
    title: 'Addons/Band/Dendrogram/DendrogramTree',
    component: DendrogramTree,
}

export const AllNodes = {
    name: 'tree',
    args: {},
    decorators: [ChartDendrogramDecorator],
}

export const Levels = {
    name: 'selected levels',
    args: {
        levels: [0, 1],
    },
    decorators: [ChartDendrogramDecorator],
}

export const Keys = {
    name: 'sub tree',
    args: {
        keys: ['gamma', 'delta', 'epsilon'],
    },
    decorators: [ChartDendrogramDecorator],
}

export const Styling = {
    name: 'styling',
    args: {
        style: { stroke: '#dd0000', strokeWidth: 2 },
    },
    decorators: [ChartDendrogramDecorator],
}
