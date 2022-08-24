import { CompleteThemeSpec } from './types'

export const defaultTheme: CompleteThemeSpec = {
    text: {
        default: {
            fontFamily: 'sans-serif',
            fontSize: '14px',
            fill: '#333333',
        },
        label: {
            fontSize: '12px',
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
        footnote: {
            fontFamily: 'sans-serif',
            fontSize: '11px',
            fill: '#333333',
            fontStyle: 'italic',
        },
    },
    g: {
        'legendItem:hover': {
            cursor: 'pointer',
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
            offset: 0, // distance between chart surface and axis
        },
        bottom: {
            offset: 0,
        },
        left: {
            offset: 0,
        },
        right: {
            offset: 0,
        },
    },
    AxisLabel: {
        top: {
            offset: 40, // distance between axis and axis label
            anchor: 0.5, // relative position of axis label
        },
        bottom: {
            offset: 40,
            anchor: 0.5,
        },
        left: {
            offset: 45,
            anchor: 0.5,
            rotate: -90,
        },
        right: {
            offset: 45,
            anchor: 0.5,
            rotate: 90,
        },
    },
    AxisTicks: {
        top: {
            tickSize: 5,
            labelOffset: 9,
        },
        bottom: {
            tickSize: 5,
            labelOffset: 9,
        },
        left: {
            tickSize: 5,
            labelOffset: 9,
        },
        right: {
            tickSize: 5,
            labelOffset: 9,
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
        scaleSize: [8, 80],
    },
    Colors: {
        categorical: {
            variant: 'categorical',
            colors: ['#3f9cde', '#e05263', '#ffa047', '#7fc29b', '#c6d8d3', '#68758d'],
            size: 6,
        },
        sequential: {
            variant: 'sequential',
            colors: 'YlOrBr' as const,
            domain: 'auto',
        },
        diverging: {
            variant: 'diverging',
            colors: 'BrBG' as const,
            domain: 'auto',
        },
    },
}
