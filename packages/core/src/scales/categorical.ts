import * as d3 from 'd3-scale-chromatic'
import { CategoricalScaleProps, ColorScale } from './types'

type D3ScaleChromatic = keyof typeof d3

const isNested = (x: Array<unknown>) => {
    return x.reduce((acc: boolean, x: unknown) => acc || Array.isArray(x), false)
}

export const createCategoricalScale = ({
    variant,
    colors,
    size,
}: CategoricalScaleProps): ColorScale => {
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
    // handle case when d3 returns an array of arrays, e.g. [undefined, undefined, ["red", "blue"]]
    let nColors = (allColors as unknown[]).length
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

    // here, allColors should be a simple array of string, nColors is the number of colors
    const scaleColors: string[] = allColors as string[]
    const result = (index: number) => scaleColors[index % nColors]
    result.variant = variant

    return result as ColorScale
}
