import { Square } from '@chsk/core'
import { ScatterCrosshair } from '../../src'
import { ChartForRegressionDecorator, DoubleSquare, ChartWithTooltipDecorator } from './decorators'

export default {
    title: 'Addons/XY/Scatter/ScatterCrosshair',
    component: ScatterCrosshair,
}

export const Default = {
    name: 'default',
    args: {
        style: {
            stroke: '#444',
            strokeWidth: 1,
            strokeDasharray: 6,
        },
    },
    decorators: [ChartForRegressionDecorator],
}

export const X = {
    name: 'x',
    args: {
        variant: 'x',
        style: {
            stroke: '#444',
            strokeWidth: 1,
            strokeDasharray: 6,
        },
    },
    decorators: [ChartForRegressionDecorator],
}

export const Y = {
    name: 'y',
    args: {
        variant: 'y',
        style: {
            stroke: '#444',
            strokeWidth: 1,
            strokeDasharray: 6,
        },
    },
    decorators: [ChartForRegressionDecorator],
}

export const Horizontal = {
    name: 'horizontal',
    args: {
        visible: [false, true],
        style: {
            stroke: '#444',
            strokeWidth: 1,
            strokeDasharray: 6,
        },
    },
    decorators: [ChartForRegressionDecorator],
}

export const Vertical = {
    name: 'vertical',
    args: {
        visible: [true, false],
        style: {
            stroke: '#444',
            strokeWidth: 1,
            strokeDasharray: 6,
        },
    },
    decorators: [ChartForRegressionDecorator],
}

export const MinimumDistance = {
    name: 'minimum distance',
    args: {
        minDistance: 16,
        style: {
            stroke: '#444',
            strokeWidth: 1,
            strokeDasharray: 6,
        },
    },
    decorators: [ChartForRegressionDecorator],
}

export const Expansion = {
    name: 'expansion',
    args: {
        expansion: [40, 40, 40, 40],
        style: {
            stroke: '#444',
            strokeWidth: 1,
            strokeDasharray: 6,
        },
    },
    decorators: [ChartForRegressionDecorator],
}

export const CustomSymbol = {
    name: 'custom symbol',
    args: {
        style: {
            stroke: '#444',
            strokeWidth: 1,
            strokeDasharray: 6,
        },
        symbol: Square,
        symbolStyle: {
            strokeWidth: 1,
            stroke: '#222222',
        },
    },
    decorators: [ChartForRegressionDecorator],
}

export const CustomSymbol2 = {
    name: 'custom symbol 2',
    args: {
        style: {
            stroke: '#444',
            strokeWidth: 1,
            strokeDasharray: 6,
        },
        symbol: DoubleSquare,
        symbolStyle: {
            strokeWidth: 1,
            stroke: '#222222',
        },
    },
    decorators: [ChartForRegressionDecorator],
}

export const Tooltip = {
    name: 'tooltip',
    decorators: [ChartWithTooltipDecorator],
}

export const Cursor = {
    name: 'cursor ',
    args: {
        minDistance: 20,
        modifiers: {
            onMouseEnter: {
                cursor: 'pointer',
            },
            onMouseLeave: {},
        },
    },
    decorators: [ChartForRegressionDecorator],
}
