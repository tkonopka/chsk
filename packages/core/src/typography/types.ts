import { CSSProperties } from 'react'

export interface TypographyProps {
    /** x coordinate */
    x: number
    /** y coordinate */
    y: number
    /** variant */
    variant?: 'default' | 'title' | 'subtitle' | 'axisLabel' | 'tickLabel' | string
    /** transform */
    transform?: string
    /** css style */
    style?: Partial<CSSProperties>
    /** class string */
    className?: string
    /** wrap the text element in a g block with translation */
    wrap?: boolean
    /** text content **/
    children: string
}
