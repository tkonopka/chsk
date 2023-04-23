import { ScatterErrors } from '../../src'
import { ChartForErrorsDecorator } from './decorators'

export default {
    title: 'Addons/XY/Scatter/ScatterErrors',
    component: ScatterErrors,
}

export const X = {
    name: 'x',
    args: {
        variant: 'x',
        lower: 'xlo',
        upper: 'xhi',
    },
    decorators: [ChartForErrorsDecorator],
}

export const Y = {
    name: 'y',
    args: {
        variant: 'y',
        lower: 'ylo',
        upper: 'yhi',
    },
    decorators: [ChartForErrorsDecorator],
}

export const Caps = {
    name: 'caps',
    args: {
        variant: 'y',
        lower: 'ylo',
        upper: 'yhi',
        capWidth: 8,
    },
    decorators: [ChartForErrorsDecorator],
}

export const Styles = {
    name: 'styles',
    args: {
        variant: 'y',
        lower: 'ylo',
        upper: 'yhi',
        capWidth: 8,
        style: {
            stroke: '#444444',
            strokeWidth: 3,
        },
    },
    decorators: [ChartForErrorsDecorator],
}
