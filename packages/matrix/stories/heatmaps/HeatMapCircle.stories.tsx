import { HeatMapCells, HeatMapCircle } from '../../src'
import { ChartHeatMapDecorator } from '../decorators'

export default {
    title: 'Addons/Matrix/HeatMaps/HeatMapCircle',
    component: HeatMapCells,
}

export const Example = {
    name: 'circles',
    args: {
        style: {
            strokeWidth: 1,
            stroke: '#222222',
        },
        cell: HeatMapCircle,
    },
    component: HeatMapCells,
    decorators: [ChartHeatMapDecorator],
}
