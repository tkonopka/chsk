import {
    NumericPositionIntervalSpec,
    NumericPositionSpec,
    SvgElementVariantProps,
} from '../general'

export interface GridLinesProps extends SvgElementVariantProps {
    /** variant */
    variant: 'x' | 'y'
    /** positions for grid lines */
    values?: number | number[] | string[]
    /** shift gridlines compared to natural tick position (multiple of bandwidth) */
    shift?: number[]
    /** expansion of lines at the start and end of the scale */
    expansion?: number | [number, number]
}

export interface LineProps extends SvgElementVariantProps {
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

export interface PathProps extends SvgElementVariantProps {
    /** variant */
    variant?: 'default' | string
    /** array of coordinates */
    points?: NumericPositionSpec[]
    /** curve type */
    curve?: CurveSpec
    /** path d argument (supersedes points and curve) */
    d?: string
}
