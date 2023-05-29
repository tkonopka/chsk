import {
    NumericPositionSpec,
    FourSideSizeSpec,
    SizeSpec,
    AnchorSpec,
    PositionUnits,
    PositionUnit,
} from './types'
import { TOP, BOTTOM, LEFT, RIGHT, X, Y } from './constants'

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

// shorthand function used in cloneProps
const isArray = Array.isArray

/** create a copy of an input props object
 *
 * This is a partial replacement for lodash clone and cloneDeep,
 * which clones primitives, objects, and arrays, but does not handle
 * types that are not relevant to chsk.
 */
export const cloneProps = <T>(x: T): T => {
    if (x === undefined || x === null) return x
    if (isArray(x)) {
        return x.map(v => cloneProps(v)) as T
    }
    if (typeof x === 'object') {
        if (x instanceof Date) {
            return new Date(x) as T
        }
        const result: Record<string, unknown> = {}
        for (const [k, v] of Object.entries(x)) {
            result[k] = cloneProps(v)
        }
        return result as T
    }
    return x as T
}

/**
 * combine content of two objects.
 *
 * This is similar to lodash merge, but handles fewer object types.
 * It is appropriate for merging props relevant to chsk.
 *
 * @param x primary object, the function will modify this object
 * @param y secondary object
 */
export const mergeProps = <T>(x: T, y: T): T => {
    if (x === undefined || x === null || y === null) return y
    if (y === undefined) return x
    if (typeof x !== typeof y || isArray(x)) return y
    if (typeof x === 'object') {
        if (x instanceof Date) return y
        const result = x as Record<string, unknown>
        const xObj = x as Record<string, unknown>
        const yObj = y as Record<string, unknown>
        const xKeys = Object.keys(x)
        const yKeys = Object.keys(yObj)
        // for small objects, indexOf() is faster that constructing sets and using has()
        for (const k of xKeys.values()) {
            if (yKeys.indexOf(k) >= 0) {
                result[k] = mergeProps(xObj[k], yObj[k])
            }
        }
        for (const k of yKeys.values()) {
            if (xKeys.indexOf(k) < 0) {
                result[k] = yObj[k]
            }
        }
        return result as T
    }
    return y
}
