import { createContinuousScale, interval, NumericPositionSpec } from '@chsk/core'
import { sortedIndex } from 'lodash'
import { HistogramDataItem } from './types'

// create a series of [x, y] points such that:
// - typical points capture the center of a bin and the height of the bin
// - boundary points capture the edges of the bin and repeat the height of the boundary bin
const formatBinnedData = (values: number[], breaks: number[]) => {
    const n = breaks.length
    const result: NumericPositionSpec[] = Array(n + 1).fill([0, 0])
    result[0] = [breaks[0], values[0]]
    result[n] = [breaks[n - 1], values[n - 2]]
    values.forEach((count, i) => {
        result[i + 1] = [(breaks[i + 1] + breaks[i]) / 2.0, count]
    })
    return result
}

export const binValues = (data: number[], breaks: number[], density: boolean) => {
    const values = Array(breaks.length - 1).fill(0)
    if (data.length === 0) {
        return formatBinnedData(values, breaks)
    }
    const min = breaks[0]
    const max = breaks[breaks.length - 1]
    data.filter(v => v >= min && v < max).forEach(v => {
        const index = sortedIndex(breaks, v)
        values[index - 1] += 1
    })
    if (density) {
        const total = values.reduce((acc, v) => acc + v, 0)
        values.forEach((v, i) => {
            const width = breaks[i + 1] - breaks[i]
            values[i] = v / (width * total)
        })
    }
    return formatBinnedData(values, breaks)
}

// guess a set of breakpoints using 'ticks' from d3 scales
export const getBreaksArray = (data: Array<HistogramDataItem>, breaks: number) => {
    const minmax = interval(data.map(seriesData => interval(seriesData.data)).flat())
    const scale = createContinuousScale({ variant: 'linear', size: 100, domain: minmax })
    let result = scale.ticks(Math.max(2, breaks))
    const step = result[1] - result[0]
    const last = result[result.length - 1]
    if (last < minmax[1]) {
        result.push(last + step)
    }
    if (result[0] > minmax[0]) {
        result = [result[0] - step].concat(result)
    }
    return result
}
