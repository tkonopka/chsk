import { Distributions, BarAndWhisker, BoxAndWhiskers, LineAndWhiskers } from '../../src'
import {
    ChartDistributionDecorator,
    ChartHorizontalDistributionDecorator,
    onDistributionsClick,
} from './decorators'

export default {
    title: 'Addons/Band/Distributions/Distributions',
    component: Distributions,
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
    decorators: [ChartDistributionDecorator],
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
    component: Distributions,
    decorators: [ChartHorizontalDistributionDecorator],
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
    decorators: [ChartDistributionDecorator],
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
    decorators: [ChartHorizontalDistributionDecorator],
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
    decorators: [ChartDistributionDecorator],
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
    decorators: [ChartHorizontalDistributionDecorator],
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
    decorators: [ChartDistributionDecorator],
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
    decorators: [ChartDistributionDecorator],
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
    decorators: [ChartDistributionDecorator],
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
            onClick: onDistributionsClick,
        },
    },
    decorators: [ChartDistributionDecorator],
}
