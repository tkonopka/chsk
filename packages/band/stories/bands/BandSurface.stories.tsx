import { BandSurface } from '../../src'
import { ChartSurfaceDecorator, ChartSurfaceNoPointerEventsDecorator } from './decorators'

export default {
    title: 'Addons/Band/Bands/BandSurface',
    component: BandSurface,
}

export const Step = {
    name: 'step',
    args: {
        variant: 'step',
        style: {
            fill: '#eeeeee',
            strokeWidth: 1,
            stroke: '#222222',
        },
    },
    decorators: [ChartSurfaceDecorator],
}

export const Band = {
    name: 'band',
    args: {
        variant: 'band',
        style: {
            fill: '#eeeeee',
            strokeWidth: 1,
            stroke: '#222222',
        },
    },
    decorators: [ChartSurfaceDecorator],
}

export const Subset = {
    name: 'subset',
    args: {
        ids: ['beta'],
        style: {
            fill: '#eeeeee',
        },
    },
    decorators: [ChartSurfaceDecorator],
}

export const Interactive = {
    name: 'interactive',
    args: {
        interactive: true,
        style: {
            fill: '#eeeeee',
        },
    },
    decorators: [ChartSurfaceDecorator],
}

export const PointerEvents = {
    name: 'pointer events',
    args: {
        interactive: true,
        style: {
            fill: '#eeeeee',
        },
    },
    decorators: [ChartSurfaceNoPointerEventsDecorator],
}

export const Tooltip = {
    name: 'tooltip',
    args: {
        interactive: false,
        tooltip: true,
        style: {
            fill: '#eeeeee',
        },
    },
    decorators: [ChartSurfaceDecorator],
}
