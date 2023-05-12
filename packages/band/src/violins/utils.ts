import { ViolinPreparedSummary } from './types'
import { histogramPoints, max, NumericPositionSpec } from '@chsk/core'

const trimIndexes = (values: number[]): [number, number] => {
    let start = 0
    let end = values.length
    while (values[start] === 0 && start < end) {
        start += 1
    }
    while (values[end - 1] === 0 && end > start) {
        end -= 1
    }
    return [start, end]
}

export const violinPoints = ({
    values,
    breaks,
    bandStart,
    bandWidth,
    horizontal,
}: ViolinPreparedSummary & { horizontal: boolean }): NumericPositionSpec[] => {
    const maxValue = max(values)
    if (maxValue <= 0) return []

    const [start, end] = trimIndexes(values)
    const histogram = histogramPoints(values.slice(start, end), breaks.slice(start, end + 1))
    const halfWidth = bandWidth / 2
    const midBand = bandStart + halfWidth
    const fwd = histogram.map(xy => [
        xy[0],
        midBand + (xy[1] / maxValue) * halfWidth,
    ]) as NumericPositionSpec[]
    const rev = histogram
        .map(xy => [xy[0], midBand - (xy[1] / maxValue) * halfWidth])
        .reverse() as NumericPositionSpec[]
    const result = fwd.concat(rev)
    if (horizontal) {
        return result
    }
    return result.map(xy => [xy[1], xy[0]]) as NumericPositionSpec[]
}
