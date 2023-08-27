import { isArray, indexes } from '../general'
import { Scale } from './types'
import { isContinuousAxisScale } from './predicates'
import {
    isCategoricalColorScale,
    isColorScale,
    isContinuousColorScale,
    isThresholdColorScale,
} from './colors'

/** get an array of ticks in the scale domain */
export const getTicks = (scale: Scale, ticks?: number[] | string[] | number | Date[]) => {
    if (isArray(ticks)) return ticks
    if (isThresholdColorScale(scale)) {
        return scale.domain()
    }
    if (isContinuousColorScale(scale) || isContinuousAxisScale(scale)) {
        if (ticks === undefined) return scale.ticks(4) as Array<number>
        return scale.ticks(ticks) as Array<number>
    }
    if (isCategoricalColorScale(scale)) {
        return indexes(scale.domain())
    }
    return scale.ticks(ticks)
}

/** get an array of ticks in the scale range */
export const getTickCoordinates = (
    scale: Scale,
    values: undefined | number | number[] | string[] | Date[],
    shift = 0,
    size = 0 // only used for color scales
): number[] => {
    const tickValues = getTicks(scale, values)
    if (isColorScale(scale)) {
        if (isCategoricalColorScale(scale)) return []
        const domain = scale.domain()
        const domainStart = Number(domain[0])
        const domainSize = Number(domain[domain.length - 1]) - domainStart
        const result = tickValues.map(v => (size * (Number(v) - domainStart)) / domainSize)
        // for vertical color scales (size < 0), adjust the mapping to make low-high go from bottom-to-top
        return size < 0 ? result.map(v => Math.abs(size) + v) : result
    }
    if (isContinuousAxisScale(scale)) {
        return tickValues.map(v => scale(Number(v)))
    }
    const scaledShift = shift * scale.bandwidth()
    return tickValues.map(v => scale(String(v)) + scaledShift)
}
