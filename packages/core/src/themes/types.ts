import { CSSProperties } from 'react'

export interface SideRecords {
    top?: Record<string, unknown>
    bottom?: Record<string, unknown>
    left?: Record<string, unknown>
    right?: Record<string, unknown>
}

export interface ThemeSpec {
    typography?: Record<string, Partial<CSSProperties>>
    line?: Record<string, Partial<CSSProperties>>
    polygon?: Record<string, Partial<CSSProperties>>
    rect?: Record<string, Partial<CSSProperties>>
    circle?: Record<string, Partial<CSSProperties>>
    Axis?: SideRecords
    AxisLabel?: SideRecords
    AxisTicks?: SideRecords
    Colors?: string | Array<string>
}

export interface CompleteThemeSpec {
    typography: Record<string, Partial<CSSProperties>>
    line: Record<string, Partial<CSSProperties>>
    polygon: Record<string, Partial<CSSProperties>>
    rect: Record<string, Partial<CSSProperties>>
    circle: Record<string, Partial<CSSProperties>>
    Axis: SideRecords
    AxisLabel: SideRecords
    AxisTicks: SideRecords
    Colors: string | Array<string>
}
