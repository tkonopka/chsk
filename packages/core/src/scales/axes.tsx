import { scaleLinear, scaleLog, scaleSqrt, scaleTime } from 'd3-scale'
import { cloneProps } from '../general/utils'
import {
    ContinuousAxisScale,
    BandAxisScale,
    ContinuousScaleSpec,
    ContinuousScaleProps,
    GenericScale,
    TimeAxisScale,
    TimeScaleProps,
    AxisScaleProps,
    BandScaleProps,
} from './types'

/** complete domain information in a scale spec to create a scale props */
export const createContinuousScaleProps = (
    scaleSpec: ContinuousScaleSpec,
    domain: [number, number],
    size = 100
): ContinuousScaleProps => {
    const result = cloneProps(scaleSpec) as ContinuousScaleProps
    if (scaleSpec.domain === undefined || typeof scaleSpec.domain === 'string') {
        result.domain = domain
    } else {
        if (typeof scaleSpec.domain[0] !== 'number') result.domain[0] = domain[0]
        if (typeof scaleSpec.domain[1] !== 'number') result.domain[1] = domain[1]
    }
    result.size = size
    return result
}

// creates a scale function similar to D3's scaleBand
// but this object will have more custom features, including extraPadding for specified bands
export const createBandScale = ({
    domain,
    viewDomain,
    size,
    padding = 0.1,
    paddingInner,
    paddingOuter,
    extraPadding = {},
}: BandScaleProps): BandAxisScale => {
    const n = domain.length
    const innerPadding = +(n > 1) * Math.max(0, Math.min(1, paddingInner ?? padding))
    const outerPadding = Math.max(0, paddingOuter ?? padding)
    const extraKeys = Object.keys(extraPadding)
    const totalExtraPadding = extraKeys.reduce((acc: number, k: string) => acc + extraPadding[k], 0)
    const step = size / (2 * outerPadding + n - innerPadding + totalExtraPadding)
    const bandwidth = (1 - innerPadding) * step
    let position = outerPadding * step
    const positions: Record<string, number> = {}
    domain.forEach(item => {
        const extra = extraPadding[item] ?? 0
        positions[item] = position + extra * step
        position += step + extra * step
    })
    const range: [number, number] = [0, size]
    const fullDomain: [number, number] = [0, position + outerPadding * step - step + bandwidth]
    const zoom = viewDomain ? fullDomain[1] / (viewDomain[1] - viewDomain[0]) : 1

    // build output object
    const scale = scaleLinear()
        .range(range)
        .domain(viewDomain ?? fullDomain)
        .nice(0)
    // default function returns centers of the band
    const result = (x: string) => scale((positions[x] ?? 0) + bandwidth / 2)
    // properties that mimic d3 functionality, plus additional functions
    result.domain = () => domain
    result.viewDomain = () => viewDomain ?? fullDomain
    result.range = () => range
    result.invert = (x: number) => {
        const viewDomain = result.viewDomain()
        const domainSize = viewDomain[1] - viewDomain[0]
        const m = size / domainSize
        const c = -m * viewDomain[0]
        return (x - c) / m
    }
    result.bandwidth = () => bandwidth * zoom
    result.step = () => step * zoom
    result.ticks = () => {
        if (!viewDomain) return domain
        return domain.filter(x => {
            const coordinate = positions[x] + bandwidth / 2
            return coordinate >= viewDomain[0] && coordinate <= viewDomain[1]
        })
    }
    result.variant = 'band' as const

    return result
}

// creates a scale function similar to D3's scaleTime
// but this object will transform number instead of Date inputs
export const createTimeScale = ({
    reverseRange = false,
    size,
    domain,
    viewDomain,
    bandwidth,
    clamp = false,
    nice = false,
}: TimeScaleProps & {
    reverseRange?: boolean
}): TimeAxisScale => {
    const range: [number, number] = reverseRange ? [size, 0] : [0, size]

    // use d3 to construct a base scale
    const scale = scaleTime()
    const view: [Date, Date] = viewDomain
        ? [new Date(viewDomain[0]), new Date(viewDomain[1])]
        : domain
    scale.range(range).domain(view).clamp(clamp)
    if (nice === true) scale.nice()
    if (typeof nice === 'number') scale.nice(nice)

    // construct output object to mimic d3 functionality, plus additional functions
    const result = (x: number) => scale(new Date(x))
    result.domain = () => domain.map(Number)
    result.viewDomain = () => viewDomain ?? (domain.map(Number) as [number, number])
    result.range = () => range
    result.invert = (x: number) => {
        const viewDomain = result.viewDomain()
        const rangeSize = range[1] - range[0]
        const domainSize = viewDomain[1] - viewDomain[0]
        const m = rangeSize / domainSize
        const c = range[0] - m * viewDomain[0]
        return (x - c) / m
    }
    result.bandwidth = () => {
        if (!bandwidth) return 0
        return scale(bandwidth[1]) - scale(bandwidth[0])
    }
    result.step = result.bandwidth
    result.ticks = (count?: number) => scale.ticks(count).map(Number)
    result.variant = 'time' as const

    return result
}

export const createContinuousScale = ({
    variant,
    reverseRange = false,
    size,
    domain,
    viewDomain,
    bandwidth,
    clamp = false,
    nice = false,
}: ContinuousScaleProps & {
    reverseRange?: boolean
}): ContinuousAxisScale => {
    if (variant === 'time') {
        return createTimeScale({
            variant,
            reverseRange,
            size,
            domain,
            viewDomain,
            bandwidth,
            clamp,
            nice,
        })
    }
    const range: [number, number] = reverseRange ? [size, 0] : [0, size]
    const scale = variant === 'log' ? scaleLog() : variant === 'sqrt' ? scaleSqrt() : scaleLinear()
    scale
        .range(range)
        .domain(viewDomain ?? domain)
        .clamp(clamp)
    if (nice === true) scale.nice()
    if (typeof nice === 'number') scale.nice(nice)
    const result = scale as unknown as GenericScale<number, number>
    result.viewDomain = () => domain
    result.variant = variant
    result.bandwidth = () => {
        if (!bandwidth) return 0
        return result(bandwidth[1]) - result(bandwidth[0])
    }
    result.step = result.bandwidth
    return result as ContinuousAxisScale
}

export const createAxisScale = (props: AxisScaleProps, axis: 'x' | 'y' = 'x') => {
    if (props.variant === 'band') return createBandScale(props)
    let reverse = axis === 'y'
    if (props.reverse) reverse = !reverse
    return createContinuousScale({ reverseRange: reverse, ...props })
}
