import { HeatMapCells, HeatMapColorRectangle } from '../../src'
import { ChartHeatMapDecorator } from '../decorators'

export default {
    title: 'Addons/Matrix/HeatMaps/HeatMapColorRectangle',
    component: HeatMapCells,
}

export const Example = {
    name: 'rectangle',
    args: {
        style: {
            strokeWidth: 1,
            stroke: '#222222',
        },
        cell: HeatMapColorRectangle,
    },
    component: HeatMapCells,
    decorators: [ChartHeatMapDecorator],
}
