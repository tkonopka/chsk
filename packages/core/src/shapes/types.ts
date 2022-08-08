import { SvgElementVariantProps } from '../general'
import { ReactNode } from 'react'

export interface CircleProps extends SvgElementVariantProps {
    /** x coordinate */
    cx?: number
    /** y coordinate */
    cy?: number
    /** radius (size set so that area matches a circle with this radius) */
    r?: number
}

export interface RectangleProps extends SvgElementVariantProps {
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

export type SymbolProps = CircleProps

export type SymbolFunction = (props: SymbolProps) => ReactNode
