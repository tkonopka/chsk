import { CSSProperties } from 'react'

export interface ThemeSpec {
    typography: Record<string, Partial<CSSProperties>>
    line: Record<string, Partial<CSSProperties>>
    surface: Record<string, Partial<CSSProperties>>
    rect?: Record<string, Partial<CSSProperties>>
    circle?: Record<string, Partial<CSSProperties>>
    tick?: Record<string, unknown>
}
