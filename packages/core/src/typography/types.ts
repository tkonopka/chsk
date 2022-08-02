import { SvgElementVariantBaseProps } from '../common'

export interface TypographyProps extends SvgElementVariantBaseProps {
    /** x coordinate */
    x: number
    /** y coordinate */
    y: number
    /** variant */
    variant?: 'default' | 'title' | 'subtitle' | 'axisLabel' | 'tickLabel' | string
    /** transform */
    transform?: string
    /** wrap the text element in a g block with translation */
    wrap?: boolean
    /** text content **/
    children?: string
}
