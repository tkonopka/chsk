import { BracketLabel } from '../../src'
import { ChartBandViewAxisDecorator } from '../decorators'

export default {
    title: 'Addons/Annotation/Typography/BracketLabel',
    component: BracketLabel,
}

export const ShortTicks = {
    name: 'short ticks',
    args: {
        start: ['C', 108],
        end: ['F', 108],
        expansion: [0.5, 0.5],
        tickSize: 7,
        lineStyle: {
            fillOpacity: 0,
        },
        textStyle: {
            textAnchor: 'middle',
        },
        children: 'selection',
    },
    decorators: [ChartBandViewAxisDecorator],
}

export const LongTicks = {
    name: 'long ticks',
    args: {
        start: ['C', 90],
        end: ['E', 20],
        units: ['view', 'view'],
        expansion: [0.5, 0.5],
        tickSize: 20,
        offset: [20, -20],
        lineStyle: {
            fillOpacity: 0,
        },
        textStyle: {
            textAnchor: 'middle',
        },
        children: 'selection',
    },
    decorators: [ChartBandViewAxisDecorator],
}
