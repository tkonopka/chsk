import { AxisTicks } from '../../../src'
import { ChartBottomAxisDecorator } from './decorators'

export default {
    title: 'Core/Components/Axes/AxisTicks',
    component: AxisTicks,
}

export const Default = {
    name: 'default',
    args: {
        variant: 'bottom',
    },
    decorators: [ChartBottomAxisDecorator],
}

export const Number = {
    name: 'number',
    args: {
        variant: 'bottom',
        ticks: 10,
    },
    decorators: [ChartBottomAxisDecorator],
}

export const Positions = {
    name: 'positions',
    args: {
        variant: 'bottom',
        ticks: [0, 20, 50, 90, 100],
    },
    decorators: [ChartBottomAxisDecorator],
}

export const TickSize = {
    name: 'tick size',
    args: {
        variant: 'bottom',
        tickSize: 15,
        labelDistance: 20,
    },
    decorators: [ChartBottomAxisDecorator],
}

export const LabelDistance = {
    name: 'label distance',
    args: {
        variant: 'bottom',
        labelDistance: 25,
    },
    decorators: [ChartBottomAxisDecorator],
}

export const LabelOffset = {
    name: 'label offset',
    args: {
        variant: 'bottom',
        labelDistance: 5,
        labelOffset: [10, 5],
    },
    decorators: [ChartBottomAxisDecorator],
}

export const Rotation = {
    name: 'rotation',
    args: {
        variant: 'bottom',
        labelDistance: 10,
        labelAngle: -90,
        labelStyle: {
            textAnchor: 'end',
            dominantBaseline: 'middle',
        },
    },
    decorators: [ChartBottomAxisDecorator],
}

export const Format = {
    name: 'format',
    args: {
        variant: 'bottom',
        labelDistance: 10,
        labelFormat: (v: number) => v + '%',
    },
    decorators: [ChartBottomAxisDecorator],
}
