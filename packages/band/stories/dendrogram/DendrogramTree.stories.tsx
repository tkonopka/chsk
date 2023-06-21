import { DendrogramTree } from '../../src'
import { ChartDendrogramDecorator } from './decorators'

export default {
    title: 'Addons/Band/Dendrogram/DendrogramTree',
    component: DendrogramTree,
}

export const Styling = {
    name: 'top',
    args: {
        style: { stroke: '#dd0000', strokeWidth: 2 },
    },
    decorators: [ChartDendrogramDecorator],
}
