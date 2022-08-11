// a general type for scales
// this is designed to overlap with d3, but also includes optional fields
export interface GenericAxisScale<Domain, Range> {
    /** AxisScale is a function */
    (v: Domain): Range
    /** annotation about the type of scale */
    variant?: 'log' | 'linear' | 'band'
    /** scale domain */
    domain: () => Domain[]
    /** bandwidth - only provides useful information for band scales */
    bandwidth?: () => number
    /** ticks */
    ticks: (v?: number) => Domain[]
}

export type BandAxisScale = GenericAxisScale<string, number> & {
    variant: 'band'
    /** bandwidth - with/size of one band */
    bandwidth: () => number
}

export type LinearAxisScale = GenericAxisScale<number, number> & {
    variant: 'linear'
}

export type LogAxisScale = GenericAxisScale<number, number> & {
    variant: 'log'
}

export type ContinuousAxisScale = LinearAxisScale | LogAxisScale

export type AxisScale = ContinuousAxisScale | BandAxisScale

export type MinMaxSpec = [number, number]

export type ContinuousScaleSpec = {
    /** type of scale */
    variant: 'linear' | 'log'
    /** domain min and max */
    domain?: [number | 'auto', number | 'auto'] | 'auto'
    /** clamp */
    clamp?: boolean
    /** nice */
    nice?: boolean | number
}
export type ContinuousScaleProps = ContinuousScaleSpec & {
    /** domain min and max */
    domain: MinMaxSpec
}

export type LinearScaleSpec = ContinuousScaleSpec & {
    /** type of scale */
    variant: 'linear'
}

export type LinearScaleProps = LinearScaleSpec & {
    /** domain min and max */
    domain: [number, number]
}

export type LogScaleSpec = ContinuousScaleSpec & {
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
}

export type BandScaleProps = BandScaleSpec & {
    /** all keys in the domain */
    domain: string[]
}

export type ScaleSpec = ContinuousScaleSpec | BandScaleSpec

export type ScaleProps = ContinuousScaleProps | BandScaleProps

export type ScalesContextProps = {
    /** scale for X axis*/
    scaleX: AxisScale
    /** scale for Y axis */
    scaleY: AxisScale
    /** indicator whether a chart is in horizontal mode */
    horizontal: null | boolean
}
