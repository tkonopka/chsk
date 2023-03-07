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
            offset: 10,
        },
        right: {
            offset: 10,
        },
        bottom: {
            offset: 10,
        },
        left: {
            offset: 10,
        },
    },
    AxisLabel: {
        bottom: {
            offset: 36,
        },
        left: {
            offset: 46,
        },
    },
    Surface: {
        inner: {
            expansion: [10, 10, 10, 10],
        },
    },
}
