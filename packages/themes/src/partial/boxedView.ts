import { ThemeSpec } from '@chsk/core'

export const boxedViewTheme: ThemeSpec = {
    line: {
        tick: {
            stroke: '#222222',
            strokeWidth: 1,
        },
    },
    rect: {
        inner: {
            stroke: '#222222',
            strokeWidth: '1px',
        },
    },
    Axis: {
        top: {
            distance: 10,
        },
        right: {
            distance: 10,
        },
        bottom: {
            distance: 10,
        },
        left: {
            distance: 10,
        },
    },
    AxisLabel: {
        bottom: {
            distance: 36,
        },
        left: {
            distance: 46,
        },
    },
    Surface: {
        inner: {
            expansion: [10, 10, 10, 10],
        },
    },
}
