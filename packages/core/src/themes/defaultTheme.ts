import {
    defaultLegendColorScaleProps,
    defaultLegendItemListProps,
    defaultLegendItemProps,
    defaultLegendProps,
    defaultLegendSizeScaleProps,
} from '../legends/defaults'
import {
    defaultTooltipItemListProps,
    defaultTooltipItemProps,
    defaultTooltipProps,
} from '../tooltips/defaults'
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
            textAnchor: 'middle',
        },
        label: {
            fontSize: '12px',
            dominantBaseline: 'central',
        },
        counter: {
            fontSize: '12px',
            dominantBaseline: 'central',
        },
        title: {
            fontWeight: 600,
            fontSize: '18px',
            textAnchor: 'start',
        },
        subtitle: {
            fontSize: '14px',
            fill: '#777777',
            textAnchor: 'start',
        },
        axisLabel: {
            fontSize: '14px',
            dominantBaseline: 'middle',
        },
        tickLabel: {
            fontSize: '12px',
        },
        'tickLabel.left': {
            textAnchor: 'end',
            dominantBaseline: 'middle',
        },
        'tickLabel.right': {
            textAnchor: 'start',
            dominantBaseline: 'middle',
        },
        'tickLabel.top': {
            textAnchor: 'middle',
            dominantBaseline: 'auto',
        },
        'tickLabel.bottom': {
            textAnchor: 'middle',
            dominantBaseline: 'hanging',
        },
        legendTitle: {
            textAnchor: 'start',
            dominantBaseline: 'central',
        },
        legendItem: {
            textAnchor: 'start',
            dominantBaseline: 'central',
        },
        tooltipTitle: {
            textAnchor: 'start',
            dominantBaseline: 'central',
            fontSize: '12px',
            fontWeight: 600,
        },
        tooltipItem: {
            textAnchor: 'start',
            dominantBaseline: 'central',
            fontSize: '12px',
        },
    },
    g: {
        'legendItem:hover': {
            cursor: 'pointer',
        },
        tooltip: {
            pointerEvents: 'none',
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
            strokeLinecap: 'square',
            strokeWidth: 0,
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
            fill: 'transparent',
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
        },
        outer: {
            fill: '#f6f6f6',
        },
        tooltip: {
            fill: '#ffffff',
        },
        legendItem: {
            fill: '#ffffff',
        },
        legendTitle: {
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
    Tooltip: {
        default: cloneDeep(defaultTooltipProps),
    },
    TooltipItemList: {
        default: cloneDeep(defaultTooltipItemListProps),
    },
    TooltipItem: {
        default: cloneDeep(defaultTooltipItemProps),
    },
    TooltipTitle: {
        default: cloneDeep(defaultTooltipItemProps),
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
            colors: 'YlOrBr',
            domain: 'auto',
        },
        diverging: {
            variant: 'diverging',
            colors: 'BrBG',
            domain: 'auto',
        },
    },
    Motion: {
        mass: 0.5,
        stiffness: 250,
        damping: 25,
    },
}
