import { SvgElementVariantBaseProps } from '../general'

export interface TypographyProps extends SvgElementVariantBaseProps {
    /** x coordinate */
    x?: number
    /** y coordinate */
    y?: number
    /** variant */
    variant?: 'default' | 'title' | 'subtitle' | 'axisLabel' | 'tickLabel' | string
    /** transform */
    transform?: string
    /** text content **/
    children?: string
}
