import { Quantiles, BarAndWhisker, BoxAndWhiskers, LineAndWhiskers } from '../../src'
import {
    ChartQuantileDecorator,
    ChartHorizontalQuantileDecorator,
    onQuantilesClick,
} from './decorators'

export default {
    title: 'Addons/Band/Quantiles/Quantiles',
    component: Quantiles,
}

export const BoxesVertical = {
    name: 'boxes, vertical',
    args: {
        middleStyle: {
            strokeWidth: 2,
            stroke: '#222222',
        },
        component: BoxAndWhiskers,
    },
    decorators: [ChartQuantileDecorator],
}

export const BoxesHorizontal = {
    name: 'boxes, horizontal',
    args: {
        middleStyle: {
            strokeWidth: 2,
            stroke: '#222222',
        },
        component: BoxAndWhiskers,
    },
    component: Quantiles,
    decorators: [ChartHorizontalQuantileDecorator],
}

export const BarsVertical = {
    name: 'bars, vertical',
    args: {
        boxStyle: {
            strokeWidth: 1,
        },
        whiskerStyle: {
            strokeWidth: 1,
        },
        component: BarAndWhisker,
    },
    decorators: [ChartQuantileDecorator],
}

export const BarsHorizontal = {
    name: 'bars, horizontal',
    args: {
        boxStyle: {
            strokeWidth: 1,
        },
        whiskerStyle: {
            strokeWidth: 1,
        },
        component: BarAndWhisker,
    },
    decorators: [ChartHorizontalQuantileDecorator],
}

export const LinesVertical = {
    name: 'lines, vertical',
    args: {
        middleStyle: {
            strokeWidth: 3,
        },
        whiskerStyle: {
            strokeWidth: 1,
        },
        component: LineAndWhiskers,
    },
    decorators: [ChartQuantileDecorator],
}

export const LinesHorizontal = {
    name: 'lines, horizontal',
    args: {
        middleStyle: {
            strokeWidth: 3,
        },
        whiskerStyle: {
            strokeWidth: 1,
        },
        component: LineAndWhiskers,
    },
    decorators: [ChartHorizontalQuantileDecorator],
}

export const SelectedIds = {
    name: 'selected ids',
    args: {
        ids: ['alpha'],
        middleStyle: {
            strokeWidth: 3,
            stroke: '#444444',
        },
        whiskerStyle: {
            strokeWidth: 2,
        },
        boxStyle: {
            strokeWidth: 0.5,
            stroke: '#444444',
        },
    },
    decorators: [ChartQuantileDecorator],
}

export const SelectedKeys = {
    name: 'selected keys',
    args: {
        keys: ['x'],
        middleStyle: {
            strokeWidth: 3,
            stroke: '#444444',
        },
        whiskerStyle: {
            strokeWidth: 2,
        },
        boxStyle: {
            strokeWidth: 0.5,
            stroke: '#444444',
        },
    },
    decorators: [ChartQuantileDecorator],
}

export const WhiskerCap = {
    name: 'whisker cap',
    args: {
        middleStyle: {
            strokeWidth: 3,
            stroke: '#444444',
        },
        whiskerStyle: {
            strokeWidth: 2,
        },
        boxStyle: {
            strokeWidth: 0.5,
            stroke: '#444444',
        },
        whiskerCapWidth: 0.5,
    },
    decorators: [ChartQuantileDecorator],
}

export const MouseClick = {
    name: 'mouse click',
    args: {
        middleStyle: {
            strokeWidth: 3,
            stroke: '#222222',
        },
        whiskerStyle: {
            strokeWidth: 2,
        },
        handlers: {
            onClick: onQuantilesClick,
        },
    },
    decorators: [ChartQuantileDecorator],
}
