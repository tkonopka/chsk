/** utility functions for mathematical transformations */

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
