import { CompleteThemeSpec } from './types'
import { defaultTheme } from './defaultTheme'

export const emptyTheme: CompleteThemeSpec = {
    // svg components
    circle: {},
    g: {},
    line: {},
    path: {},
    polygon: {},
    rect: {},
    text: {},
    tspan: {},
    // chsk components
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
    MilestoneMotion: {},
    Surface: {},
    Tooltip: {},
    TooltipItemList: {},
    TooltipItem: {},
    TooltipTitle: {},
    AxisTooltip: {},
    View: {},
    // other settings
    Colors: defaultTheme.Colors,
    Motion: {},
    Animation: {},
    Transition: {},
}
