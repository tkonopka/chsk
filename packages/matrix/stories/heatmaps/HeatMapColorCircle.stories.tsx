import { HeatMapCells, HeatMapColorCircle } from '../../src'
import { ChartHeatMapDecorator } from '../decorators'

export default {
    title: 'Addons/Matrix/HeatMaps/HeatMapColorCircle',
    component: HeatMapCells,
}

export const Example = {
    name: 'circles',
    args: {
        style: {
            strokeWidth: 1,
            stroke: '#222222',
        },
        cell: HeatMapColorCircle,
    },
    component: HeatMapCells,
    decorators: [ChartHeatMapDecorator],
}
