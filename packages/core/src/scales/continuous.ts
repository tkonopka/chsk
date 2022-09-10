import { scaleLog, scaleLinear } from 'd3-scale'
import { ContinuousAxisScale, ContinuousScaleProps, GenericScale } from './types'

export const createContinuousScale = ({
    variant,
    axis = 'x',
    size,
    domain,
    clamp = false,
    nice = false,
}: ContinuousScaleProps & {
    axis?: 'x' | 'y'
}): ContinuousAxisScale => {
    const range = axis === 'y' ? [size, 0] : [0, size]
    const scale = variant === 'log' ? scaleLog() : scaleLinear()
    scale.rangeRound(range).domain(domain).clamp(clamp)
    if (nice === true) scale.nice()
    if (typeof nice === 'number') scale.nice(nice)

    const result = scale as unknown as GenericScale<number, number>
    result.variant = variant
    result.bandwidth = () => 0
    result.step = () => 0

    return result as ContinuousAxisScale
}
