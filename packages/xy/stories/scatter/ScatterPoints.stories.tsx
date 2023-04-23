import { Triangle } from '@chsk/annotation'
import { ScatterPoints } from '../../src'
import { ChartScatterDecorator, onScatterClick } from './decorators'

export default {
    title: 'Addons/XY/Scatter/ScatterPoints',
    component: ScatterPoints,
}

export const EntireDataset = {
    name: 'entire dataset',

    args: {
        symbolStyle: {
            stroke: '#333333',
            strokeWidth: 1,
        },
    },

    component: ScatterPoints,
    decorators: [ChartScatterDecorator],
}

export const SingleSeries = {
    name: 'single series',
    args: {
        ids: ['quadratic'],
        symbolStyle: {
            stroke: '#333333',
            strokeWidth: 1,
        },
    },
    decorators: [ChartScatterDecorator],
}

export const Symbol = {
    name: 'symbol',
    args: {
        ids: ['quadratic'],
        symbolStyle: {
            stroke: '#222222',
            strokeWidth: 1,
        },
        symbol: Triangle,
    },
    decorators: [ChartScatterDecorator],
}

export const MouseClick = {
    name: 'mouse click',
    args: {
        onClick: onScatterClick,
    },
    decorators: [ChartScatterDecorator],
}
