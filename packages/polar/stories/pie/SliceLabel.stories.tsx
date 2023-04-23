import { SliceLabel } from '../../src'
import { ChartDoughnutSlicesDecorator } from './decorators'

export default {
    title: 'Addons/Polar/Pie/SliceLabel',
    component: SliceLabel,
}

export const LabelPosition = {
    name: 'label position',
    args: {
        innerRadius: 120,
        outerRadius: 120,
        startAngle: -90,
        endAngle: 0,
        angleUnit: 'degree',
        align: [0.5, 0.5],
        children: 'label',
    },
    decorators: [ChartDoughnutSlicesDecorator],
}

export const LeftAligned = {
    name: 'left-aligned',
    args: {
        innerRadius: 120,
        outerRadius: 120,
        startAngle: -90,
        endAngle: 0,
        angleUnit: 'degree',
        align: [0.5, 0],
        children: 'label',
    },
    decorators: [ChartDoughnutSlicesDecorator],
}

export const Styled = {
    name: 'styled',
    args: {
        innerRadius: 120,
        outerRadius: 120,
        startAngle: -90,
        endAngle: 0,
        angleUnit: 'degree',
        align: [0.5, 0.5],
        children: 'label',
        style: {
            fill: '#000000',
            fontSize: '14px',
            fontWeight: 600,
        },
    },
    component: SliceLabel,
    decorators: [ChartDoughnutSlicesDecorator],
}
