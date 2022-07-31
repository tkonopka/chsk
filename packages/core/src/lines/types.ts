import { CSSProperties } from 'react'

export interface GridProps {
    /** variant */
    variant?: 'x' | 'y'
    /** positions for grid lines */
    values: number | number[] | string[]
    /** css style */
    style?: Partial<CSSProperties>
}

export interface LineProps {
    /** starting x coordinate */
    x1: number
    /** starting y coordinate */
    y1: number
    /** ending x coordinate */
    x2: number
    /** ending y coordinate */
    y2: number
    /** variant */
    variant?: 'default' | 'axis' | 'tick' | 'grid'
    /** css style */
    style?: Partial<CSSProperties>
}
