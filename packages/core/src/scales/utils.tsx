import { BandAxisScale } from './types'
import { sortedIndex } from 'lodash'
import { NumericPositionSpec, X, Y } from '../general'
import { DetectorZone, DetectorIntervals } from './types'

// get min and max values in an array
export const getMinMax = (values: Array<number>, fallback = [1, 1]): [number, number] => {
    const min = values.reduce((acc, v) => Math.min(acc, v), values[0])
    const max = values.reduce((acc, v) => Math.max(acc, v), values[0])
    if (min === undefined && max === undefined) return [fallback[0], fallback[1]]
    return [min, max]
}

// get  max values in an array
export const getMax = (values: Array<number>, fallback = 1): number => {
    const max = values.reduce((acc, v) => Math.max(acc, v), values[0])
    return max === undefined ? fallback : max
}

// create intervals associated with bands
// result is an array with potentially many duplicates, e.g. [0, 1, 1, 2, 2, 3]
// the duplicates are needed to support band scales with custom padding
export const createBandDetectorIntervals = (
    scale: BandAxisScale,
    targets: Set<string>
): number[] => {
    const halfStep = scale.step() / 2
    return scale
        .domain()
        .filter(item => targets.has(item))
        .map(item => {
            const value = scale(item)
            return [value - halfStep, value + halfStep]
        })
        .flat()
        .sort((a: number, b: number) => a - b)
}

// determine if cursor is inside current detection zone
export const inZone = (pos: NumericPositionSpec, zone: DetectorZone | null): boolean => {
    if (zone === null) return false
    return (
        pos[X] >= zone[X][0] && pos[X] <= zone[X][1] && pos[Y] >= zone[Y][0] && pos[Y] <= zone[Y][1]
    )
}

export const findZone = (
    pos: NumericPositionSpec,
    intervals: DetectorIntervals
): DetectorZone | null => {
    const i = sortedIndex(intervals[X], pos[X])
    const j = sortedIndex(intervals[Y], pos[Y])
    if (i % 2 == 0 || j % 2 == 0) return null
    return [intervals[X].slice(i - 1, i + 1), intervals[Y].slice(j - 1, j + 1)] as DetectorZone
}
