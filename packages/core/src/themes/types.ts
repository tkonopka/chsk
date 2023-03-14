import { CSSProperties } from 'react'
import {
    CategoricalScaleSpec,
    ColorScaleSpec,
    DivergingScaleSpec,
    SequentialScaleSpec,
} from '../scales'
import {
    AxisLabelThemedProps,
    AxisThemedProps,
    AxisTicksThemedProps,
    GridLinesThemedProps,
} from '../axes'
import {
    LegendColorScaleThemedProps,
    LegendItemListThemedProps,
    LegendItemThemedProps,
    LegendSizeScaleThemedProps,
    LegendThemedProps,
} from '../legends'
import { TooltipItemListThemedProps, TooltipItemThemedProps, TooltipThemedProps } from '../tooltips'
import { SurfaceThemedProps, ViewThemedProps } from '../views'

export type WithVariant = {
    variant?: 'default' | string
}

export interface SideRecords<T = Record<string, unknown>> extends Record<string, T | undefined> {
    default?: T
    top?: T
    bottom?: T
    left?: T
    right?: T
}

export interface ColorsRecords extends Record<string, ColorScaleSpec | undefined> {
    categorical: CategoricalScaleSpec
    diverging: DivergingScaleSpec
    sequential: SequentialScaleSpec
}

export interface MotionProps {
    duration?: number
    bounce?: number
    mass?: number
    stiffness?: number
    damping?: number
}

export interface ThemeSpec {
    circle?: Record<string, Partial<CSSProperties>>
    g?: Record<string, Partial<CSSProperties>>
    line?: Record<string, Partial<CSSProperties>>
    path?: Record<string, Partial<CSSProperties>>
    polygon?: Record<string, Partial<CSSProperties>>
    rect?: Record<string, Partial<CSSProperties>>
    text?: Record<string, Partial<CSSProperties>>
    tspan?: Record<string, Partial<CSSProperties>>
    Axis?: Record<string, Partial<AxisThemedProps> | undefined>
    AxisLabel?: Record<string, Partial<AxisLabelThemedProps> | undefined>
    AxisTicks?: Record<string, Partial<AxisTicksThemedProps> | undefined>
    GridLines?: Record<string, Partial<GridLinesThemedProps> | undefined>
    Legend?: Record<string, Partial<LegendThemedProps> | undefined>
    LegendItem?: Record<string, Partial<LegendItemThemedProps> | undefined>
    LegendItemList?: Record<string, Partial<LegendItemListThemedProps> | undefined>
    LegendTitle?: Record<string, Partial<LegendItemThemedProps> | undefined>
    LegendColorScale?: Record<string, Partial<LegendColorScaleThemedProps> | undefined>
    LegendSizeScale?: Record<string, Partial<LegendSizeScaleThemedProps> | undefined>
    Surface?: Record<string, Partial<SurfaceThemedProps> | undefined>
    Tooltip?: Record<string, Partial<TooltipThemedProps> | undefined>
    TooltipItemList?: Record<string, TooltipItemListThemedProps | undefined>
    TooltipItem?: Record<string, TooltipItemThemedProps | undefined>
    TooltipTitle?: Record<string, TooltipItemThemedProps | undefined>
    AxisTooltip?: Record<string, TooltipThemedProps | undefined>
    View?: Record<string, Partial<ViewThemedProps> | undefined>
    Colors?: Record<string, ColorScaleSpec | undefined>
    Motion?: MotionProps
}

export interface CompleteThemeSpec {
    circle: Record<string, Partial<CSSProperties>>
    g: Record<string, Partial<CSSProperties>>
    line: Record<string, Partial<CSSProperties>>
    path: Record<string, Partial<CSSProperties>>
    polygon: Record<string, Partial<CSSProperties>>
    rect: Record<string, Partial<CSSProperties>>
    text: Record<string, Partial<CSSProperties>>
    tspan: Record<string, Partial<CSSProperties>>
    Axis: SideRecords<AxisThemedProps>
    AxisLabel: SideRecords<AxisLabelThemedProps>
    AxisTicks: SideRecords<AxisTicksThemedProps>
    GridLines: Record<string, Partial<GridLinesThemedProps> | undefined>
    Legend: Record<string, Partial<LegendThemedProps> | undefined>
    LegendItemList: Record<string, LegendItemListThemedProps | undefined>
    LegendItem: Record<string, LegendItemThemedProps | undefined>
    LegendTitle: Record<string, LegendItemThemedProps | undefined>
    LegendColorScale: Record<string, Partial<LegendColorScaleThemedProps> | undefined>
    LegendSizeScale: Record<string, Partial<LegendSizeScaleThemedProps> | undefined>
    Surface: Record<string, Partial<SurfaceThemedProps> | undefined>
    Tooltip: Record<string, Partial<TooltipThemedProps> | undefined>
    TooltipItemList: Record<string, TooltipItemListThemedProps | undefined>
    TooltipItem: Record<string, TooltipItemThemedProps | undefined>
    TooltipTitle: Record<string, TooltipItemThemedProps | undefined>
    AxisTooltip: Record<string, TooltipThemedProps | undefined>
    View: Record<string, ViewThemedProps | undefined>
    Colors: ColorsRecords
    Motion: MotionProps
}

export const svgBaseComponents = [
    'circle',
    'g',
    'line',
    'path',
    'polygon',
    'rect',
    'text',
    'tspan',
] as const
export type SvgBaseComponent = (typeof svgBaseComponents)[number]

export type ThemedComponent =
    | 'Axis'
    | 'AxisLabel'
    | 'AxisTicks'
    | 'GridLines'
    | 'Legend'
    | 'LegendItemList'
    | 'LegendItem'
    | 'LegendTitle'
    | 'LegendColorScale'
    | 'LegendSizeScale'
    | 'Surface'
    | 'Tooltip'
    | 'TooltipTitle'
    | 'TooltipItem'
    | 'TooltipItemList'
    | 'AxisTooltip'
    | 'View'
