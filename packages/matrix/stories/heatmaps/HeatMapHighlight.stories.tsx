import { HeatMapHighlight } from '../../src'
import {
    ChartHeatMapCellsDecorator,
    ChartHeatMapPaddedCellsDecorator,
    ChartHeatMapCellsTooltipDecorator,
} from '../decorators'

export default {
    title: 'Addons/Matrix/HeatMaps/HeatMapHighlight',
    component: HeatMapHighlight,
}

export const Default = {
    name: 'default',
    args: {
        style: {
            fill: '#222222',
            opacity: 0.7,
        },
    },
    decorators: [ChartHeatMapCellsDecorator],
}

export const Padding = {
    name: 'padding',
    args: {
        style: {
            fill: '#992222',
            opacity: 0.3,
        },
    },
    decorators: [ChartHeatMapPaddedCellsDecorator],
}

export const DataSubsets = {
    name: 'data subsets',
    args: {
        ids: ['alpha', 'beta'],
        style: {
            fill: '#222222',
            opacity: 0.7,
        },
    },
    decorators: [ChartHeatMapCellsDecorator],
}

export const Static = {
    name: 'static',
    args: {
        ids: ['alpha'],
        keys: ['z'],
        interactive: false,
        style: {
            fill: '#222222',
            opacity: 0.9,
        },
    },
    decorators: [ChartHeatMapCellsDecorator],
}

export const EdgeAnimation = {
    name: 'edge animation',
    args: {
        edgeAnimation: true,
        style: {
            fill: '#222222',
            opacity: 0.9,
        },
    },
    decorators: [ChartHeatMapCellsDecorator],
}

export const Tooltip = {
    name: 'tooltip',
    decorators: [ChartHeatMapCellsTooltipDecorator],
}
