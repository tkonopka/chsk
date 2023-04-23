import { Slice } from '../../src'
import { ChartPieDecorator } from './decorators'

export default {
    title: 'Addons/Polar/Pie/Slice',
    component: Slice,
}

export const QuarterCircleDegrees = {
    name: 'quarter circle, degrees',
    args: {
        innerRadius: 40,
        outerRadius: 80,
        startAngle: 0,
        endAngle: 90,
        angleUnit: 'degree',
    },
    decorators: [ChartPieDecorator],
}

export const HalfCircleRadians = {
    name: 'half circle radians',
    args: {
        innerRadius: 40,
        outerRadius: 80,
        startAngle: 0,
        endAngle: Math.PI,
        angleUnit: 'radian',
    },
    decorators: [ChartPieDecorator],
}

export const RoundedCorners = {
    name: 'rounded corners',
    args: {
        innerRadius: 40,
        outerRadius: 80,
        r: 8,
        startAngle: 0,
        endAngle: Math.PI * 1.4,
    },
    decorators: [ChartPieDecorator],
}

export const SmallAnglePadding = {
    name: 'small angle padding',
    args: {
        innerRadius: 40,
        outerRadius: 80,
        padAngle: 0.1,
        startAngle: -Math.PI / 2,
        endAngle: Math.PI / 2,
    },
    decorators: [ChartPieDecorator],
}

export const LargeAnglePadding = {
    name: 'large angle padding',
    args: {
        innerRadius: 40,
        outerRadius: 80,
        padAngle: 1,
        startAngle: -Math.PI / 2,
        endAngle: Math.PI / 2,
    },
    decorators: [ChartPieDecorator],
}
