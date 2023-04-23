import { SliceLabels } from '../../src'
import { ChartPieSlicesDecorator, ChartDoughnutSlicesDecorator } from './decorators'

export default {
    title: 'Addons/Polar/Pie/SliceLabels',
    component: SliceLabels,
}

export const Doughnut = {
    name: 'doughnut',
    args: {
        align: [0.5, 0.5],
    },
    decorators: [ChartDoughnutSlicesDecorator],
}

export const Pie = {
    name: 'pie',
    args: {
        align: [0.8, 0.5],
    },
    decorators: [ChartPieSlicesDecorator],
}

export const SelectedIds = {
    name: 'selected ids',
    args: {
        ids: ['alpha', 'gamma'],
    },
    decorators: [ChartDoughnutSlicesDecorator],
}

export const MinimumAngle = {
    name: 'minimum angle',
    args: {
        minAngle: 80,
        angleUnit: 'degree',
    },
    decorators: [ChartDoughnutSlicesDecorator],
}

export const Styled = {
    name: 'styled',
    args: {
        style: {
            fill: '#ffffff',
            fontSize: '14px',
            fontWeight: 600,
        },
    },
    decorators: [ChartDoughnutSlicesDecorator],
}
