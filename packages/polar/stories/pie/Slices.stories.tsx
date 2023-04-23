import { Slices } from '../../src'
import { ChartPieDecorator, ChartDoughnutDecorator } from './decorators'

export default {
    title: 'Addons/Polar/Pie/Slices',
    component: Slices,
}

export const Default = {
    name: 'default',
    args: {},
    decorators: [ChartDoughnutDecorator],
}

export const SelectedIds = {
    name: 'selected ids',
    args: {
        ids: ['alpha', 'gamma'],
    },
    decorators: [ChartDoughnutDecorator],
}

export const RoundedCorners = {
    name: 'rounded corners',
    args: {
        r: 6,
        padAngle: 0.05,
    },
    decorators: [ChartDoughnutDecorator],
}

export const Styled = {
    name: 'styled',
    args: {
        style: {
            strokeWidth: 2,
            stroke: '#222',
            fillOpacity: 0.7,
        },
    },
    decorators: [ChartPieDecorator],
}
