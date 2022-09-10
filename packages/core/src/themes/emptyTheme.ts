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
    LegendItemList: {},
    LegendItem: {},
    LegendTitle: {},
    LegendColorScale: {},
    LegendSizeScale: {},
    View: {},
    Colors: defaultTheme.Colors,
}
