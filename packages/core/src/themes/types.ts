import { CSSProperties, ReactNode } from 'react'
import {
    CategoricalScaleSpec,
    ColorScaleSpec,
    DivergingScaleSpec,
    SequentialScaleSpec,
} from '../scales/types'
import {
    AxisLabelThemedProps,
    AxisThemedProps,
    AxisTicksThemedProps,
    GridLinesThemedProps,
} from '../axes/types'
import {
    LegendColorScaleThemedProps,
    LegendItemListThemedProps,
    LegendItemThemedProps,
    LegendSizeScaleThemedProps,
    LegendThemedProps,
} from '../legends/types'
import { AnimationSpec, TransitionSpec } from '../general/types'
import { TooltipItemListThemedProps, TooltipItemThemedProps, TooltipThemedProps } from '../tooltips'
import { SurfaceThemedProps, ViewClipThemedProps, ViewThemedProps } from '../views'
import { MilestoneMotionThemedProps } from '../charts'

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

export interface ThemeSpec {
    // svg components
    circle?: Record<string, Partial<CSSProperties>>
    g?: Record<string, Partial<CSSProperties>>
    line?: Record<string, Partial<CSSProperties>>
    path?: Record<string, Partial<CSSProperties>>
    polygon?: Record<string, Partial<CSSProperties>>
    rect?: Record<string, Partial<CSSProperties>>
    text?: Record<string, Partial<CSSProperties>>
    tspan?: Record<string, Partial<CSSProperties>>
    // chsk components
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
    MilestoneMotion?: Record<string, Partial<MilestoneMotionThemedProps>>
    Surface?: Record<string, Partial<SurfaceThemedProps>>
    Tooltip?: Record<string, Partial<TooltipThemedProps>>
    TooltipItemList?: Record<string, Partial<TooltipItemListThemedProps>>
    TooltipItem?: Record<string, Partial<TooltipItemThemedProps>>
    TooltipTitle?: Record<string, Partial<TooltipItemThemedProps>>
    AxisTooltip?: Record<string, Partial<TooltipThemedProps>>
    View?: Record<string, Partial<ViewThemedProps>>
    ViewClip?: Record<string, Partial<ViewClipThemedProps>>
    // non-component settings
    Color?: Record<string, ColorScaleSpec>
    Transition?: Record<string, TransitionSpec>
    Target?: Record<string, AnimationSpec>
}

export interface CompleteThemeSpec {
    // svg components
    circle: Record<string, Partial<CSSProperties>>
    g: Record<string, Partial<CSSProperties>>
    line: Record<string, Partial<CSSProperties>>
    path: Record<string, Partial<CSSProperties>>
    polygon: Record<string, Partial<CSSProperties>>
    rect: Record<string, Partial<CSSProperties>>
    text: Record<string, Partial<CSSProperties>>
    tspan: Record<string, Partial<CSSProperties>>
    // chsk components
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
    MilestoneMotion: Record<string, Partial<MilestoneMotionThemedProps>>
    Surface: Record<string, Partial<SurfaceThemedProps>>
    Tooltip: Record<string, Partial<TooltipThemedProps>>
    TooltipItemList: Record<string, Partial<TooltipItemListThemedProps>>
    TooltipItem: Record<string, Partial<TooltipItemThemedProps>>
    TooltipTitle: Record<string, Partial<TooltipItemThemedProps>>
    AxisTooltip: Record<string, Partial<TooltipThemedProps>>
    View: Record<string, Partial<ViewThemedProps>>
    ViewClip: Record<string, Partial<ViewClipThemedProps>>
    // non-components
    Color: ColorsRecords
    Transition: Record<string, TransitionSpec>
    Target: Record<string, AnimationSpec>
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
    | 'MilestoneMotion'
    | 'Surface'
    | 'Tooltip'
    | 'TooltipTitle'
    | 'TooltipItem'
    | 'TooltipItemList'
    | 'AxisTooltip'
    | 'View'
    | 'ViewClip'

export interface StyleProps {
    /** scoping selector */
    ancestor: string
    /** default theme */
    baseTheme?: CompleteThemeSpec
    /** theme adjustment **/
    theme?: ThemeSpec
    /** svg components to include in output **/
    selectors?: null | Array<SvgBaseComponent>
    /** children components */
    children?: ReactNode
}
