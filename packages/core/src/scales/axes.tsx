import { cloneDeep } from 'lodash'
import {
    Scale,
    ScaleSpec,
    ContinuousAxisScale,
    BandAxisScale,
    LinearAxisScale,
    LogAxisScale,
    ContinuousScaleSpec,
    ContinuousScaleProps,
    BandScaleProps,
    AxisScale,
    SqrtAxisScale,
    BandScaleSpec,
    GenericScale,
} from './types'
import { scaleLinear, scaleLog, scaleSqrt } from 'd3-scale'

export const isScaleWithDomain = (
    scaleSpec: ScaleSpec
): scaleSpec is ContinuousScaleProps | BandScaleProps => {
    const domain = scaleSpec.domain
    if (domain === undefined || typeof domain === 'string') return false
    if (scaleSpec.variant === 'band') return true
    return domain.map(v => Number(typeof v === 'number')).reduce((acc, v) => acc + v, 0) === 2
}

// complete domain information in a scale spec to create a scale props
export const createContinuousScaleProps = (
    scaleSpec: ContinuousScaleSpec,
    domain: [number, number],
    size?: number
): ContinuousScaleProps => {
    const result = cloneDeep(scaleSpec) as ContinuousScaleProps
    if (scaleSpec.domain === undefined || typeof scaleSpec.domain === 'string') {
        result.domain = domain
    } else {
        result.domain = cloneDeep(scaleSpec.domain) as [number, number]
        if (typeof scaleSpec.domain[0] !== 'number') result.domain[0] = domain[0]
        if (typeof scaleSpec.domain[1] !== 'number') result.domain[1] = domain[1]
    }
    result.size = size ?? 100
    return result
}

export const isAxisScale = (scale: Scale): scale is AxisScale => {
    return (
        scale.variant === 'band' ||
        scale.variant === 'linear' ||
        scale.variant === 'log' ||
        scale.variant === 'sqrt'
    )
}

export const isBandAxisScale = (scale: Scale): scale is BandAxisScale => {
    return scale.variant === 'band'
}

export const isContinuousAxisScale = (scale: Scale): scale is ContinuousAxisScale => {
    return scale.variant === 'linear' || scale.variant === 'log' || scale.variant === 'sqrt'
}

export const isLinearAxisScale = (scale: Scale): scale is LinearAxisScale => {
    return scale.variant === 'linear'
}

export const isLogAxisScale = (scale: Scale): scale is LogAxisScale => {
    return scale.variant === 'log'
}

export const isSqrtAxisScale = (scale: Scale): scale is SqrtAxisScale => {
    return scale.variant === 'sqrt'
}

// creates a scale function similar to D3's createBandScale
// but this object will have more custom features, including extraPadding for specified bands
export const createBandScale = ({
    domain,
    size,
    padding = 0.1,
    paddingInner,
    paddingOuter,
    extraPadding = {},
}: Omit<BandScaleSpec, 'variant' | 'domain'> & {
    domain: string[]
    size: number
}): BandAxisScale => {
    const n = domain.length
    const innerPadding = Number(n > 1) * Math.max(0, Math.min(1, paddingInner ?? padding))
    const outerPadding = Math.max(0, paddingOuter ?? padding)
    const totalExtraPadding = Object.keys(extraPadding).reduce(
        (acc: number, k: string) => acc + extraPadding[k],
        0
    )
    const step = size / (2 * outerPadding + n - innerPadding + totalExtraPadding)
    const bandwidth = (1 - innerPadding) * step
    let position = outerPadding * step
    const positions: Record<string, number> = {}
    domain.forEach(item => {
        const extra = extraPadding[item] ?? 0
        positions[item] = position + extra * step
        position += step + extra * step
    })

    // build output object
    // default function returns centers of the band
    const result = (x: string) => (positions[x] ?? 0) + bandwidth / 2
    // properties that mimic d3 functionality
    result.domain = () => domain
    result.bandwidth = () => bandwidth
    result.step = () => step
    result.ticks = () => domain
    // additional properties
    result.variant = 'band' as const

    return result
}

export const createContinuousScale = ({
    variant,
    reverseRange = false,
    size,
    domain,
    clamp = false,
    nice = false,
}: ContinuousScaleProps & {
    reverseRange?: boolean
}): ContinuousAxisScale => {
    const range = reverseRange ? [size, 0] : [0, size]
    const scale = variant === 'log' ? scaleLog() : variant === 'sqrt' ? scaleSqrt() : scaleLinear()
    scale.range(range).domain(domain).clamp(clamp)
    if (nice === true) scale.nice()
    if (typeof nice === 'number') scale.nice(nice)

    const result = scale as unknown as GenericScale<number, number>
    result.variant = variant
    result.bandwidth = () => 0
    result.step = () => 0

    return result as ContinuousAxisScale
}

export const createAxisScale = ({
    axis = 'x',
    scaleProps,
}: {
    /** axis for scale */
    axis?: 'x' | 'y'
    /** complete information about a scale, including domain */
    scaleProps: ContinuousScaleProps | BandScaleProps
}) => {
    if (scaleProps.variant === 'band') {
        return createBandScale(scaleProps)
    }
    return createContinuousScale({ reverseRange: axis === 'y', ...scaleProps })
}
