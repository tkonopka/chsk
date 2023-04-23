import { TooltipItem, Circle } from '../../../src'
import { ChartWithDetectorWithTooltipDecorator } from './decorators'

export default {
    title: 'Core/Components/Tooltips/TooltipItem',
    component: TooltipItem,
}

export const Right = {
    name: 'right',
    args: {
        variant: 'right',
        position: [0, 0],
        size: [100, 28],
        padding: [6, 6, 6, 6],
        r: 10,
        symbolStyle: {
            fill: '#f0f0f0',
            stroke: '#222222',
            strokeWidth: 1,
        },
        label: 'right',
        labelOffset: 14,
        labelStyle: {
            textAnchor: 'start',
        },
    },
    decorators: [ChartWithDetectorWithTooltipDecorator],
}

export const Left = {
    name: 'left',
    args: {
        variant: 'left',
        position: [0, 0],
        size: [100, 28],
        padding: [6, 6, 6, 6],
        r: 9,
        symbolStyle: {
            fill: '#f0f0f0',
            stroke: '#222222',
            strokeWidth: 1,
        },
        label: 'left',
        labelOffset: 14,
        labelStyle: {
            textAnchor: 'end',
        },
    },
    decorators: [ChartWithDetectorWithTooltipDecorator],
}

export const Bottom = {
    name: 'bottom',
    args: {
        variant: 'bottom',
        position: [0, 0],
        size: [100, 42],
        padding: [6, 6, 6, 6],
        r: 9,
        symbolStyle: {
            fill: '#f0f0f0',
            stroke: '#222222',
            strokeWidth: 1,
        },
        label: 'bottom',
        labelOffset: 18,
        labelStyle: {
            textAnchor: 'middle',
        },
    },
    decorators: [ChartWithDetectorWithTooltipDecorator],
}

export const Top = {
    name: 'top',
    args: {
        variant: 'top',
        position: [0, 0],
        size: [100, 42],
        padding: [6, 6, 6, 6],
        r: 9,
        offset: [0, 16],
        symbolStyle: {
            fill: '#f0f0f0',
            stroke: '#222222',
            strokeWidth: 1,
        },
        label: 'top',
        labelOffset: 18,
        labelStyle: {
            textAnchor: 'middle',
        },
    },
    decorators: [ChartWithDetectorWithTooltipDecorator],
}

export const Symbol = {
    name: 'circle',
    args: {
        variant: 'right',
        position: [0, 0],
        size: [100, 28],
        padding: [6, 6, 6, 6],
        r: 9,
        symbol: Circle,
        symbolStyle: {
            fill: '#dd3333',
            strokeWidth: 0,
        },
        label: 'label',
        labelOffset: 16,
    },
    decorators: [ChartWithDetectorWithTooltipDecorator],
}
