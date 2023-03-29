import { cloneDeep } from 'lodash'
import {
    ContinuousAxisScale,
    BandAxisScale,
    ContinuousScaleSpec,
    ContinuousScaleProps,
    BandScaleProps,
    BandScaleSpec,
    GenericScale,
    TimeAxisScale,
    TimeScaleProps,
    LinearScaleProps,
} from './types'
import { scaleLinear, scaleLog, scaleSqrt, scaleTime } from 'd3-scale'

/** complete domain information in a scale spec to create a scale props */
export const createContinuousScaleProps = (
    scaleSpec: ContinuousScaleSpec,
    domain: [number, number],
    size = 100
): ContinuousScaleProps => {
    const result = cloneDeep(scaleSpec) as ContinuousScaleProps
    if (scaleSpec.domain === undefined || typeof scaleSpec.domain === 'string') {
        result.domain = domain
    } else {
        if (typeof scaleSpec.domain[0] !== 'number') result.domain[0] = domain[0]
        if (typeof scaleSpec.domain[1] !== 'number') result.domain[1] = domain[1]
    }
    result.size = size
    return result
}

/** change domains for x and y scale props to achieve a square (1-1) aspect ratio */
export const expandScalePropsToSquare = (x: LinearScaleProps, y: LinearScaleProps) => {
    const domainRatio = (scaleProps: LinearScaleProps) =>
        (scaleProps.domain[1] - scaleProps.domain[0]) / scaleProps.size
    const adjustDomain = (domain: [number, number], ratio: number) => {
        if (ratio > 1) return
        const domainSize = domain[1] - domain[0]
        const extension = domainSize / ratio - domainSize
        domain[0] -= extension / 2
        domain[1] += extension / 2
    }
    const xRatio = domainRatio(x)
    const yRatio = domainRatio(y)
    adjustDomain(x.domain, xRatio / yRatio)
    adjustDomain(y.domain, yRatio / xRatio)
    return { x, y }
}

// creates a scale function similar to D3's scaleBand
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

// creates a scale function similar to D3's scaleTime
// but this object will transform number instead of Date inputs
export const createTimeScale = ({
    reverseRange = false,
    size,
    domain,
    clamp = false,
    nice = false,
}: Omit<TimeScaleProps, 'variant'> & {
    reverseRange?: boolean
}): TimeAxisScale => {
    const range = reverseRange ? [size, 0] : [0, size]
    // use d3 to construct a base scale
    const scale = scaleTime()
    scale.range(range).domain(domain).clamp(clamp)
    if (nice === true) scale.nice()
    if (typeof nice === 'number') scale.nice(nice)
    // construct output object to mimic d3 functionality
    const result = (x: number) => scale(new Date(x))
    result.domain = () => domain.map(Number)
    result.bandwidth = () => 0
    result.step = () => 0
    result.ticks = (count?: number) => scale.ticks(count).map(Number)
    result.variant = 'time' as const
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
    if (variant === 'time') {
        return createTimeScale({ reverseRange, size, domain, clamp, nice })
    }
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

export const createAxisScale = (
    props: ContinuousScaleProps | BandScaleProps,
    axis: 'x' | 'y' = 'x'
) => {
    if (props.variant === 'band') return createBandScale(props)
    let reverse = axis === 'y'
    if (props.reverse) reverse = !reverse
    return createContinuousScale({ reverseRange: reverse, ...props })
}
