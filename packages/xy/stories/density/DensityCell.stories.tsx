import { DensityCell } from '../../src'
import { ChartCellDecorator } from './decorators'

export default {
    title: 'Addons/XY/Density/DensityCell',
    component: DensityCell,
}

export const One = {
    name: 'one point',
    args: {
        value: 1,
        x: 20,
        y: 20,
        width: 40,
        height: 40,
        style: { fill: '#666666' },
    },
    component: DensityCell,
    decorators: [ChartCellDecorator],
}

export const Two = {
    name: 'two points',
    args: {
        value: 2,
        x: 20,
        y: 20,
        width: 40,
        height: 40,
        style: { fill: '#666666' },
    },
    component: DensityCell,
    decorators: [ChartCellDecorator],
}
