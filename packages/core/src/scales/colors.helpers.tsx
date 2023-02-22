import {
    scaleDiverging,
    ScaleDiverging as D3ScaleDiverging,
    scaleSequential,
    ScaleSequential as D3ScaleSequential,
    scaleThreshold,
} from 'd3-scale'
import {
    CategoricalColorScale,
    CategoricalScaleProps,
    ColorScale,
    D3Scheme,
    DivergingScaleProps,
    SequentialScaleProps,
    ThresholdScaleProps,
} from './types'
import * as d3 from 'd3-scale-chromatic'

type D3ScaleChromatic = keyof typeof d3

const setInterpolatorOrRange = (
    scale: D3ScaleSequential<string> | D3ScaleDiverging<string>,
    colors: D3Scheme | string[]
) => {
    if (!Array.isArray(colors)) {
        const interpolateKey = 'interpolate' + colors
        let interpolator: (t: number) => string = d3.interpolateBlues
        if (interpolateKey in d3) {
            interpolator = d3[interpolateKey as D3ScaleChromatic] as (t: number) => string
        }
        scale.interpolator(interpolator)
    } else {
        scale.range(colors)
    }
}

export const createSequentialScale = ({
    variant,
    colors,
    domain,
}: SequentialScaleProps): ColorScale => {
    const scale = scaleSequential<string>().domain(domain).clamp(true)
    setInterpolatorOrRange(scale, colors)
    const result = scale as unknown as ColorScale
    result.variant = variant
    return result
}

export const createDivergingScale = ({
    variant,
    colors,
    domain,
}: DivergingScaleProps): ColorScale => {
    const scale = scaleDiverging<string>().domain(domain).clamp(true)
    setInterpolatorOrRange(scale, colors)
    const result = scale as unknown as ColorScale
    result.variant = variant
    return result
}

const getColorArray = (colors: D3Scheme | string[] | string[][], size: number) => {
    let allColors: unknown = colors
    if (!Array.isArray(colors)) {
        const scheme = 'scheme' + colors
        if (scheme in d3) {
            allColors = d3[scheme as D3ScaleChromatic]
        }
    }
    // handle case when d3 returns an array of arrays, e.g. [undefined, undefined, ["red", "blue"]]
    const nColors = Math.min(size, (allColors as unknown[]).length)
    const isNested = (x: Array<unknown>) => {
        return x.reduce((acc: boolean, x: unknown) => acc || Array.isArray(x), false)
    }
    if (isNested(allColors as unknown[])) {
        allColors = (allColors as unknown[])[nColors]
        if (!Array.isArray(allColors)) {
            allColors = ['#000']
        }
    }
    return (allColors as string[]).slice(0, nColors)
}

export const createThresholdScale = ({
    variant,
    colors,
    domain,
}: ThresholdScaleProps): ColorScale => {
    const scale = scaleThreshold<number, string>().domain(domain).range(colors)
    scale.range(getColorArray(colors, domain.length + 1))
    const result = scale as unknown as ColorScale
    result.variant = variant
    return result
}

export const createCategoricalScale = ({
    variant,
    colors,
    size,
    domain,
}: CategoricalScaleProps): CategoricalColorScale => {
    const allColors = getColorArray(colors, size ?? domain.length)
    const nColors = allColors.length
    const domainMap: Record<string, number> = {}
    domain.forEach((d, index) => {
        domainMap[String(d)] = index
    })

    const result = (index: number | string) => {
        if (typeof index === 'string') {
            index = domainMap[index] ?? -1
        }
        return allColors[index % nColors]
    }
    result.variant = variant
    result.domain = () => domain.map(String)
    return result as CategoricalColorScale
}
