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

type ThemedPropsRecord<T> = { default?: Partial<T> } & Record<string, Partial<T>>

type ThemedSidePropsRecord<T> = ThemedPropsRecord<T> & {
    top?: Partial<T>
    bottom?: Partial<T>
    left?: Partial<T>
    right?: Partial<T>
}

type ColorsRecord = Record<string, ColorScaleSpec> & {
    categorical: CategoricalScaleSpec
    diverging: DivergingScaleSpec
    sequential: SequentialScaleSpec
}

export interface CompleteThemeSpec {
    // svg components
    circle: ThemedPropsRecord<CSSProperties>
    g: ThemedPropsRecord<CSSProperties>
    line: ThemedPropsRecord<CSSProperties>
    path: ThemedPropsRecord<CSSProperties>
    polygon: ThemedPropsRecord<CSSProperties>
    rect: ThemedPropsRecord<CSSProperties>
    text: ThemedPropsRecord<CSSProperties>
    tspan: ThemedPropsRecord<CSSProperties>
    // chsk components
    Axis: ThemedSidePropsRecord<AxisThemedProps>
    AxisLabel: ThemedSidePropsRecord<AxisLabelThemedProps>
    AxisTicks: ThemedSidePropsRecord<AxisTicksThemedProps>
    GridLines: ThemedPropsRecord<GridLinesThemedProps>
    Legend: ThemedPropsRecord<LegendThemedProps>
    LegendItemList: ThemedPropsRecord<LegendItemListThemedProps>
    LegendItem: ThemedPropsRecord<LegendItemThemedProps>
    LegendTitle: ThemedPropsRecord<LegendItemThemedProps>
    LegendColorScale: ThemedPropsRecord<LegendColorScaleThemedProps>
    LegendSizeScale: ThemedPropsRecord<LegendSizeScaleThemedProps>
    MilestoneMotion: ThemedPropsRecord<MilestoneMotionThemedProps>
    Surface: ThemedPropsRecord<SurfaceThemedProps>
    Tooltip: ThemedPropsRecord<TooltipThemedProps>
    TooltipItemList: ThemedPropsRecord<TooltipItemListThemedProps>
    TooltipItem: ThemedPropsRecord<TooltipItemThemedProps>
    TooltipTitle: ThemedPropsRecord<TooltipItemThemedProps>
    AxisTooltip: ThemedPropsRecord<TooltipThemedProps>
    View: ThemedPropsRecord<ViewThemedProps>
    ViewClip: ThemedPropsRecord<ViewClipThemedProps>
    // other settings
    Color: ColorsRecord
    Target: ThemedPropsRecord<AnimationSpec>
    Transition: ThemedPropsRecord<TransitionSpec>
}

// ThemeSpec is related to CompleteThemeSpec, but all fields are optional
export type ThemeSpec = Partial<Omit<CompleteThemeSpec, 'Color'>> & {
    Color?: Partial<ColorsRecord>
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
