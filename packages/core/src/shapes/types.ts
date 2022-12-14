import { NumericPositionSpec, SvgElementVariantProps } from '../general'
import { InteractivityProps } from '../interactivity'
import { CSSProperties } from 'react'

type FillStrokeProps = Pick<CSSProperties, 'stroke' | 'strokeWidth' | 'fill' | 'fillOpacity'>

export interface SymbolProps extends SvgElementVariantProps, FillStrokeProps, InteractivityProps {
    /** x coordinate */
    cx?: number
    /** y coordinate */
    cy?: number
    /** radius (size set so that area matches a circle with this radius) */
    r?: number
}

export interface RectangleProps
    extends SvgElementVariantProps,
        FillStrokeProps,
        InteractivityProps {
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

export interface PolygonProps extends SvgElementVariantProps, InteractivityProps {
    /** points */
    points: NumericPositionSpec[]
}
