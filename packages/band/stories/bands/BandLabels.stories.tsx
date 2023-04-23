import { BandLabels } from '../../src'
import {
    ChartHorizontalGroupedBarDecorator,
    ChartHorizontalStackedBarDecorator,
} from '../bars/decorators'

export default {
    title: 'Addons/Band/Bands/BandLabels',
    component: BandLabels,
}

export const OnGroupedBars = {
    name: 'on grouped bars',
    args: {
        position: 1,
        unit: 'relative',
        offset: [25, 0],
        format: (v: Record<string, string>) => v.x + v.y + v.z,
        style: {
            fontWeight: 600,
            fontSize: 11,
        },
    },
    decorators: [ChartHorizontalGroupedBarDecorator],
}

export const OnStackedBars = {
    name: 'on stacked bars',
    args: {
        position: 1,
        unit: 'relative',
        offset: [25, 0],
        format: (v: Record<string, string>) => v.x + v.y + v.z,

        style: {
            fontWeight: 600,
            fontSize: 11,
        },
    },
    decorators: [ChartHorizontalStackedBarDecorator],
}

export const SelectedLabels = {
    name: 'selected labels',
    args: {
        ids: ['alpha'],
        position: 1,
        unit: 'relative',
        offset: [30, 0],
        format: () => 'selected',
        style: {
            fontWeight: 600,
            fontSize: 11,
        },
    },
    decorators: [ChartHorizontalStackedBarDecorator],
}
