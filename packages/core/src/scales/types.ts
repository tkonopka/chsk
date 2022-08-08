import { ScaleBand, ScaleLinear, ScaleLogarithmic } from 'd3-scale'

export type ContinuousAxisScale = ScaleLinear<number, number> | ScaleLogarithmic<number, number>

export type BandAxisScale = ScaleBand<string>

export type AxisScale = ContinuousAxisScale | BandAxisScale

export type ContinuousScaleSpec = {
    /** type of scale */
    variant: 'linear' | 'log'
    /** min domain value */
    min: number
    /** max domain value */
    max: number
    /** clamp */
    clamp?: boolean
    /** nice */
    nice?: boolean | number
}

export type BandScaleSpec = {
    /** type of scale */
    variant: 'band'
    /** all keys in the domain */
    domain: string[]
}

export type ScaleSpec = ContinuousScaleSpec | BandScaleSpec

export type ScaleProps = {
    /** axis for scale */
    axis?: undefined | 'x' | 'y'
    /** size of output */
    size: number
}

export type ScalesContextProps = {
    /** scale for X axis*/
    scaleX: AxisScale
    /** scale for Y axis */
    scaleY: AxisScale
}
