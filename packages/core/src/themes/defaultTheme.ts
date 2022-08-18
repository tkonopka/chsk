import { CompleteThemeSpec } from './types'

export const defaultTheme: CompleteThemeSpec = {
    text: {
        default: {
            fontFamily: 'sans-serif',
            fontSize: '14px',
            fill: '#333333',
        },
        label: {
            textAnchor: 'middle',
            dominantBaseline: 'middle',
        },
        title: {
            fontWeight: 600,
            fontSize: '18px',
            fill: '#333333',
        },
        subtitle: {
            fontSize: '14px',
            fill: '#777777',
        },
        axisLabel: {
            fontSize: '14px',
            fill: '#333333',
            textAnchor: 'middle' as const,
            dominantBaseline: 'middle' as const,
        },
        tickLabel: {
            fontSize: '12px',
            fill: '#333333',
        },
        'tickLabel.left': {
            textAnchor: 'end' as const,
            dominantBaseline: 'middle' as const,
        },
        'tickLabel.right': {
            textAnchor: 'start' as const,
            dominantBaseline: 'middle' as const,
        },
        'tickLabel.top': {
            textAnchor: 'middle' as const,
            dominantBaseline: 'auto' as const,
        },
        'tickLabel.bottom': {
            textAnchor: 'middle' as const,
            dominantBaseline: 'hanging' as const,
        },
        legendTitle: {
            textAnchor: 'start' as const,
            dominantBaseline: 'middle' as const,
        },
        legendLabel: {
            textAnchor: 'start' as const,
            dominantBaseline: 'middle' as const,
        },
        barLabel: {
            fontSize: '11px',
            fontWeight: 600,
            textAnchor: 'middle' as const,
            dominantBaseline: 'middle' as const,
            fill: '#ffffff',
        },
        footnote: {
            fontFamily: 'sans-serif',
            fontSize: '11px',
            fill: '#333333',
            fontStyle: 'italic',
        },
    },
    line: {
        default: {
            stroke: '#222222',
            strokeWidth: 1,
        },
        grid: {
            stroke: '#cccccc',
            strokeWidth: 1,
        },
        axis: {
            stroke: '#222222',
            visibility: 'hidden' as const,
            strokeLinecap: 'square',
        },
        tick: {
            stroke: '#555555',
            strokeWidth: 2,
        },
    },
    path: {
        default: {
            stroke: '#222222',
            strokeWidth: 2,
            fill: 'transparent' as const,
        },
    },
    polygon: {
        default: {
            stroke: '#333333',
            strokeWidth: 0,
        },
    },
    rect: {
        default: {
            stroke: '#333333',
            strokeWidth: 0,
        },
        inner: {
            fill: '#eeeeee',
            fillOpacity: 1,
        },
        outer: {
            fill: '#f4f4f4',
            fillOpacity: 1,
        },
        legendItem: {
            fill: '#ffffff00',
        },
    },
    circle: {
        default: {
            stroke: '#333333',
            strokeWidth: 0,
        },
    },
    Axis: {
        top: {
            padding: 0, // distance between chart surface and axis
        },
        bottom: {
            padding: 0,
        },
        left: {
            padding: 0,
        },
        right: {
            padding: 0,
        },
    },
    AxisLabel: {
        top: {
            padding: 40, // distance between axis and axis label
            anchor: 0.5, // relative position of axis label
        },
        bottom: {
            padding: 40,
            anchor: 0.5,
        },
        left: {
            padding: 45,
            anchor: 0.5,
            rotate: -90,
        },
        right: {
            padding: 45,
            anchor: 0.5,
            rotate: 90,
        },
    },
    AxisTicks: {
        top: {
            size: 5,
            padding: 9,
        },
        bottom: {
            size: 5,
            padding: 9,
        },
        left: {
            size: 5,
            padding: 9,
        },
        right: {
            size: 5,
            padding: 9,
        },
    },
    Legend: {
        horizontal: false,
        align: 'left' as const,
        itemSize: [60, 20],
        itemPadding: [4, 4, 4, 4],
        firstOffset: [0, 0],
        r: 8,
        labelOffset: [14, 0],
    },
    Colors: {
        categorical: ['#dd0000', '#4059ad', '#f4ac45', '#56e39f', '#5c415d'],
        sequential: 'schemeYlOrBr',
        diverging: 'schemeBrBG',
    },
}
