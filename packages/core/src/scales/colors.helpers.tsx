import {
    scaleDiverging,
    ScaleDiverging as D3ScaleDiverging,
    scaleSequential,
    ScaleSequential as D3ScaleSequential,
    scaleThreshold,
} from 'd3-scale'
import { isArray } from '../general'
import {
    CategoricalColorScale,
    CategoricalScaleProps,
    ColorArray,
    ColorInterpolator,
    ColorScale,
    ColorScheme,
    DivergingScaleProps,
    SequentialScaleProps,
    ThresholdScaleProps,
} from './types'

const setInterpolatorOrRange = (
    scale: D3ScaleSequential<string> | D3ScaleDiverging<string>,
    colors: ColorArray | ColorInterpolator
) => {
    if (!isArray(colors)) {
        scale.interpolator(colors as ColorInterpolator)
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

/** produce an array of colors of a certain size */
const getColorArray = (colors: ColorScheme, size: number) => {
    const nColors = Math.min(size, colors.length)

    // handle array of arrays, e.g. d3 schemes with format [undefined, undefined, ["red", "blue"]]
    const isNested = (x: readonly unknown[]): x is readonly (readonly unknown[])[] => {
        return x.reduce((acc: boolean, x: unknown) => acc || isArray(x), false)
    }
    const allColors = isNested(colors) ? colors[nColors] : colors

    if (!isArray(allColors)) return Array(nColors).fill('#000')
    return allColors.map(v => String(v)).slice(0, nColors)
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
