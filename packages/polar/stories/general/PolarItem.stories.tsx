import { PolarItem } from '../../src'
import { ChartOriginDecorator } from './decorators'

export default {
    title: 'Addons/Polar/Polar/PolarItem',
    component: PolarItem,
}

export const Origin = {
    name: 'origin',
    args: {
        position: [0, 0],
        children: <text>label</text>,
    },
    decorators: [ChartOriginDecorator],
}

export const TwoOClock = {
    name: 'two o clock',
    args: {
        position: [100, 60],
        angleUnit: 'degrees',
        children: <text>label</text>,
    },
    decorators: [ChartOriginDecorator],
}

export const Radial = {
    name: 'radial',
    args: {
        radial: true,
        position: [100, 60],
        angleUnit: 'degrees',
        children: <text>label</text>,
    },
    decorators: [ChartOriginDecorator],
}

export const Tangential = {
    name: 'tangential',
    args: {
        tangential: true,
        position: [100, 60],
        angleUnit: 'degrees',
        children: <text>label</text>,
    },
    decorators: [ChartOriginDecorator],
}

export const RadialLeftHemisphere = {
    name: 'radial, left hemisphere',
    args: {
        radial: true,
        position: [100, -60],
        angleUnit: 'degrees',
        children: <text>label</text>,
    },
    decorators: [ChartOriginDecorator],
}

export const TangentBottomHemisphere = {
    name: 'tangent, bottom hemisphere',
    args: {
        tangential: true,
        position: [100, 120],
        angleUnit: 'degrees',
        children: <text>label</text>,
    },
    decorators: [ChartOriginDecorator],
}
