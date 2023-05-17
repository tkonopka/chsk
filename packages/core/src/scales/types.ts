/** Axes */

/**
 * A general type for scales.
 * This is designed to overlap with d3, but also includes additional fields to:
 * - help with consistency across numeric/time/band scales
 * - support changes to scales upon zoom/pan
 */
export interface GenericScale<Domain, Range> {
    /** interface is a callable function */
    (v: Domain): Range
    /** type of scale */
    variant?:
        | 'log'
        | 'linear'
        | 'sqrt'
        | 'time'
        | 'band'
        | 'sequential'
        | 'diverging'
        | 'threshold'
        | 'categorical'
    /** scale domain */
    domain: () => Domain[]
    /** view domain */
    viewDomain: () => [number, number]
    /** scale range */
    range: () => [Range, Range]
    /** inverse transformation */
    invert: (v: Range) => number
    /** bandwidth - only provides useful information for band scales */
    bandwidth: () => number
    /** width/size of one band, including padding */
    step: () => number
    /** ticks */
    ticks: (v?: number) => Domain[]
}

export type BandAxisScale = GenericScale<string, number> & {
    variant: 'band'
}

export type LinearAxisScale = GenericScale<number, number> & {
    variant: 'linear'
}

export type LogAxisScale = GenericScale<number, number> & {
    variant: 'log'
}

export type SqrtAxisScale = GenericScale<number, number> & {
    variant: 'sqrt'
}

// time scales will be implemented using numbers rather than Dates
export type TimeAxisScale = GenericScale<number, number> & {
    variant: 'time'
}

export type NumericAxisScale = LinearAxisScale | LogAxisScale | SqrtAxisScale
export type ContinuousAxisScale = NumericAxisScale | TimeAxisScale

export type AxisScale = ContinuousAxisScale | BandAxisScale

export type MinMaxSpec = [number, number]

export type NumericScaleSpec = {
    /** type of scale */
    variant: 'linear' | 'log' | 'sqrt'
    /** domain min and max */
    domain?: [number, number] | [number, 'auto'] | ['auto', number] | 'auto'
    /** clamp */
    clamp?: boolean
    /** nice */
    nice?: boolean | number
    /** reverse direction of axis */
    reverse?: boolean
    /** interval for bandwidth */
    bandwidth?: [number, number]
}
export type TimeScaleSpec = Pick<NumericScaleSpec, 'clamp' | 'nice' | 'reverse'> & {
    /** type of scale */
    variant: 'time'
    /** domain min and max */
    domain?: [Date, Date] | [Date, 'auto'] | ['auto', Date] | 'auto'
    /** interval for bandwidth */
    bandwidth?: [Date, Date]
}

export type ContinuousScaleSpec = NumericScaleSpec | TimeScaleSpec

// book-keeping for scales, for zooming and chart sizing
type ScaleInternalProps = {
    /** domain that is currently in view */
    viewDomain?: MinMaxSpec
    /** extent of the range (number of pixels) */
    size: number
}

export type NumericScaleProps = NumericScaleSpec &
    ScaleInternalProps & {
        /** domain min and max */
        domain: MinMaxSpec
    }
export type TimeScaleProps = TimeScaleSpec &
    ScaleInternalProps & {
        /** domain min and max */
        domain: [Date, Date]
    }
export type ContinuousScaleProps = NumericScaleProps | TimeScaleProps

export type LinearScaleSpec = NumericScaleSpec & {
    /** type of scale */
    variant: 'linear'
}

export type LogScaleSpec = NumericScaleSpec & {
    /** type of scale */
    variant: 'log'
}

export type BandScaleSpec = {
    /** type of scale */
    variant: 'band'
    /** all keys in the domain */
    domain?: string[] | 'auto'
    /** padding (multiple of scale step size); overridden by paddingOuter and paddingInner */
    padding?: number
    /** padding between edges of range and first/last bands (multiple of scale step size) */
    paddingOuter?: number
    /** padding between individual bands (multiple of scale step size) */
    paddingInner?: number
    /** dictionary with additional padding before certain bands (multiples of scale step size) */
    extraPadding?: Record<string, number>
    /** nice (does not work on band scales) */
    nice?: boolean | number
}

export type BandScaleProps = BandScaleSpec &
    ScaleInternalProps & {
        /** all keys in the domain */
        domain: string[]
    }

export type ScaleSpec = ContinuousScaleSpec | BandScaleSpec

export type AxisScaleProps = ContinuousScaleProps | BandScaleProps

/** Size */

export type SizeScaleSpec = NumericScaleSpec & {
    /** type of scale */
    variant: 'sqrt'
    /** extent of maximum symbol radius */
    size: number | 'auto'
}
export type SizeScaleProps = SizeScaleSpec &
    ScaleInternalProps & {
        /** domain min and max */
        domain: MinMaxSpec
        /** extent of maximum symbol radius */
        size: number
    }

/** Color */

export type ColorArray = readonly string[]
export type ColorScheme = readonly string[] | readonly (readonly string[])[]
export type ColorInterpolator = (t: number) => string

export type CategoricalScaleSpec = {
    variant: 'categorical'
    colors: ColorScheme
    size?: number
    domain?: string[] | 'auto'
}
export type CategoricalScaleProps = CategoricalScaleSpec & {
    domain: string[]
}

export type SequentialScaleSpec = {
    variant: 'sequential'
    colors: ColorArray | ColorInterpolator
    domain: [number | 'auto', number | 'auto'] | 'auto'
}
export type SequentialScaleProps = SequentialScaleSpec & {
    domain: [number, number]
}

export type DivergingScaleSpec = {
    variant: 'diverging'
    colors: ColorArray | ColorInterpolator
    domain: [number | 'auto', number | 'auto', number | 'auto'] | 'auto'
}
export type DivergingScaleProps = DivergingScaleSpec & {
    domain: [number, number, number]
}

export type ThresholdScaleSpec = {
    variant: 'threshold'
    colors: ColorArray
    domain: number[]
}
export type ThresholdScaleProps = ThresholdScaleSpec & {
    domain: number[]
}

export type ColorScaleSpec =
    | CategoricalScaleSpec
    | SequentialScaleSpec
    | DivergingScaleSpec
    | ThresholdScaleSpec
export type ColorScaleProps =
    | CategoricalScaleProps
    | SequentialScaleProps
    | DivergingScaleProps
    | ThresholdScaleProps

export type SequentialColorScale = GenericScale<number, string> & {
    variant: 'sequential'
}
export type DivergingColorScale = GenericScale<number, string> & {
    variant: 'diverging'
}
export type CategoricalColorScale = GenericScale<number | string, string> & {
    variant: 'categorical'
}
export type ThresholdColorScale = GenericScale<number, string> & {
    variant: 'threshold'
}

export type ContinuousColorScale = SequentialColorScale | DivergingColorScale | ThresholdColorScale

export type ColorScale =
    | SequentialColorScale
    | DivergingColorScale
    | CategoricalColorScale
    | ThresholdColorScale

export type Scale = ColorScale | AxisScale

/** Context */

export type Scales = {
    /** scale for X axis*/
    x: AxisScale
    /** scale for Y axis */
    y: AxisScale
    /** scale for size */
    size: AxisScale
    /** scale for color */
    color: ColorScale
}
export type ScalesProps = {
    x: AxisScaleProps
    y: AxisScaleProps
    color?: ColorScaleProps
    size?: SizeScaleProps
}
export type ScalesPropsDispatchProp = ((prevState: ScalesProps) => ScalesProps) | ScalesProps | null
export type ScalesPropsDispatch = (value: ScalesPropsDispatchProp) => void

export type ScalesContextValue = {
    scales: Scales
    scaleProps: ScalesProps
    setScaleProps: ScalesPropsDispatch
}

/** Cartesian detector zones */

// coordinates for one detector zone: [[x-min, x-max], [y-min, y-max]]
export type DetectorZone = [[number, number], [number, number]]
export type DetectorIntervals = [number[], number[]]
