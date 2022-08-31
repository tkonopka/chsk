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
            tickSize: -5,
            labelOffset: 5,
            labelRotate: 0,
        },
        bottom: {
            tickSize: -5,
            labelOffset: 5,
            labelRotate: 0,
        },
        left: {
            tickSize: -5,
            labelOffset: 5,
            labelRotate: 0,
        },
        right: {
            tickSize: -5,
            labelOffset: 5,
            labelRotate: 0,
        },
    },
}
