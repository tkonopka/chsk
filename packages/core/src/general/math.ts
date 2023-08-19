/** utility functions for mathematical transformations */

import { scaleLinear } from 'd3-scale'
import { NumericPositionSpec } from './types'
import { X, Y } from './constants'

/** round a number x to n decimal places, e.g. 33.3333 -> 33.3 */
export const roundDecimalPlaces = (x: number, n: number) => {
    if (n === 0) return Math.round(x)
    if (n === 3) return Math.round(x * 1000) / 1000
    if (n === 1) return Math.round(x * 10) / 10
    const pow10 = Math.pow(10, n)
    return Math.round(x * pow10) / pow10
}

/** convert radians to degrees, degrees to radians */
export const rad2deg = (x: number) => (180 * x) / Math.PI
export const deg2rad = (x: number) => (Math.PI * x) / 180

/** get min and max values in an array */
export const interval = (values: Array<number>, fallback = [1, 1]): [number, number] => {
    const min = values.reduce((acc, v) => Math.min(acc, v), values[0])
    const max = values.reduce((acc, v) => Math.max(acc, v), values[0])
    if (min === undefined && max === undefined) return [fallback[0], fallback[1]]
    return [min, max]
}

/** get the maximum value in an array */
export const max = (values: Array<number>, fallback = 1): number => {
    const max = values.reduce((acc, v) => Math.max(acc, v), values[0])
    return max === undefined ? fallback : max
}

export const mean = (data: number[]): number => {
    const n = data.length
    if (n === 0) return NaN
    if (n === 1) return data[0]
    return data.reduce((acc, v) => acc + v, 0) / n
}

/** calculate mean and variance for an array of numbers */
export const moments = (data: number[]): [number, number] => {
    const n = data.length
    if (n === 0) return [NaN, NaN]
    if (n === 1) return [data[0], NaN]
    const total = data.reduce((acc, v) => acc + v, 0)
    const mean = total / data.length
    const sumSquares = data.reduce((acc, v) => acc + (v - mean) ** 2, 0)
    return [mean, sumSquares / (n - 1)]
}

/** ensure a number x is >= 0, useful to avoid negative widths and heights */
export const relu = (x: number) => Math.max(0, x)

/** compute distance between two points */
export const distance = (a: NumericPositionSpec, b: NumericPositionSpec): number => {
    return Math.sqrt((a[X] - b[X]) ** 2 + (a[Y] - b[Y]) ** 2)
}

/** compute squared distances between two points */
export const squaredDistance = (a: NumericPositionSpec, b: NumericPositionSpec): number => {
    return (a[X] - b[X]) ** 2 + (a[Y] - b[Y]) ** 2
}

/** l2 norm for a point in 2 dimensions */
export const norm = (a: NumericPositionSpec): number => {
    return Math.sqrt(a[X] ** 2 + a[Y] ** 2)
}

/** compute angle between two points */
export const angleTheta = (a: NumericPositionSpec, b: NumericPositionSpec): number => {
    const deltaY = b[Y] - a[Y]
    const deltaX = b[X] - a[X]
    if (deltaX === 0 && deltaY === 0) return 0
    const atan = Math.atan(deltaY / deltaX)
    if (deltaX < 0) {
        if (deltaY === 0) return Math.PI
        if (deltaY > 0) return Math.PI + atan
        if (deltaY < 0) return -Math.PI + atan
    }
    return atan
}

/** ensure a number x is in the interval [lower, upper] */
export const clip = (x: number, lower: number, upper: number) => Math.max(lower, Math.min(upper, x))

/** create a sequence of numbers, e.g. [0,1,2,3] */
export const range = (a: number, b?: number): number[] => {
    if (b === undefined) return Array.from(Array(Math.floor(a)).keys())
    const n = Math.abs(b - a)
    const result = Array(n)
    const step = Math.sign(b - a)
    let i = 0
    while (i < n) {
        result[i] = a + i * step
        i += 1
    }
    return result
}

/** create a sequence of numbers to match an array, e.g. [0,1,2,3] */
export const indexes = (a: unknown[]): number[] => {
    return Array.from(Array(a.length).keys())
}

/**
 * create a series of positions [a, b] to represent a histogram
 *
 * In the output, most points represent the center of a bin (a) and the height of that bin (b).
 * Boundary points represent the edges of the histogram and repeat the height of the boundary bin.
 */
export const histogramPoints = (values: number[], breaks: number[]) => {
    const n = breaks.length
    const result: NumericPositionSpec[] = Array(n + 1).fill([0, 0])
    result[0] = [breaks[0], values[0]]
    result[n] = [breaks[n - 1], values[n - 2]]
    values.forEach((value, i) => {
        result[i + 1] = [(breaks[i + 1] + breaks[i]) / 2.0, value]
    })
    return result
}

/** find index of a target in a sorted array, replacement for lodash sortedIndex */
export const sortedIndex = (data: number[], target: number): number => {
    let low = 0
    let high = data.length
    while (low < high) {
        const mid = (low + high) >>> 1
        if (data[mid] < target) {
            low = mid + 1
        } else {
            high = mid
        }
    }
    return high
}

/** compute a binned representation of an array of data points */
export const binValues = (data: number[], breaks: number[], density: boolean) => {
    const values = Array<number>(breaks.length - 1).fill(0)
    if (data.length === 0) {
        return values
    }
    const min = breaks[0]
    const max = breaks[breaks.length - 1]
    data.filter(v => v >= min && v <= max).forEach(v => {
        const index = sortedIndex(breaks, v)
        // may over-estimate density in lowest bin when points are exactly equal to lower bound
        values[index === 0 ? index : index - 1] += 1
    })
    if (density) {
        const total = values.reduce((acc, v) => acc + v, 0)
        values.forEach((v, i) => {
            const width = breaks[i + 1] - breaks[i]
            values[i] = v / (width * total)
        })
    }
    return values
}

/** guess a set of breakpoints using 'ticks' from a d3 linear scale */
export const breaks = (data: number[], n: number) => {
    const minmax = interval(data)
    const scale = scaleLinear().range([0, 100]).domain(minmax).clamp(false)
    let result = scale.ticks(Math.max(2, n))
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
