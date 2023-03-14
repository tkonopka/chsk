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

export interface SideRecords<T> extends Record<string, T | undefined> {
    default?: T
    top?: T
    bottom?: T
    left?: T
    right?: T
}

export interface ColorsRecords extends Record<string, ColorScaleSpec> {
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
    Axis?: SideRecords<Partial<AxisThemedProps>>
    AxisLabel?: SideRecords<Partial<AxisLabelThemedProps>>
    AxisTicks?: SideRecords<Partial<AxisTicksThemedProps>>
    GridLines?: Record<string, Partial<GridLinesThemedProps>>
    Legend?: Record<string, Partial<LegendThemedProps>>
    LegendItem?: Record<string, Partial<LegendItemThemedProps>>
    LegendItemList?: Record<string, Partial<LegendItemListThemedProps>>
    LegendTitle?: Record<string, Partial<LegendItemThemedProps>>
    LegendColorScale?: Record<string, Partial<LegendColorScaleThemedProps>>
    LegendSizeScale?: Record<string, Partial<LegendSizeScaleThemedProps>>
    Surface?: Record<string, Partial<SurfaceThemedProps>>
    Tooltip?: Record<string, Partial<TooltipThemedProps>>
    TooltipItemList?: Record<string, TooltipItemListThemedProps>
    TooltipItem?: Record<string, TooltipItemThemedProps>
    TooltipTitle?: Record<string, TooltipItemThemedProps>
    AxisTooltip?: Record<string, TooltipThemedProps>
    View?: Record<string, Partial<ViewThemedProps>>
    Colors?: Record<string, ColorScaleSpec>
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
    Axis: SideRecords<Partial<AxisThemedProps>>
    AxisLabel: SideRecords<Partial<AxisLabelThemedProps>>
    AxisTicks: SideRecords<Partial<AxisTicksThemedProps>>
    GridLines: Record<string, Partial<GridLinesThemedProps>>
    Legend: Record<string, Partial<LegendThemedProps>>
    LegendItemList: Record<string, LegendItemListThemedProps>
    LegendItem: Record<string, LegendItemThemedProps>
    LegendTitle: Record<string, LegendItemThemedProps>
    LegendColorScale: Record<string, Partial<LegendColorScaleThemedProps>>
    LegendSizeScale: Record<string, Partial<LegendSizeScaleThemedProps>>
    Surface: Record<string, Partial<SurfaceThemedProps>>
    Tooltip: Record<string, Partial<TooltipThemedProps>>
    TooltipItemList: Record<string, TooltipItemListThemedProps>
    TooltipItem: Record<string, TooltipItemThemedProps>
    TooltipTitle: Record<string, TooltipItemThemedProps>
    AxisTooltip: Record<string, TooltipThemedProps>
    View: Record<string, ViewThemedProps>
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
