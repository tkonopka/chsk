import * as d3 from 'd3-scale-chromatic'
import { scaleSequential } from 'd3-scale'
import { ColorScale, SequentialScaleProps } from './types'

type D3ScaleChromatic = keyof typeof d3

export const createSequentialScale = ({
    variant,
    colors,
    domain,
}: SequentialScaleProps): ColorScale => {
    const scale = scaleSequential<string>().domain(domain).clamp(true)

    if (!Array.isArray(colors)) {
        const interpolateKey = 'interpolate' + colors
        let interpolator: (t: number) => string
        if (interpolateKey in d3) {
            interpolator = d3[interpolateKey as D3ScaleChromatic] as (t: number) => string
        } else {
            interpolator = d3.interpolateBlues
        }
        scale.interpolator(interpolator)
    } else {
        scale.range(colors)
    }

    const result = scale as unknown as ColorScale
    result.variant = variant
    return result
}
