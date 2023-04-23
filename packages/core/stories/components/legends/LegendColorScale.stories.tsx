import { LegendColorScale } from '../../../src'
import { ChartWithColorLegendDecorator } from './decorators'

export default {
    title: 'Core/Components/Legends/LegendColorScale',
    component: LegendColorScale,
}

export const Bottom = {
    name: 'bottom',
    args: {
        variant: 'bottom',
        position: [0, 0],
        size: [80, 12],
        horizontal: true,
    },
    decorators: [ChartWithColorLegendDecorator],
}

export const Top = {
    name: 'top',
    args: {
        variant: 'top',
        position: [0, 24],
        size: [80, 12],
        horizontal: true,
    },
    decorators: [ChartWithColorLegendDecorator],
}

export const Left = {
    name: 'left',
    args: {
        variant: 'left',
        position: [60, 24],
        size: [12, 100],
        horizontal: false,
    },
    decorators: [ChartWithColorLegendDecorator],
}

export const Right = {
    name: 'right',
    args: {
        variant: 'right',
        position: [0, 24],
        size: [12, 100],
        horizontal: false,
    },
    decorators: [ChartWithColorLegendDecorator],
}

export const TuningTicks = {
    name: 'tuning ticks',
    args: {
        variant: 'bottom',
        horizontal: true,
        position: [0, 0],
        size: [80, 12],
        ticks: 3,
        tickSize: 0,
        labelOffset: 6,
        style: {
            strokeWidth: 1,
            stroke: '#222222',
        },
    },
    decorators: [ChartWithColorLegendDecorator],
}
