import { NumericPositionSpec, SideSizeSpec, SizeSpec } from './types'
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
export const getInnerSize = (size: SizeSpec, padding: SideSizeSpec): SizeSpec => {
    return [
        size[WIDTH] - padding[LEFT] - padding[RIGHT],
        size[HEIGHT] - padding[TOP] - padding[BOTTOM],
    ]
}

/** get a position in a container */
export const getAlignPosition = (
    pos: NumericPositionSpec,
    size: SizeSpec,
    padding: SideSizeSpec,
    align: SizeSpec
): NumericPositionSpec => {
    const innerSize = getInnerSize(size, padding)
    return [
        pos[X] + padding[LEFT] + innerSize[X] * align[X],
        pos[Y] + padding[TOP] + innerSize[Y] * align[Y],
    ]
}
