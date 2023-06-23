import { cloneProps } from '../general/utils'
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
    defaultAxisLabelTopProps,
    defaultAxisLabelRightProps,
    defaultAxisLabelBottomProps,
    defaultAxisLabelLeftProps,
    defaultAxisProps,
    defaultAxisTicksProps,
    defaultGridLinesProps,
} from '../axes/defaults'
import { CompleteThemeSpec } from './types'
import { interpolateBlues, interpolateRdBu } from 'd3-scale-chromatic'

export const defaultTheme: CompleteThemeSpec = {
    // svg components
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
        draggable: {
            cursor: 'grab',
        },
    },
    line: {
        default: {
            stroke: '#222222',
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
        },
    },
    path: {
        default: {
            stroke: '#222222',
            // prefer fillOpacity to fill: none in order to allow animation of fill in path components
            fillOpacity: 0,
        },
    },
    polygon: {
        default: {
            stroke: '#222222',
        },
    },
    rect: {
        default: {
            stroke: '#222222',
            strokeWidth: 0,
        },
        dragging: {
            cursor: 'grabbing',
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
            strokeWidth: 1,
            stroke: '#bbbbbb',
            filter: 'drop-shadow(2px 2px 4px #00000033)',
        },
        'legend.surface': {
            fill: '#ffffff',
        },
        legendItem: {
            fill: '#ffffff',
        },
        legendTitle: {
            fill: '#ffffff',
        },
        zoomBox: {
            fill: '#777777',
            fillOpacity: 0.2,
            strokeWidth: 1,
            strokeOpacity: 0.7,
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
        selected: {
            fontWeight: 600,
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
    Axis: {
        default: cloneProps(defaultAxisProps),
    },
    AxisLabel: {
        top: cloneProps(defaultAxisLabelTopProps),
        right: cloneProps(defaultAxisLabelRightProps),
        bottom: cloneProps(defaultAxisLabelBottomProps),
        left: cloneProps(defaultAxisLabelLeftProps),
    },
    AxisTicks: {
        default: cloneProps(defaultAxisTicksProps),
    },
    GridLines: {
        default: cloneProps(defaultGridLinesProps),
    },
    Legend: {
        list: cloneProps(defaultLegendProps),
        color: cloneProps(defaultLegendProps),
        size: cloneProps(defaultLegendProps),
    },
    LegendItemList: {
        default: cloneProps(defaultLegendItemListProps),
    },
    LegendItem: {
        default: cloneProps(defaultLegendItemProps),
    },
    LegendTitle: {
        default: cloneProps(defaultLegendItemProps),
    },
    LegendColorScale: {
        default: cloneProps(defaultLegendColorScaleProps),
    },
    LegendSizeScale: {
        default: cloneProps(defaultLegendSizeScaleProps),
    },
    MilestoneMotion: {
        default: {
            enter: 'hidden',
            config: 'default',
            exit: 'hidden',
            transition: 'default',
        },
    },
    Surface: {
        default: cloneProps(defaultSurfaceProps),
    },
    Tooltip: {
        default: cloneProps(defaultTooltipProps),
    },
    TooltipItemList: {
        default: cloneProps(defaultTooltipItemListProps),
    },
    TooltipItem: {
        default: cloneProps(defaultTooltipItemProps),
    },
    TooltipTitle: {
        default: cloneProps(defaultTooltipItemProps),
    },
    AxisTooltip: {
        top: {
            ...cloneProps(defaultTooltipProps),
            offset: [0, 0],
            anchor: [0.5, 1],
        },
        right: {
            ...cloneProps(defaultTooltipProps),
            offset: [0, 0],
            anchor: [0, 0.5],
        },
        bottom: {
            ...cloneProps(defaultTooltipProps),
            offset: [0, 0],
            anchor: [0.5, 0],
        },
        left: {
            ...cloneProps(defaultTooltipProps),
            offset: [0, 0],
            anchor: [1, 0.5],
        },
    },
    View: {
        default: cloneProps(defaultViewProps),
    },
    ViewClip: {
        default: cloneProps(defaultSurfaceProps),
    },
    // other settings
    Colors: {
        categorical: {
            variant: 'categorical',
            colors: ['#3f9cde', '#e05263', '#ffa047', '#7fc29b', '#c6d8d3', '#68758d'],
            size: 6,
        },
        sequential: {
            variant: 'sequential',
            colors: interpolateBlues,
            domain: 'auto',
        },
        diverging: {
            variant: 'diverging',
            colors: interpolateRdBu,
            domain: 'auto',
        },
    },
    Motion: {
        default: {
            type: 'spring',
            mass: 0.5,
            stiffness: 250,
            damping: 25,
        },
    },
    Animation: {
        default: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
        },
        // include 'hidden' and 'invisible' as synonyms
        hidden: {
            opacity: 0,
        },
        invisible: {
            opacity: 0,
        },
    },
}
