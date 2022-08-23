import { Scale } from './types'
import { isContinuousAxisScale } from './axis'
import { isColorScale, isContinuousColorScale } from './color'

/** get an array of ticks in the scale domain */
export const getTicks = (scale: Scale, ticks: number | undefined) => {
    if (isContinuousColorScale(scale) || isContinuousAxisScale(scale)) {
        if (ticks === undefined) return scale.ticks(4) as Array<number>
        return scale.ticks(ticks) as Array<number>
    }
    return scale.domain()
}

/** get an array of ticks in the scale range */
export const getTickCoordinates = (
    scale: Scale,
    values: undefined | number | number[] | string[],
    shift = 0,
    size = 0 // only used for color scales
) => {
    const tickValues = Array.isArray(values) ? values : getTicks(scale, values)
    if (isColorScale(scale)) {
        const domain = scale.domain()
        const domainSize = domain[1] - domain[0]
        const result = tickValues.map(v => (size * (Number(v) - domain[0])) / domainSize)
        // for vertical color scales (size < 0), adjust the mapping to make low-high go from bottom-to-top
        return size < 0 ? result.map(v => Math.abs(size) + v) : result
    }
    if (isContinuousAxisScale(scale)) {
        return tickValues.map(v => scale(Number(v)))
    }
    const scaledShift = Number(shift) * scale.bandwidth()
    return tickValues.map(v => scale(String(v)) + scaledShift)
}
