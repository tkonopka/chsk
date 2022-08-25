import { CSSProperties } from 'react'
import { NumericPositionSpec, FourSideSizeSpec, SizeSpec, CssProps } from '../general'
import { CategoricalScaleSpec, DivergingScaleSpec, SequentialScaleSpec } from '../scales'

export interface SideRecords<T = Record<string, unknown>> {
    top?: T
    bottom?: T
    left?: T
    right?: T
}

export interface ThemeAxisSpec {
    ticks?: number
    offset?: number
}
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

export interface ThemeColorSpec {
    categorical?: CategoricalScaleSpec
    diverging?: DivergingScaleSpec
    sequential?: SequentialScaleSpec
}
export interface CompleteThemeColorSpec {
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
export interface CompleteThemeLegendSpec {
    horizontal: boolean
    align: 'left' | 'middle' | 'right'
    itemSize: SizeSpec
    itemPadding: FourSideSizeSpec
    firstOffset: NumericPositionSpec
    r: number
    labelOffset: NumericPositionSpec
    scaleSize: SizeSpec
}

export interface ThemeSpec {
    circle?: Record<string, Partial<CSSProperties>>
    g?: Record<string, Partial<CSSProperties>>
    line?: Record<string, Partial<CSSProperties>>
    path?: Record<string, Partial<CSSProperties>>
    polygon?: Record<string, Partial<CSSProperties>>
    rect?: Record<string, Partial<CSSProperties>>
    text?: Record<string, Partial<CSSProperties>>
    Axis?: SideRecords<ThemeAxisSpec>
    AxisLabel?: SideRecords<ThemeAxisLabelSpec>
    AxisTicks?: SideRecords<ThemeAxisTicksSpec>
    Legend?: ThemeLegendSpec
    Colors?: ThemeColorSpec
}

export interface CompleteThemeSpec {
    circle: Record<string, Partial<CSSProperties>>
    g: Record<string, Partial<CSSProperties>>
    line: Record<string, Partial<CSSProperties>>
    path: Record<string, Partial<CSSProperties>>
    polygon: Record<string, Partial<CSSProperties>>
    rect: Record<string, Partial<CSSProperties>>
    text: Record<string, Partial<CSSProperties>>
    Axis: SideRecords<ThemeAxisSpec>
    AxisLabel: SideRecords<ThemeAxisLabelSpec>
    AxisTicks: SideRecords<ThemeAxisTicksSpec>
    Legend: CompleteThemeLegendSpec
    Colors: CompleteThemeColorSpec
}

export const svgBaseComponents = ['circle', 'line', 'path', 'polygon', 'rect', 'text', 'g'] as const
export type SvgBaseComponent = typeof svgBaseComponents[number]
