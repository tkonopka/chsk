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
    GridLines: {},
    Legend: {},
    LegendItemList: {},
    LegendItem: {},
    LegendTitle: {},
    LegendColorScale: {},
    LegendSizeScale: {},
    Surface: {},
    View: {},
    Colors: defaultTheme.Colors,
    Motion: {},
}
