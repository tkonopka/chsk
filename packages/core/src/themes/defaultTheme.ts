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
    defaultGridLinesProps,
} from '../axes/defaults'
import { CompleteThemeSpec } from './types'
import { cloneDeep } from 'lodash'

export const defaultTheme: CompleteThemeSpec = {
    circle: {
        default: {
            stroke: '#333333',
            strokeWidth: 0,
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
            pointerEvents: 'none',
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
            strokeWidth: 1,
        },
    },
    polygon: {
        default: {
            stroke: '#222222',
            strokeWidth: 1,
        },
    },
    rect: {
        default: {
            stroke: '#222222',
            strokeWidth: 0,
        },
        inner: {
            fill: '#f2f2f2',
        },
        outer: {
            fill: '#ffffff',
        },
        tooltip: {
            fill: '#ffffff',
        },
        'tooltip.surface': {
            strokeWidth: 0.5,
            stroke: '#aaaaaa',
            filter: 'drop-shadow(2px 2px 4px #00000033)',
        },
        'legend.surface': {
            fillOpacity: 0,
        },
        legendItem: {
            fill: '#ffffff',
        },
        legendTitle: {
            fill: '#ffffff',
        },
    },
    text: {
        default: {
            fontFamily: 'sans-serif',
            fontSize: '14px',
            fill: '#222222',
            textAnchor: 'middle',
            dominantBaseline: 'middle',
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
            fill: '#777777',
            textAnchor: 'start',
        },
        tickLabel: {
            fontSize: '12px',
        },
        'tickLabel.left': {
            textAnchor: 'end',
        },
        'tickLabel.right': {
            textAnchor: 'start',
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
            dominantBaseline: 'central',
            fontSize: '12px',
            fontWeight: 600,
        },
        tooltipItem: {
            dominantBaseline: 'central',
            fontSize: '12px',
        },
        'tooltipTitle.right': {
            textAnchor: 'start',
        },
        'tooltipTitle.left': {
            textAnchor: 'end',
        },
        'tooltipItem.right': {
            textAnchor: 'start',
        },
        'tooltipItem.left': {
            textAnchor: 'end',
        },
    },
    Axis: {
        default: cloneDeep(defaultAxisProps),
    },
    AxisLabel: {
        default: cloneDeep(defaultAxisLabelProps),
        left: cloneDeep(defaultAxisLabelLeftProps),
        right: cloneDeep(defaultAxisLabelRightProps),
    },
    AxisTicks: {
        default: cloneDeep(defaultAxisTicksProps),
    },
    GridLines: {
        default: cloneDeep(defaultGridLinesProps),
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
    AxisTooltip: {
        top: {
            ...cloneDeep(defaultTooltipProps),
            translate: [0, 0],
            anchor: [0.5, 1],
        },
        right: {
            ...cloneDeep(defaultTooltipProps),
            translate: [0, 0],
            anchor: [0, 0.5],
        },
        bottom: {
            ...cloneDeep(defaultTooltipProps),
            translate: [0, 0],
            anchor: [0.5, 0],
        },
        left: {
            ...cloneDeep(defaultTooltipProps),
            translate: [0, 0],
            anchor: [1, 0.5],
        },
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
