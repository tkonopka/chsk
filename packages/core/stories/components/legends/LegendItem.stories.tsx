import { LegendItem, Circle } from '../../../src'
import { ChartWithRightLegendDecorator } from './decorators'

export default {
    title: 'Core/Components/Legends/LegendItem',
    component: LegendItem,
}

export const Right = {
    name: 'right',
    args: {
        variant: 'right',
        position: [0, 16],
        size: [80, 28],
        r: 10,
        symbolStyle: {
            fill: '#f0f0f0',
            stroke: '#222222',
            strokeWidth: 1,
        },
        label: 'right',
        labelDistance: 8,
        labelStyle: {
            textAnchor: 'start',
        },
    },
    decorators: [ChartWithRightLegendDecorator],
}

export const Left = {
    name: 'left',
    args: {
        variant: 'left',
        position: [0, 16],
        size: [80, 42],
        r: 9,
        symbolStyle: {
            fill: '#f0f0f0',
            stroke: '#222222',
            strokeWidth: 1,
        },
        label: 'left',
        labelDistance: 8,
        labelStyle: {
            textAnchor: 'end',
        },
    },
    decorators: [ChartWithRightLegendDecorator],
}

export const Bottom = {
    name: 'bottom',
    args: {
        variant: 'bottom',
        position: [0, 16],
        size: [80, 42],
        r: 9,
        symbolStyle: {
            fill: '#f0f0f0',
            stroke: '#222222',
            strokeWidth: 1,
        },
        label: 'bottom',
        labelDistance: 12,
        labelStyle: {
            textAnchor: 'middle',
        },
    },
    decorators: [ChartWithRightLegendDecorator],
}

export const Top = {
    name: 'top',
    args: {
        variant: 'top',
        position: [0, 16],
        size: [80, 42],
        r: 9,
        symbolStyle: {
            fill: '#f0f0f0',
            stroke: '#222222',
            strokeWidth: 1,
        },
        label: 'top',
        labelDistance: 12,
        labelStyle: {
            textAnchor: 'middle',
        },
    },
    decorators: [ChartWithRightLegendDecorator],
}

export const Symbol = {
    name: 'circle',
    args: {
        variant: 'right',
        position: [0, 16],
        size: [80, 28],
        r: 9,
        symbol: Circle,
        symbolStyle: {
            fill: '#dd3333',
            strokeWidth: 0,
        },
        label: 'circle',
        labelDistance: 8,
    },
    decorators: [ChartWithRightLegendDecorator],
}

export const NoSymbol = {
    name: 'no symbol',
    args: {
        variant: 'right',
        position: [0, 16],
        size: [80, 28],
        r: 0,
        symbol: () => null,
        label: 'no symbol',
        labelDistance: 0,
    },
    decorators: [ChartWithRightLegendDecorator],
}
