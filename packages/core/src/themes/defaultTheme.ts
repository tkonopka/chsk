import {
    defaultLegendColorScaleProps,
    defaultLegendItemListProps,
    defaultLegendItemProps,
    defaultLegendProps,
    defaultLegendSizeScaleProps,
} from '../legends/defaults'
import { defaultSurfaceProps, defaultViewProps } from '../views/defaults'
import {
    defaultAxisLabelLeftProps,
    defaultAxisLabelProps,
    defaultAxisLabelRightProps,
    defaultAxisProps,
    defaultAxisTicksProps,
} from '../axes/defaults'
import { CompleteThemeSpec } from './types'
import { cloneDeep } from 'lodash'

export const defaultTheme: CompleteThemeSpec = {
    text: {
        default: {
            fontFamily: 'sans-serif',
            fontSize: '14px',
            fill: '#222222',
        },
        label: {
            fontSize: '12px',
            textAnchor: 'middle',
            dominantBaseline: 'middle',
        },
        title: {
            fontWeight: 600,
            fontSize: '18px',
            fill: '#222222',
        },
        subtitle: {
            fontSize: '14px',
            fill: '#777777',
        },
        axisLabel: {
            fontSize: '14px',
            fill: '#222222',
            textAnchor: 'middle' as const,
            dominantBaseline: 'middle' as const,
        },
        tickLabel: {
            fontSize: '12px',
            fill: '#222222',
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
        legendItem: {
            textAnchor: 'start' as const,
            dominantBaseline: 'middle' as const,
        },
        footnote: {
            fontFamily: 'sans-serif',
            fontSize: '11px',
            fill: '#444444',
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
            strokeWidth: 0.5,
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
            fill: '#f2f2f2',
            fillOpacity: 1,
        },
        outer: {
            fill: '#f6f6f6',
            fillOpacity: 1,
        },
        legendItem: {
            fill: '#ffffff',
        },
    },
    circle: {
        default: {
            stroke: '#333333',
            strokeWidth: 0,
        },
    },
    Axis: {
        top: cloneDeep(defaultAxisProps),
        bottom: cloneDeep(defaultAxisProps),
        left: cloneDeep(defaultAxisProps),
        right: cloneDeep(defaultAxisProps),
    },
    AxisLabel: {
        top: cloneDeep(defaultAxisLabelProps),
        bottom: cloneDeep(defaultAxisLabelProps),
        left: cloneDeep(defaultAxisLabelLeftProps),
        right: cloneDeep(defaultAxisLabelRightProps),
    },
    AxisTicks: {
        top: cloneDeep(defaultAxisTicksProps),
        bottom: cloneDeep(defaultAxisTicksProps),
        left: cloneDeep(defaultAxisTicksProps),
        right: cloneDeep(defaultAxisTicksProps),
    },
    GridLines: {
        default: {
            shift: [0],
            expansion: [0, 0],
        },
        x: {
            shift: [0],
            expansion: [0, 0],
        },
        y: {
            shift: [0],
            expansion: [0, 0],
        },
    },
    Legend: {
        list: cloneDeep(defaultLegendProps),
        color: cloneDeep(defaultLegendProps),
        size: cloneDeep(defaultLegendProps),
    },
    LegendItemList: {
        default: cloneDeep(defaultLegendItemListProps),
    },
    LegendItem: {
        default: cloneDeep(defaultLegendItemProps),
    },
    LegendTitle: {
        default: cloneDeep(defaultLegendItemProps),
    },
    LegendColorScale: {
        default: cloneDeep(defaultLegendColorScaleProps),
    },
    LegendSizeScale: {
        default: cloneDeep(defaultLegendSizeScaleProps),
    },
    Surface: {
        default: cloneDeep(defaultSurfaceProps),
    },
    View: {
        default: cloneDeep(defaultViewProps),
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
    Motion: {
        mass: 0.5,
        stiffness: 250,
        damping: 25,
    },
}
