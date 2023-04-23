import { HeatMapCells, HeatMapRectangle } from '../../src'
import { ChartHeatMapDecorator } from '../decorators'

export default {
    title: 'Addons/Matrix/HeatMaps/HeatMapRectangle',
    component: HeatMapCells,
}

export const Rectangles = {
    name: 'rectangle',
    args: {
        style: {
            strokeWidth: 1,
            stroke: '#222222',
        },
        cell: HeatMapRectangle,
    },
    component: HeatMapCells,
    decorators: [ChartHeatMapDecorator],
}
