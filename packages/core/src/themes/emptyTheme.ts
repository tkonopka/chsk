import { CompleteThemeSpec } from './types'

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
    Legend: {
        horizontal: false,
        align: 'left' as const,
        itemSize: [60, 20],
        itemPadding: [4, 4, 4, 4],
        firstOffset: [0, 0],
        r: 8,
        labelOffset: [14, 0],
        scaleSize: [8, 80],
    },
    Colors: {
        categorical: ['#dd0000', '#4059ad', '#f4ac45', '#56e39f', '#5c415d'],
        sequential: 'schemeYlOrBr',
        diverging: 'schemeBrBG',
    },
}
