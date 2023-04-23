import { Regression } from '../../src'
import { ChartForRegressionDecorator } from './decorators'

export default {
    title: 'Addons/XY/Scatter/Regression',
    component: Regression,
}

export const AllSeries = {
    name: 'all series',
    args: {
        style: {
            strokeWidth: 3,
        },
    },
    decorators: [ChartForRegressionDecorator],
}

export const IndividualSeries = {
    name: 'individual series',
    args: {
        ids: ['A'],
        style: {
            strokeWidth: 3,
        },
    },
    decorators: [ChartForRegressionDecorator],
}

export const PooledData = {
    name: 'pooled data',
    args: {
        variant: 'pooled',
        style: {
            strokeWidth: 4,
            stroke: '#222222',
            strokeDasharray: '8 8',
        },
    },
    decorators: [ChartForRegressionDecorator],
}
