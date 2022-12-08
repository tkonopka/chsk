import { NumericPositionSpec, X, Y } from '@chsk/core'
import { VennProcessedDataItem } from './types'

// specification for a label position
export type IntersectionItemSpec = {
    position: NumericPositionSpec
    value: number
    label: string
}

export const midpoint = (a: NumericPositionSpec, b: NumericPositionSpec): NumericPositionSpec => {
    return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
}

// compute intersection labels for a three-set venn diagram
// assumes the VennProcessedDataItem objects are centered around [0, 0]
export const get3Positions = (data: Array<VennProcessedDataItem>): Array<IntersectionItemSpec> => {
    const A = data[0]
    const B = data[1]
    const C = data[2]
    // distance from center to top intersection
    const h3 = Math.sqrt(1 - A.position[X] * A.position[X])
    const h2 = h3 + Math.abs(A.position[Y])
    const h1 = C.position[Y] + 1
    const sharedD = (h1 + h2) / 2
    const angleThird = (2 * Math.PI) / 3
    // apply sine rule to compute position of inner intersection
    const gamma = Math.asin(Math.abs(C.position[Y]) * Math.sin(angleThird))
    const eta = Math.PI - angleThird - gamma
    const innerD = Math.sin(eta) / Math.sin(angleThird)
    const exclusiveD = (innerD + (1 - C.position[Y])) / 2
    return [
        // first three items represent elements unique to A, B, C
        {
            position: [
                -exclusiveD * Math.sin(angleThird / 2),
                exclusiveD * Math.cos(angleThird / 2),
            ],
            value: A.size - A.intersection[1] - A.intersection[2] + A.common,
            label: A.id + ' ∩ !' + B.id + ' ∩ !' + C.id,
        },
        {
            position: [
                exclusiveD * Math.sin(angleThird / 2),
                exclusiveD * Math.cos(angleThird / 2),
            ],
            value: B.size - B.intersection[0] - B.intersection[2] + B.common,
            label: B.id + ' ∩ !' + A.id + ' ∩ !' + C.id,
        },
        {
            position: [0, -exclusiveD],
            value: C.size - C.intersection[0] - C.intersection[1] + C.common,
            label: C.id + ' ∩ !' + A.id + ' ∩ !' + B.id,
        },
        // next three items are intersections between AB, BC, CA,
        {
            position: [0, sharedD],
            value: A.intersection[1] - A.common,
            label: A.id + ' ∩ ' + B.id + ' ∩ !' + C.id,
        },
        {
            position: [sharedD * Math.sin(angleThird), sharedD * Math.cos(angleThird)],
            value: B.intersection[2] - B.common,
            label: B.id + ' ∩ ' + C.id + ' ∩ !' + A.id,
        },
        {
            position: [-sharedD * Math.sin(angleThird), sharedD * Math.cos(angleThird)],
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
export const get2Positions = (data: Array<VennProcessedDataItem>): Array<IntersectionItemSpec> => {
    const A = data[0]
    const B = data[1]
    // positions of the set centers
    const xA = A.position[X]
    const xB = B.position[X]
    const d = Math.abs(xA - xB) // distance between two circles
    const disjoint = d >= A.r + B.r
    // distances from center to other circle
    const sA = d - B.r
    const sB = d - A.r
    if (disjoint) {
        return [
            {
                position: A.position,
                value: A.size,
                label: A.id + ' exclusive',
            },
            {
                position: B.position,
                value: B.size,
                label: B.id + ' exclusive',
            },
        ]
    }
    return [
        {
            position: midpoint([xA - A.r, 0], [xA + sA, 0]),
            value: A.size - A.common,
            label: A.id + ' exclusive',
        },
        {
            position: midpoint([xB + B.r, 0], [xB - sB, 0]),
            value: B.size - B.common,
            label: B.id + ' exclusive',
        },
        {
            position: midpoint([xA + sA, 0], [xB - sB, 0]),
            value: A.intersection[1],
            label: A.id + ' ∩ ' + B.id,
        },
    ]
}

// get intersection labels for a single set
export const get1Positions = (data: Array<VennProcessedDataItem>): Array<IntersectionItemSpec> => {
    const A = data[0]
    return [{ position: A.position, value: A.intersection[0], label: A.id }]
}
