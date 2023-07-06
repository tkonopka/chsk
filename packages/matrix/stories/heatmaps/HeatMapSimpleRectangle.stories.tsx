import { HeatMapCells, HeatMapRectangle } from '../../src'
import { ChartHeatMapDecorator } from '../decorators'

export default {
    title: 'Addons/Matrix/HeatMaps/HeatMapSimpleRectangle',
    component: HeatMapCells,
}

export const Example = {
    name: 'rectangle',
    args: {
        style: {
            strokeWidth: 1,
            stroke: '#222222',
        },
        component: HeatMapRectangle,
    },
    component: HeatMapCells,
    decorators: [ChartHeatMapDecorator],
}
