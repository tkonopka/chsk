import { Violins } from '../../src/violins'
import { ChartViolinDecorator } from './decorators'

export default {
    title: 'Addons/Band/Violins/Violins',
    component: Violins,
}

export const Smooth = {
    name: 'smooth',
    args: {
        variant: 'smooth',
    },
    decorators: [ChartViolinDecorator],
}

export const Step = {
    name: 'step',
    args: {
        variant: 'step',
    },
    decorators: [ChartViolinDecorator],
}

export const SelectedIds = {
    name: 'selected ids',
    args: {
        ids: ['alpha'],
        style: {
            strokeWidth: 1,
            stroke: '#222222',
            fillOpacity: 1,
        },
    },
    decorators: [ChartViolinDecorator],
}

export const SelectedKeys = {
    name: 'selected keys',
    args: {
        keys: ['x'],
        style: {
            strokeWidth: 1,
            stroke: '#222222',
            fillOpacity: 1,
        },
    },
    decorators: [ChartViolinDecorator],
}
