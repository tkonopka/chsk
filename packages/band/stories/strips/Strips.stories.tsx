import { Square } from '@chsk/core'
import { Strips } from '../../src'
import { ChartStripDecorator, onStripsClick } from './decorators'

export default {
    title: 'Addons/Band/Strips/Strips',
    component: Strips,
}

export const SelectedIds = {
    name: 'selected ids',
    args: {
        ids: ['alpha'],
        symbolStyle: {
            strokeWidth: 1,
            stroke: '#222222',
        },
    },
    decorators: [ChartStripDecorator],
}

export const SelectedKeys = {
    name: 'selected keys',
    args: {
        keys: ['x'],
        symbolStyle: {
            strokeWidth: 1,
            stroke: '#222222',
        },
    },
    decorators: [ChartStripDecorator],
}

export const Symbols = {
    name: 'symbols',
    args: {
        component: Square,
        symbolStyle: {
            strokeWidth: 1,
            stroke: '#222222',
        },
    },
    decorators: [ChartStripDecorator],
}

export const MouseClick = {
    name: 'mouse click',
    args: {
        handlers: {
            onClick: onStripsClick,
        },
    },
    decorators: [ChartStripDecorator],
}
