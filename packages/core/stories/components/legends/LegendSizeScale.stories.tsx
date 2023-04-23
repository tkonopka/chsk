import { LegendSizeScale } from '../../../src'
import { ChartWithSizeLegendDecorator } from './decorators'

export default {
    title: 'Core/Components/Legends/LegendSizeScale',
    component: LegendSizeScale,
}

export const Bottom = {
    name: 'bottom',
    args: {
        variant: 'bottom',
        horizontal: true,
        position: [0, 0],
        itemSize: [25, 12],
        ticks: [10, 20, 30],
        labelDistance: 16,
        labelStyle: {
            textAnchor: 'middle',
        },
        symbolStyle: {
            fill: '#888888',
        },
    },
    decorators: [ChartWithSizeLegendDecorator],
}

export const Top = {
    name: 'top',
    args: {
        variant: 'top',
        horizontal: true,
        position: [0, 20],
        itemSize: [25, 12],
        ticks: [10, 20, 30],
        labelDistance: 14,
        labelStyle: {
            textAnchor: 'middle',
        },
        symbolStyle: {
            fill: '#888888',
        },
    },
    decorators: [ChartWithSizeLegendDecorator],
}

export const Left = {
    name: 'left',
    args: {
        variant: 'left',
        horizontal: false,
        position: [50, 24],
        itemSize: [12, 25],
        ticks: [10, 20, 30],
        labelDistance: 20,
        symbolStyle: {
            fill: '#888888',
        },
    },
    decorators: [ChartWithSizeLegendDecorator],
}

export const Right = {
    name: 'right',
    args: {
        variant: 'right',
        horizontal: false,
        position: [0, 24],
        itemSize: [12, 25],
        ticks: [10, 20, 30],
        symbolStyle: {
            fill: '#888888',
        },
    },
    decorators: [ChartWithSizeLegendDecorator],
}
