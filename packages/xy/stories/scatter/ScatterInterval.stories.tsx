import { ScatterInterval } from '../../src'
import { ChartForIntervalDecorator } from './decorators'

export default {
    title: 'Addons/XY/Scatter/ScatterInterval',
    component: ScatterInterval,
}

export const Interval = {
    name: 'interval',
    args: {
        ids: ['A'],
        curve: 'Natural',
        lower: 'lo',
        upper: 'hi',
        style: {
            fill: '#dd4444',
            strokeWidth: 0,
            fillOpacity: 0.5,
        },
    },
    decorators: [ChartForIntervalDecorator],
}

export const SignalProcessing = {
    name: 'signal processing',
    args: {
        ids: ['A'],
        curve: 'Natural',
        lower: 'lo',
        upper: 'hi',
        style: {
            fill: '#dd4444',
            strokeWidth: 0,
            fillOpacity: 0.5,
        },
        convolutionMask: [1, 1, 1],
        downsampleFactor: 0.5,
    },
    decorators: [ChartForIntervalDecorator],
}
