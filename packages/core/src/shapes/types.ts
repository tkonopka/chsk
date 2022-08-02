import { SvgElementVariantBaseProps } from '../common'

export interface CircleProps extends SvgElementVariantBaseProps {
    /** x coordinate */
    cx?: number
    /** y coordinate */
    cy?: number
    /** radius */
    r: number
}

export interface RectProps extends SvgElementVariantBaseProps {
    /** x coordinate */
    x?: number
    /** y coordinate */
    y?: number
    /** width */
    width: number
    /** height */
    height: number
    /** center the rectangle around (x, y) */
    center?: boolean
}
