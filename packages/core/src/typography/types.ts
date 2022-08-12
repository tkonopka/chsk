import { ReactNode } from 'react'
import { SvgElementVariantProps } from '../general'

export interface TextProps extends SvgElementVariantProps {
    /** x coordinate */
    x?: number
    /** y coordinate */
    y?: number
    /** variant */
    variant?: 'default' | 'title' | 'subtitle' | 'axisLabel' | 'tickLabel' | string
    /** transform */
    transform?: string
    /** text content **/
    children?: ReactNode
}
