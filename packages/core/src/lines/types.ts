import { SvgElementVariantBaseProps } from '../general'

export interface GridProps extends SvgElementVariantBaseProps {
    /** variant */
    variant: 'x' | 'y'
    /** positions for grid lines */
    values: number | number[] | string[]
    /** expansion of lines at the start and end of the scale */
    expansion?: number | [number, number]
}

export interface LineProps extends SvgElementVariantBaseProps {
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
}
