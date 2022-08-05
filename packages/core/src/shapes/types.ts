import { SvgElementVariantBaseProps } from '../general'

export interface CircleProps extends SvgElementVariantBaseProps {
    /** x coordinate */
    cx?: number
    /** y coordinate */
    cy?: number
    /** radius (size set so that area matches a circle with this radius) */
    r?: number
}

export interface RectangleProps extends SvgElementVariantBaseProps {
    /** x coordinate */
    x: number
    /** y coordinate */
    y: number
    /** width */
    width: number
    /** height */
    height: number
    /** horizontal corner radius */
    rx?: number
    /** vertical corner radius */
    ry?: number
    /** center the rectangle around (x, y) */
    center?: boolean
}
