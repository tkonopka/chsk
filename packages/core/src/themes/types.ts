import { CSSProperties } from 'react'
import { NumericPositionSpec, FourSideSizeSpec, SizeSpec } from '../general'
import {
    CategoricalScaleSpec,
    ColorScaleSpec,
    DivergingScaleSpec,
    SequentialScaleSpec,
} from '../scales'
import { AxisLabelThemedProps, AxisThemedProps, AxisTicksThemedProps } from '../axes'
import { LegendItemThemedProps } from '../legends'
import { ViewThemedProps } from '../views'

export type WithVariant = {
    variant?: 'default' | string
}

export interface SideRecords<T = Record<string, unknown>> extends Record<string, T | undefined> {
    top?: T
    bottom?: T
    left?: T
    right?: T
}

/**
export interface ThemeAxisLabelSpec {
    offset?: number
    anchor?: number
    rotate?: number
}
export interface ThemeAxisTicksSpec {
    tickSize?: number
    labelOffset?: number
    labelRotate?: number
    labelStyle?: CssProps
    tickStyle?: CssProps
}
 */

export interface ColorsRecords extends Record<string, ColorScaleSpec | undefined> {
    categorical: CategoricalScaleSpec
    diverging: DivergingScaleSpec
    sequential: SequentialScaleSpec
}

export interface ThemeLegendSpec {
    horizontal?: boolean
    align?: 'left' | 'middle' | 'right'
    itemSize?: SizeSpec
    itemPadding?: FourSideSizeSpec
    firstOffset?: NumericPositionSpec
    r?: number
    labelOffset?: NumericPositionSpec
    scaleSize?: SizeSpec
}
export interface LegendRecords<T = ThemeLegendSpec> extends Record<string, T | undefined> {
    list?: T
    color?: T
}

export interface ThemeSpec {
    circle?: Record<string, Partial<CSSProperties>>
    g?: Record<string, Partial<CSSProperties>>
    line?: Record<string, Partial<CSSProperties>>
    path?: Record<string, Partial<CSSProperties>>
    polygon?: Record<string, Partial<CSSProperties>>
    rect?: Record<string, Partial<CSSProperties>>
    text?: Record<string, Partial<CSSProperties>>
    Axis?: Record<string, Partial<AxisThemedProps> | undefined>
    AxisLabel?: Record<string, Partial<AxisLabelThemedProps> | undefined>
    AxisTicks?: Record<string, Partial<AxisTicksThemedProps> | undefined>
    Legend?: Record<string, Partial<ThemeLegendSpec> | undefined>
    LegendItem?: Record<string, Partial<LegendItemThemedProps> | undefined>
    LegendTitle?: Record<string, Partial<LegendItemThemedProps> | undefined>
    View?: Record<string, Partial<ViewThemedProps> | undefined>
    Colors?: Record<string, ColorScaleSpec | undefined>
}

export interface CompleteThemeSpec {
    circle: Record<string, Partial<CSSProperties>>
    g: Record<string, Partial<CSSProperties>>
    line: Record<string, Partial<CSSProperties>>
    path: Record<string, Partial<CSSProperties>>
    polygon: Record<string, Partial<CSSProperties>>
    rect: Record<string, Partial<CSSProperties>>
    text: Record<string, Partial<CSSProperties>>
    Axis: SideRecords<AxisThemedProps>
    AxisLabel: SideRecords<AxisLabelThemedProps>
    AxisTicks: SideRecords<AxisTicksThemedProps>
    Legend: LegendRecords
    LegendItem: Record<string, LegendItemThemedProps | undefined>
    LegendTitle: Record<string, LegendItemThemedProps | undefined>
    View: Record<string, ViewThemedProps | undefined>
    Colors: ColorsRecords
}

export const svgBaseComponents = ['circle', 'line', 'path', 'polygon', 'rect', 'text', 'g'] as const
export type SvgBaseComponent = typeof svgBaseComponents[number]

export type ThemedComponent =
    | 'Axis'
    | 'AxisLabel'
    | 'AxisTicks'
    | 'Legend'
    | 'LegendItem'
    | 'LegendTitle'
    | 'View'
