import { NumericPositionSpec, X, Y } from '@chsk/core'
import { VennProcessedDataItem, VennIntersectionSpec } from './types'

const midpoint = (a: NumericPositionSpec, b: NumericPositionSpec): NumericPositionSpec => {
    return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
}

const distance = (a: NumericPositionSpec, b: NumericPositionSpec): number => {
    return Math.sqrt((a[X] - b[X]) ** 2 + (a[Y] - b[Y]) ** 2)
}

const getAngle = (a: NumericPositionSpec, b: NumericPositionSpec): number => {
    const deltaX = b[X] - a[X]
    const deltaY = b[Y] - a[Y]
    if (deltaX === 0) {
        return deltaY >= 0 ? 0 : Math.PI
    }
    const result = Math.atan(deltaX / Math.abs(deltaY))
    return deltaY >= 0 ? result : Math.PI - result
}

const getTranslatedPosition = (
    start: NumericPositionSpec,
    distance: number,
    angle: number
): NumericPositionSpec => {
    const result: NumericPositionSpec = [start[X], start[Y]]
    result[X] += distance * Math.sin(angle)
    result[Y] += distance * Math.cos(angle)
    return result
}

// compute intersection labels for a three-set venn diagram
// assumes the VennProcessedDataItem objects are centered around [0, 0]
export const get3Positions = (data: Array<VennProcessedDataItem>): Array<VennIntersectionSpec> => {
    const A = data[0]
    const B = data[1]
    const C = data[2]
    // distance from origin to one of the center
    const d0 = distance([0, 0], A.position)
    // distance from center to outer intersection
    const d = distance(A.position, B.position)
    const sep = d / 2
    // midpoint between A and B, determines the global orientation of the diagram
    const midAB = midpoint(A.position, B.position)
    const rotation = getAngle([0, 0], midAB)
    // distance from AB axis and intersection of A and B circles
    const h3 = Math.sqrt(1 - sep * sep)
    // distance from center to the AB axis
    const dAB = distance([0, 0], midAB)
    // distance from origin to intersection of A and B circles
    const h2 = h3 + dAB
    // distance from origin to nearest circle
    const h1 = 1 - d0
    // distance from center to center of space shared by two sets
    const sharedD = (h1 + h2) / 2
    // apply sine rule to compute position of inner intersection
    const angleThird = (2 * Math.PI) / 3
    const gamma = Math.asin(d0 * Math.sin(angleThird))
    const eta = Math.PI - angleThird - gamma
    const innerD = Math.sin(eta) / Math.sin(angleThird)
    // distance from center to a location within one set that does not overlap with other sets
    const exclusiveD = (innerD + (1 + d0)) / 2
    return [
        // first three items represent elements unique to A, B, C
        {
            position: getTranslatedPosition([0, 0], exclusiveD, rotation - angleThird / 2),
            value: A.size - A.intersection[1] - A.intersection[2] + A.common,
            label: A.id + ' ∩ !' + B.id + ' ∩ !' + C.id,
        },
        {
            position: getTranslatedPosition([0, 0], exclusiveD, rotation + angleThird / 2),
            value: B.size - B.intersection[0] - B.intersection[2] + B.common,
            label: B.id + ' ∩ !' + A.id + ' ∩ !' + C.id,
        },
        {
            position: getTranslatedPosition([0, 0], exclusiveD, rotation + Math.PI),
            value: C.size - C.intersection[0] - C.intersection[1] + C.common,
            label: C.id + ' ∩ !' + A.id + ' ∩ !' + B.id,
        },
        // next three items are intersections between AB, BC, CA,
        {
            position: getTranslatedPosition([0, 0], sharedD, rotation + 0),
            value: A.intersection[1] - A.common,
            label: A.id + ' ∩ ' + B.id + ' ∩ !' + C.id,
        },
        {
            position: getTranslatedPosition([0, 0], sharedD, rotation + angleThird),
            value: B.intersection[2] - B.common,
            label: B.id + ' ∩ ' + C.id + ' ∩ !' + A.id,
        },
        {
            position: getTranslatedPosition([0, 0], sharedD, rotation - angleThird),
            value: C.intersection[0] - C.common,
            label: A.id + ' ∩ ' + C.id + ' ∩ !' + B.id,
        },
        // last element is intersection of all sets
        {
            position: [0, 0],
            value: A.common,
            label: A.id + ' ∩ ' + B.id + ' ∩ ' + C.id,
        },
    ]
}

// compute intersection labels for a two-set venn diagram
export const get2Positions = (data: Array<VennProcessedDataItem>): Array<VennIntersectionSpec> => {
    const A = data[0]
    const B = data[1]
    const angleA = getAngle(A.position, B.position)
    const angleB = getAngle(B.position, A.position)
    const d = distance(A.position, B.position) // distance between two circles
    const disjoint = d >= A.r + B.r
    // positions at circumference inside circles A, B
    const sA = getTranslatedPosition(A.position, d - B.r, angleA)
    const sB = getTranslatedPosition(B.position, d - A.r, angleB)
    // positions opposite sA and sB
    const oA = getTranslatedPosition(A.position, A.r, angleA - Math.PI)
    const oB = getTranslatedPosition(B.position, B.r, angleB - Math.PI)
    //
    if (disjoint) {
        return [
            {
                position: A.position,
                value: A.size,
                label: A.id + ' ∩ !' + B.id,
            },
            {
                position: B.position,
                value: B.size,
                label: B.id + ' ∩ !' + A.id,
            },
        ]
    }
    return [
        {
            position: midpoint(sA, oA),
            value: A.size - A.common,
            label: A.id + ' ∩ !' + B.id,
        },
        {
            position: midpoint(sB, oB),
            value: B.size - B.common,
            label: B.id + ' ∩ !' + A.id,
        },
        {
            position: midpoint(sA, sB),
            value: A.common,
            label: A.id + ' ∩ ' + B.id,
        },
    ]
}

// get intersection labels for a single set
export const get1Positions = (data: Array<VennProcessedDataItem>): Array<VennIntersectionSpec> => {
    const A = data[0]
    return [{ position: A.position, value: A.intersection[0], label: A.id }]
}
