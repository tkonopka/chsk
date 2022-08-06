import { ThemeSpec } from '@chask/core'

export const ALICE = 0
export const BOB = 1

export const classicTheme: ThemeSpec = {
    text: {},
    line: {},
    circle: {},
    rect: {},
    Axis: {},
    AxisLabel: {},
    AxisTicks: {
        top: {
            size: -5,
            padding: 5,
            rotation: 0,
        },
        bottom: {
            size: -5,
            padding: 5,
            rotation: 0,
        },
        left: {
            size: -5,
            padding: 5,
            rotation: 0,
        },
        right: {
            size: -5,
            padding: 5,
            rotation: 0,
        },
    },
}
