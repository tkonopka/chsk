import { BraceLabel } from '../../src'
import { ChartBandViewAxisDecorator } from '../decorators'

export default {
    title: 'Addons/Annotation/Typography/BraceLabel',
    component: BraceLabel,
}

export const TickSize = {
    name: 'tick size',
    args: {
        start: ['C', 108],
        end: ['D', 108],
        expansion: [0.5, 0.5],
        tickSize: 7,
        braceR: 5,
        lineStyle: {
            fillOpacity: 0,
        },
        textStyle: {
            textAnchor: 'middle',
        },
        offset: [0, -15],
        children: 'selection',
    },
    decorators: [ChartBandViewAxisDecorator],
}

export const WideCurves = {
    name: 'wide curves',
    args: {
        start: ['C', 108],
        end: ['D', 108],
        expansion: [0.5, 0.5],
        tickSize: 7,
        braceR: 40,
        lineStyle: {
            fillOpacity: 0,
        },
        textStyle: {
            textAnchor: 'middle',
        },
        offset: [0, -15],
        children: 'selection',
    },
    decorators: [ChartBandViewAxisDecorator],
}
