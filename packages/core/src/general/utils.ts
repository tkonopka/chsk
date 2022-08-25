import { NumericPositionSpec, FourSideSizeSpec, SizeSpec } from './types'
import { BOTTOM, HEIGHT, LEFT, RIGHT, TOP, WIDTH, X, Y } from './constants'

/** round a number x to n decimal places, e.g. 33.3333 -> 33.3 */
export const roundDecimalPlaces = (x: number, n: number) => {
    if (n === 0) return Math.round(x)
    if (n === 3) return Math.round(x * 1000) / 1000
    if (n === 1) return Math.round(x * 10) / 10
    const pow10 = Math.pow(10, n)
    return Math.round(x * pow10) / pow10
}

/** convert radians to degrees */
export const rad2deg = (x: number) => {
    return (180 * x) / Math.PI
}

/** get inner size given a padding vector */
export const getInnerSize = (size: SizeSpec, padding: FourSideSizeSpec): SizeSpec => {
    return [
        size[WIDTH] - padding[LEFT] - padding[RIGHT],
        size[HEIGHT] - padding[TOP] - padding[BOTTOM],
    ]
}

/** get a position in a container */
export const getAlignPosition = (
    pos: NumericPositionSpec,
    size: SizeSpec,
    padding: FourSideSizeSpec,
    align: SizeSpec
): NumericPositionSpec => {
    const innerSize = getInnerSize(size, padding)
    return [
        pos[X] + padding[LEFT] + innerSize[X] * align[X],
        pos[Y] + padding[TOP] + innerSize[Y] * align[Y],
    ]
}

export const binSearch = (values: Array<number>, target: number): number => {
    const n = values.length
    if (n === 0) return 0
    // basic binary search
    let start = 0,
        end = n - 1
    while (start < end) {
        const mid = Math.floor((end + start) / 2)
        const value = values[mid]
        if (target <= value) {
            end = mid
        }
        if (target > value) {
            start = mid + 1
        }
    }
    // left-align to first index
    while (start > 0 && target === values[start] && target === values[start - 1]) {
        start -= 1
    }
    // special case when target is larger than last element
    if (start === n - 1 && target > values[start]) {
        start += 1
    }
    return start
}
