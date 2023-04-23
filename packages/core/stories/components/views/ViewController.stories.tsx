import { ViewController } from '../../../src'
import {
    ChartForControllerDecorator,
    ChartWithBandsForControllerDecorator,
    ChartWithTimeForControllerDecorator,
} from './decorators'

export default {
    title: 'Core/Components/Views/ViewController',
    component: ViewController,
}

export const Default = {
    name: 'default',
    args: {
        variant: 'xy',
        itemSize: [55, 26],
        itemAlign: [0, 0.5],
        itemPadding: [4, 4, 4, 4],

        itemStyle: {
            textAnchor: 'start',
        },
    },
    decorators: [ChartForControllerDecorator],
}

export const X = {
    name: 'x',
    args: {
        variant: 'x',
        itemSize: [55, 26],
        itemAlign: [0, 0.5],
        itemPadding: [4, 4, 4, 4],
        itemStyle: {
            textAnchor: 'start',
        },
    },
    decorators: [ChartForControllerDecorator],
}

export const Y = {
    name: 'y',
    args: {
        variant: 'y',
        itemSize: [55, 26],
        itemAlign: [0, 0.5],
        itemPadding: [4, 4, 4, 4],
        itemStyle: {
            textAnchor: 'start',
        },
    },
    decorators: [ChartForControllerDecorator],
}

export const CustomToolbar = {
    name: 'custom toolbar',
    args: {
        values: ['none', 'pan', 'zoom', 'reset'],
        value: 'pan',
        container: {
            position: [1, 0],
            positionUnits: 'relative',
            anchor: [1, 1],
        },
        horizontal: true,
        itemSize: [65, 26],
        itemAlign: [1, 0.5],
        itemPadding: [4, 4, 4, 4],
        itemStyle: {
            textAnchor: 'end',
        },
    },
    decorators: [ChartForControllerDecorator],
}

export const BandScales = {
    name: 'band scales',
    args: {
        value: 'pan',
        itemSize: [65, 26],
        itemAlign: [0, 0.5],
        itemPadding: [4, 4, 4, 4],
        itemStyle: {
            textAnchor: 'start',
        },
    },
    decorators: [ChartWithBandsForControllerDecorator],
}

export const TimeAndLogScales = {
    name: 'time and log scales',
    args: {
        value: 'pan',
        itemSize: [65, 26],
        itemAlign: [0, 0.5],
        itemPadding: [4, 4, 4, 4],
        itemStyle: {
            textAnchor: 'start',
        },
    },
    decorators: [ChartWithTimeForControllerDecorator],
}

export const ZoomBox = {
    name: 'zoom box',
    args: {
        variant: 'xy',
        itemSize: [55, 26],
        itemAlign: [0, 0.5],
        itemPadding: [4, 4, 4, 4],
        itemStyle: {
            textAnchor: 'start',
        },
        boxStyle: {
            strokeWidth: 2,
            strokeDasharray: 6,
            fill: '#dd2222',
        },
        value: 'zoom',
        values: ['zoom', 'reset'],
    },
    decorators: [ChartForControllerDecorator],
}
