import { CSSProperties } from 'react'

export interface TypographyProps {
    /** x coordinate */
    x: number
    /** y coordinate */
    y: number
    /** variant */
    variant?: 'default' | 'title' | 'subtitle' | 'axisLabel' | 'tickLabel'
    /** css style */
    style?: Partial<CSSProperties>
    /** text content **/
    children: string
}
