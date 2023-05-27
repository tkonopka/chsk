import { interpolateYlOrBr, interpolateBrBG } from 'd3-scale-chromatic'
import { cloneProps, CompleteThemeSpec } from '@chsk/core'
import { defaultTheme } from './defaultTheme'

export const darkTheme: CompleteThemeSpec = {
    // svg components
    circle: {
        default: {
            stroke: '#bbbbbb',
            strokeWidth: 0,
        },
    },
    g: cloneProps(defaultTheme.g),
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
    Axis: cloneProps(defaultTheme.Axis),
    AxisLabel: cloneProps(defaultTheme.AxisLabel),
    AxisTicks: cloneProps(defaultTheme.AxisTicks),
    GridLines: cloneProps(defaultTheme.GridLines),
    Legend: cloneProps(defaultTheme.Legend),
    LegendItemList: cloneProps(defaultTheme.LegendItemList),
    LegendItem: cloneProps(defaultTheme.LegendItem),
    LegendTitle: cloneProps(defaultTheme.LegendTitle),
    LegendColorScale: cloneProps(defaultTheme.LegendColorScale),
    LegendSizeScale: cloneProps(defaultTheme.LegendSizeScale),
    MilestoneMotion: cloneProps(defaultTheme.MilestoneMotion),
    Surface: cloneProps(defaultTheme.Surface),
    Tooltip: cloneProps(defaultTheme.Tooltip),
    TooltipItemList: cloneProps(defaultTheme.TooltipItemList),
    TooltipItem: cloneProps(defaultTheme.TooltipItem),
    TooltipTitle: cloneProps(defaultTheme.TooltipTitle),
    AxisTooltip: cloneProps(defaultTheme.AxisTooltip),
    View: cloneProps(defaultTheme.View),
    ViewClip: cloneProps(defaultTheme.ViewClip),
    // other settings
    Colors: {
        categorical: {
            variant: 'categorical',
            colors: ['#3f9cde', '#e05263', '#ffa047', '#7fc29b', '#c6d8d3', '#68758d'],
            size: 6,
        },
        sequential: {
            variant: 'sequential',
            colors: interpolateYlOrBr,
            domain: 'auto',
        },
        diverging: {
            variant: 'diverging',
            colors: interpolateBrBG,
            domain: 'auto',
        },
    },
    Motion: cloneProps(defaultTheme.Motion),
    Animation: cloneProps(defaultTheme.Animation),
}
