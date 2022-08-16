import { scaleLog, scaleLinear } from 'd3-scale'
import { ContinuousAxisScale, ContinuousScaleSpec, GenericAxisScale } from './types'

export const createContinuousScale = ({
    variant,
    axis,
    size,
    domain,
    clamp = false,
    nice = false,
}: ContinuousScaleSpec & {
    domain: [number, number]
    size: number
    axis: 'x' | 'y'
}): ContinuousAxisScale => {
    const range = axis === 'y' ? [size, 0] : [0, size]
    const scale = variant === 'log' ? scaleLog() : scaleLinear()
    scale.rangeRound(range).domain(domain).clamp(clamp)
    if (nice === true) scale.nice()
    if (typeof nice === 'number') scale.nice(nice)

    const result = scale as unknown as GenericAxisScale<number, number>
    result.variant = variant
    result.bandwidth = () => 0

    return result as ContinuousAxisScale
}
