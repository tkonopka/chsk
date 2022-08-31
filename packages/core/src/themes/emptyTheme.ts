import { CompleteThemeSpec } from './types'
import { defaultTheme } from './defaultTheme'

export const emptyTheme: CompleteThemeSpec = {
    text: {},
    g: {},
    line: {},
    path: {},
    polygon: {},
    rect: {},
    circle: {},
    Axis: {},
    AxisLabel: {},
    AxisTicks: {},
    Legend: {},
    LegendItem: {},
    LegendTitle: {},
    View: {},
    Colors: defaultTheme.Colors,
}
