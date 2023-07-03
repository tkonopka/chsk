import { CSSProperties } from 'react'
import {
    NumericPositionIntervalSpec,
    NumericPositionSpec,
    SvgElementVariantProps,
    WithTransition,
} from '../general/types'
import { InteractivityProps } from '../interactivity/types'

type FillStrokeProps = Pick<
    CSSProperties,
    'stroke' | 'strokeWidth' | 'fill' | 'fillOpacity' | 'opacity'
>

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
        WithTransition,
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

export interface LineProps extends SvgElementVariantProps, InteractivityProps {
    /** starting x coordinate */
    x1: number
    /** starting y coordinate */
    y1: number
    /** ending x coordinate */
    x2: number
    /** ending y coordinate */
    y2: number
    /** variant */
    variant?: 'default' | 'axis' | 'tick' | 'grid' | string
    /** identifier for start marker */
    markerStart?: string
    /** identifier for end marker */
    markerEnd?: string
}

// curves that pass through all the specified points
export type PointCurveSpec =
    | 'Linear'
    | 'MonotoneX'
    | 'MonotoneY'
    | 'Natural'
    | 'Step'
    | 'StepAfter'
    | 'StepBefore'

// curves that use data points as guides (may not satisfy all curve criteria on edges)
export type OpenCurveSpec = 'BasisOpen' | 'CardinalOpen' | 'CatmullRomOpen'

// curves that form closed shapes
export type ClosedCurveSpec = 'BasisClosed' | 'CardinalClosed' | 'CatmullRomClosed' | 'LinearClosed'

export type CurveSpec = PointCurveSpec | OpenCurveSpec | ClosedCurveSpec

export type CurveFunction = (xy: Array<NumericPositionSpec>) => string | null

export type AreaFunction = (xy: Array<NumericPositionIntervalSpec>) => string | null

export interface PathProps
    extends SvgElementVariantProps,
        InteractivityProps,
        Pick<LineProps, 'markerStart' | 'markerEnd'> {
    /** variant */
    variant?: 'default' | string
    /** array of coordinates */
    points?: NumericPositionSpec[]
    /** curve type */
    curve?: CurveSpec
    /** path d argument (supersedes points and curve) */
    d?: string
    /** closed path */
    closed?: boolean
}
