import { VennInteractiveDataItem, VennIntersectionLabels } from '../src'
import {
    ChartVennSets1Decorator,
    ChartVennSets2Decorator,
    ChartVennSets3Decorator,
    ChartVennSets2ProportionalDecorator,
    ChartVennSets2ProportionalDisjointDecorator,
} from './decorators'

export default {
    title: 'Addons/Set/VennIntersectionLabels',
    component: VennIntersectionLabels,
}

export const OneSet = {
    name: 'one set',
    decorators: [ChartVennSets1Decorator],
}

export const TwoSets = {
    name: 'two sets',
    decorators: [ChartVennSets2Decorator],
}

export const ThreeSets = {
    name: 'three sets',
    decorators: [ChartVennSets3Decorator],
}

export const ProportionalAreas = {
    name: 'proportional areas',
    decorators: [ChartVennSets2ProportionalDecorator],
}

export const ProportionalDisjoint = {
    name: 'proportional disjoint',
    decorators: [ChartVennSets2ProportionalDisjointDecorator],
}

export const CustomFormat = {
    name: 'custom format',
    args: {
        format: (v: string | number, item: VennInteractiveDataItem) => {
            if (item.label.substring(0, 2) === 'al' && item.label.indexOf('!') > 0) return 'cold'

            if (item.label.substring(0, 4) === '! al') return 'hot'

            return 'tepid'
        },
    },
    decorators: [ChartVennSets2Decorator],
}

export const Subsets = {
    name: 'subsets',
    args: {
        ids: ['gamma', 'alpha gamma', 'beta gamma', 'alpha beta gamma'],
    },
    decorators: [ChartVennSets3Decorator],
}

export const Styled = {
    name: 'styled',
    args: {
        style: {
            fontWeight: 600,
            fontSize: 24,
            fill: '#fff',
        },

        offset: [0, -20],
    },
    decorators: [ChartVennSets2Decorator],
}
