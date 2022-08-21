import { CSSProperties } from 'react'
import { NumericPositionSpec, FourSideSizeSpec, SizeSpec } from '../general'

export interface SideRecords {
    top?: Record<string, unknown>
    bottom?: Record<string, unknown>
    left?: Record<string, unknown>
    right?: Record<string, unknown>
}

export interface ThemeColorSpec {
    categorical?: string | string[]
    diverging?: string | string[]
    sequential?: string | string[]
}
export interface CompleteThemeColorSpec {
    categorical: string | string[]
    diverging: string | string[]
    sequential: string | string[]
}

export interface ThemeLegendSpec {
    horizontal?: boolean
    align?: 'left' | 'middle' | 'right'
    itemSize?: SizeSpec
    itemPadding?: FourSideSizeSpec
    firstOffset?: NumericPositionSpec
    r?: number
    labelOffset?: NumericPositionSpec
}
export interface CompleteThemeLegendSpec {
    horizontal: boolean
    align: 'left' | 'middle' | 'right'
    itemSize: SizeSpec
    itemPadding: FourSideSizeSpec
    firstOffset: NumericPositionSpec
    r: number
    labelOffset: NumericPositionSpec
}

export interface ThemeSpec {
    circle?: Record<string, Partial<CSSProperties>>
    line?: Record<string, Partial<CSSProperties>>
    path?: Record<string, Partial<CSSProperties>>
    polygon?: Record<string, Partial<CSSProperties>>
    rect?: Record<string, Partial<CSSProperties>>
    text?: Record<string, Partial<CSSProperties>>
    Axis?: SideRecords
    AxisLabel?: SideRecords
    AxisTicks?: SideRecords
    Legend?: ThemeLegendSpec
    Colors?: ThemeColorSpec
}

export interface CompleteThemeSpec {
    circle: Record<string, Partial<CSSProperties>>
    line: Record<string, Partial<CSSProperties>>
    path: Record<string, Partial<CSSProperties>>
    polygon: Record<string, Partial<CSSProperties>>
    rect: Record<string, Partial<CSSProperties>>
    text: Record<string, Partial<CSSProperties>>
    Axis: SideRecords
    AxisLabel: SideRecords
    AxisTicks: SideRecords
    Legend: CompleteThemeLegendSpec
    Colors: CompleteThemeColorSpec
}
