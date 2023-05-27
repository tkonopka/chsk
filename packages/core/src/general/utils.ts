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
export const cloneProps = <T>(x: T, deep = true): T => {
    if (x === undefined || x === null) return x
    if (isArray(x)) {
        if (deep) {
            return x.map(v => cloneProps(v, deep)) as T
        } else {
            return [...x] as T
        }
    }
    if (typeof x === 'object') {
        if (x instanceof Date) {
            return deep ? (new Date(x) as T) : x
        }
        if (deep) {
            const result: Record<string, unknown> = {}
            for (const [k, v] of Object.entries(x)) {
                result[k] = cloneProps(v, deep)
            }
            return result as T
        } else {
            return { ...x }
        }
    }
    return x as T
}
