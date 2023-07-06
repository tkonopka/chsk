import { HeatMapCells, HeatMapSimpleCircle } from '../../src'
import { ChartHeatMapDecorator } from '../decorators'

export default {
    title: 'Addons/Matrix/HeatMaps/HeatMapSimpleCircle',
    component: HeatMapCells,
}

export const Example = {
    name: 'circles',
    args: {
        style: {
            strokeWidth: 1,
            stroke: '#222222',
        },
        component: HeatMapSimpleCircle,
    },
    component: HeatMapCells,
    decorators: [ChartHeatMapDecorator],
}
