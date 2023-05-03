import {
    NumericPositionSpec,
    FourSideSizeSpec,
    SizeSpec,
    AnchorSpec,
    PositionUnits,
    PositionUnit,
} from './types'
import { TOP, BOTTOM, LEFT, RIGHT, X, Y } from './constants'

/** round a number x to n decimal places, e.g. 33.3333 -> 33.3 */
export const roundDecimalPlaces = (x: number, n: number) => {
    if (n === 0) return Math.round(x)
    if (n === 3) return Math.round(x * 1000) / 1000
    if (n === 1) return Math.round(x * 10) / 10
    const pow10 = Math.pow(10, n)
    return Math.round(x * pow10) / pow10
}

/** calculate mean and variance for an array of numbers */
export const getMoments = (data: number[]): [number, number] => {
    const n = data.length
    if (n === 0) return [NaN, NaN]
    if (n === 1) return [data[0], NaN]
    const total = data.reduce((acc, v) => acc + v, 0)
    const mean = total / data.length
    const sumSquares = data.reduce((acc, v) => acc + (v - mean) ** 2, 0)
    return [mean, sumSquares / (n - 1)]
}

/** convert radians to degrees, degrees to radians */
export const rad2deg = (x: number) => (180 * x) / Math.PI
export const deg2rad = (x: number) => (Math.PI * x) / 180

/** get inner size given a padding vector */
export const getInnerSize = (size: SizeSpec, padding: FourSideSizeSpec): SizeSpec => {
    return [size[X] - padding[LEFT] - padding[RIGHT], size[Y] - padding[TOP] - padding[BOTTOM]]
}

/** get a position in a container */
export const getAlignPosition = (
    pos: NumericPositionSpec, // top-left corner of a container
    size: SizeSpec, // size of container
    align: SizeSpec, // relative position inside container
    padding?: FourSideSizeSpec, // padding inside the container
    offset?: NumericPositionSpec
): NumericPositionSpec => {
    const innerSize = padding ? getInnerSize(size, padding) : size
    return [
        pos[X] + (padding?.[LEFT] ?? 0) + innerSize[X] * align[X] + (offset?.[X] ?? 0),
        pos[Y] + (padding?.[TOP] ?? 0) + innerSize[Y] * align[Y] + (offset?.[Y] ?? 0),
    ]
}

/** get position of top-left corner of a rectangle */
export const getAnchoredOrigin = (
    position: NumericPositionSpec,
    size: SizeSpec,
    anchor: AnchorSpec
): NumericPositionSpec => {
    return [position[X] - anchor[X] * size[X], position[Y] - anchor[Y] * size[Y]]
}

/** get center of a box */
export const getCenter = (
    position: NumericPositionSpec,
    size: SizeSpec,
    anchor: AnchorSpec,
    offset: NumericPositionSpec
): NumericPositionSpec => {
    const corner = getAnchoredOrigin(position, size, anchor)
    return [corner[X] + size[X] / 2 + offset[X], corner[Y] + size[Y] / 2 + offset[Y]]
}

/** conversion of ambiguous data types */
export const numberPair = (x: number | [number, number]): [number, number] => {
    return Array.isArray(x) ? x : [x, x]
}
export const positionUnitPair = (x: PositionUnits): [PositionUnit, PositionUnit] => {
    return Array.isArray(x) ? x : [x, x]
}

/** vector addition */
export const addPositions = (
    a: NumericPositionSpec,
    b: NumericPositionSpec
): NumericPositionSpec => [a[X] + b[X], a[Y] + b[Y]]

/** construct a url string for css, e.g. clipPath */
export const url = (id: string | undefined) => (id ? 'url(#' + id + ')' : undefined)

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
