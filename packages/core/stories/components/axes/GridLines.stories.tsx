import { GridLines } from '../../../src'
import { ChartBandViewDecorator, ChartViewDecorator } from '../decorators'

export default {
    title: 'Core/Components/Axes/GridLines',
    component: GridLines,
}

export const GridX = {
    name: 'grid x',
    args: {
        variant: 'x',
    },
    decorators: [ChartViewDecorator],
}

export const GridY = {
    name: 'grid y',
    args: {
        variant: 'y',
    },
    decorators: [ChartViewDecorator],
}

export const DashedGridLines = {
    name: 'dashed grid lines',
    args: {
        variant: 'y',
        values: 4,
        style: {
            strokeDasharray: '4 4',
            stroke: '#222222',
        },
    },
    decorators: [ChartViewDecorator],
}

export const NegativeLines = {
    name: 'negative lines',
    args: {
        variant: 'y',
        values: 5,
        style: {
            strokeWidth: 2,
            stroke: '#ffffff',
        },
    },
    decorators: [ChartViewDecorator],
}

export const CustomPositions = {
    name: 'custom positions',
    args: {
        variant: 'x',
        values: [0, 65, 85, 95, 100],
        style: {
            stroke: '#777777',
        },
    },
    decorators: [ChartViewDecorator],
}

export const LineExtent = {
    name: 'line extent',
    args: {
        expansion: [10, 25],
        style: {
            stroke: '#555555',
        },
    },
    decorators: [ChartViewDecorator],
}

export const Band = {
    name: 'band',
    args: {
        variant: 'y',
        style: {
            stroke: '#aaaaaa',
        },
    },
    decorators: [ChartBandViewDecorator],
}

export const BetweenBands = {
    name: 'between bands',
    args: {
        variant: 'y',
        shift: [-0.5, 0.5],
        style: {
            stroke: '#aaaaaa',
        },
    },
    decorators: [ChartBandViewDecorator],
}
