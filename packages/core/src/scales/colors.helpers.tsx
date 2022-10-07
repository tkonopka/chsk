import {
    scaleDiverging,
    ScaleDiverging as D3ScaleDiverging,
    scaleSequential,
    ScaleSequential as D3ScaleSequential,
} from 'd3-scale'
import {
    CategoricalColorScale,
    CategoricalScaleProps,
    ColorScale,
    D3Scheme,
    DivergingScaleProps,
    SequentialScaleProps,
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

export const createCategoricalScale = ({
    variant,
    colors,
    size,
    domain,
}: CategoricalScaleProps): CategoricalColorScale => {
    // bring all input types to a common format as an array of color strings
    let allColors: unknown = colors
    if (!Array.isArray(colors)) {
        const scheme = 'scheme' + colors
        if (scheme in d3) {
            allColors = d3[scheme as D3ScaleChromatic]
        }
    }
    if (!Array.isArray(allColors)) {
        allColors = [colors]
    }

    const isNested = (x: Array<unknown>) => {
        return x.reduce((acc: boolean, x: unknown) => acc || Array.isArray(x), false)
    }

    // handle case when d3 returns an array of arrays, e.g. [undefined, undefined, ["red", "blue"]]
    let nColors = Math.min(domain.length, (allColors as unknown[]).length)
    nColors = size ? Math.min(size, nColors) : nColors
    if (isNested(allColors as unknown[])) {
        nColors = (allColors as unknown[]).length - 1
        nColors = size ? Math.min(size, nColors) : nColors
        allColors = (allColors as unknown[])[nColors]
        if (!Array.isArray(allColors)) {
            allColors = ['#000']
        }
    }
    nColors = Math.min(nColors, (allColors as unknown[]).length)

    const domainMap: Record<string, number> = {}
    domain.forEach((d, index) => {
        domainMap[String(d)] = index
    })

    // here, allColors should be a simple array of string, nColors is the number of colors
    const scaleColors: string[] = allColors as string[]
    const result = (index: number | string) => {
        if (typeof index === 'string') {
            index = domainMap[index] ?? -1
        }
        return scaleColors[index % nColors]
    }
    result.variant = variant
    result.domain = () =>
        Array(nColors)
            .fill('')
            .map((emptyColor, i) => domain[i] ?? emptyColor) as string[]

    return result as CategoricalColorScale
}
