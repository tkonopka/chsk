import { CompleteThemeSpec } from '@chsk/core'
import { defaultTheme } from './defaultTheme'
import { cloneDeep } from 'lodash'

export const darkTheme: CompleteThemeSpec = {
    // svg components
    circle: {
        default: {
            stroke: '#bbbbbb',
            strokeWidth: 0,
        },
    },
    g: cloneDeep(defaultTheme.g),
    line: {
        default: {
            stroke: '#bbbbbb',
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
            stroke: '#bbbbbb',
            strokeWidth: 2,
        },
    },
    path: {
        default: {
            stroke: '#bbbbbb',
            strokeWidth: 2,
            fill: 'transparent',
        },
    },
    polygon: {
        default: {
            stroke: '#bbbbbb',
            strokeWidth: 0,
        },
    },
    rect: {
        default: {
            stroke: '#bbbbbb',
            strokeWidth: 0,
        },
        inner: {
            fill: '#333333',
        },
        outer: {
            fill: '#222222',
        },
        tooltip: {
            fill: '#000000',
        },
        'tooltip.surface': {
            strokeWidth: 0.5,
            stroke: '#cccccc',
            filter: 'drop-shadow(2px 2px 4px #cccccc33)',
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
            fill: '#bbbbbb',
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
            fill: '#888888',
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
    tspan: {},
    // chsk components
    Axis: cloneDeep(defaultTheme.Axis),
    AxisLabel: cloneDeep(defaultTheme.AxisLabel),
    AxisTicks: cloneDeep(defaultTheme.AxisTicks),
    GridLines: cloneDeep(defaultTheme.GridLines),
    Legend: cloneDeep(defaultTheme.Legend),
    LegendItemList: cloneDeep(defaultTheme.LegendItemList),
    LegendItem: cloneDeep(defaultTheme.LegendItem),
    LegendTitle: cloneDeep(defaultTheme.LegendTitle),
    LegendColorScale: cloneDeep(defaultTheme.LegendColorScale),
    LegendSizeScale: cloneDeep(defaultTheme.LegendSizeScale),
    MilestoneMotion: cloneDeep(defaultTheme.MilestoneMotion),
    Surface: cloneDeep(defaultTheme.Surface),
    Tooltip: cloneDeep(defaultTheme.Tooltip),
    TooltipItemList: cloneDeep(defaultTheme.TooltipItemList),
    TooltipItem: cloneDeep(defaultTheme.TooltipItem),
    TooltipTitle: cloneDeep(defaultTheme.TooltipTitle),
    AxisTooltip: cloneDeep(defaultTheme.AxisTooltip),
    View: cloneDeep(defaultTheme.View),
    // other settings
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
    Motion: cloneDeep(defaultTheme.Motion),
    Animation: cloneDeep(defaultTheme.Animation),
}
