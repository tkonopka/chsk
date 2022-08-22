import {AxisScale, ColorScale} from "./types";
import { isContinuousAxisScale } from "./axis";
import {isColorScale, isContinuousColorScale} from './color';

/** get an array of ticks in the scale domain */
export const getTicks = (scale: AxisScale | ColorScale, ticks: number | undefined) => {
    if (isColorScale(scale)) {
        if (isContinuousColorScale(scale)) {
            if (ticks === undefined) return scale.ticks(4) as Array<number>
            return scale.ticks(ticks) as Array<number>
        }
    } else {
        if (isContinuousAxisScale(scale)) {
            if (ticks === undefined) return scale.ticks(4) as Array<number>
            return scale.ticks(ticks) as Array<number>
        }
    }
    return scale.domain()
}

/** get an array of ticks in the scale range */
export const getTickCoordinates = (
    scale: AxisScale,
    values: undefined | number | number[] | string[],
    shift = 0
) => {
    const tickValues = Array.isArray(values) ? values : getTicks(scale, values)
    if (isContinuousAxisScale(scale)) {
        return tickValues.map(v => scale(Number(v)))
    }
    const scaledShift = Number(shift) * scale.bandwidth()
    return tickValues.map(v => scale(String(v)) + scaledShift)
}
