import { HeatMapSurface } from '../../src'
import { ChartHeatMapCellsDecorator } from '../decorators'

export default {
    title: 'Addons/Matrix/HeatMaps/HeatMapSurface',
    component: HeatMapSurface,
}

export const Default = {
    name: 'default',
    args: {
        style: {
            fillOpacity: 0,
            stroke: '#2222dd',
            strokeWidth: 4,
        },
    },
    decorators: [ChartHeatMapCellsDecorator],
}

export const Expanded = {
    name: 'expanded',
    args: {
        expansion: [
            [0.5, 0.5],
            [0.5, 0.5],
        ],
        style: {
            fillOpacity: 0,
            stroke: '#2222dd',
            strokeWidth: 4,
        },
    },
    decorators: [ChartHeatMapCellsDecorator],
}

export const Selection = {
    name: 'selection',
    args: {
        ids: ['alpha', 'beta', 'gamma'],
        keys: ['x', 'y'],
        expansion: [
            [0.5, 0.5],
            [0.5, 0.5],
        ],
        style: {
            fillOpacity: 0,
            stroke: '#2222dd',
            strokeWidth: 4,
        },
    },
    decorators: [ChartHeatMapCellsDecorator],
}
