import {
    angleTheta,
    NumericPositionSpec,
    squaredDistance,
    clip,
    relu,
    X,
    Y,
    SizeSpec,
    norm,
    AnchorSpec,
    addPositions,
    roundDecimalPlaces,
    LocationProps,
} from '@chsk/core'
import { cloneDeep } from 'lodash'

// a pre-computed array with zero displacement
const zeroDisplacement: NumericPositionSpec = [0, 0]

export interface BlockProps extends LocationProps {
    /** radial object size */
    r?: number
}

// internal type summarizing a block object with a center (x, y), size (w, h), and radius (r)
export type BlockObject = [number, number, number, number, number]
// indexes to access packing object (recall X=0, Y=1)
const W = 2 // width index
const H = 3 // height index
const R = 4 // radius index

export const blockObject = (
    center: NumericPositionSpec,
    size?: SizeSpec,
    r?: number
): BlockObject => {
    const result: BlockObject = [-1, -1, -1, -1, -1]
    result[X] = center[X]
    result[Y] = center[Y]
    if (r === undefined && size === undefined) {
        result[R] = 0
        return result
    }
    if (size) {
        result[W] = size[X]
        result[H] = size[Y]
        if (r === undefined) {
            result[R] = norm(size) / 2
        } else {
            result[R] = r
        }
        return result
    }
    result[R] = Number(r)
    return result
}

/**
 * calculate displacement for an item to satisfy placement against a target
 *
 * @param item object needing adjustment
 * @param obj stationary object
 * @param clearance required space between item and obstacle
 * @param charge toggle between item moving away (charge=+1) and toward (charge=-1) the target
 */
const computeDisplacement = (
    item: BlockObject,
    obj: BlockObject,
    clearance: number,
    charge: number
): NumericPositionSpec => {
    const theta = angleTheta(
        item.slice(0, 2) as NumericPositionSpec,
        obj.slice(0, 2) as NumericPositionSpec
    )
    const dx = Math.abs(item[X] - obj[X])
    const dy = Math.abs(item[Y] - obj[Y])
    const deltas = [0, 0]
    if (item[W] >= 0 && obj[W] >= 0) {
        // case where both item and target have rectangular bounding boxes
        deltas[X] = item[W] / 2 + obj[W] / 2 + Math.abs(clearance * Math.cos(theta)) - dx
        deltas[Y] = item[H] / 2 + obj[H] / 2 + Math.abs(clearance * Math.sin(theta)) - dy
    } else if (item[W] >= 0) {
        // cast where item has a bounding box, but target has a radius
        deltas[X] = item[W] / 2 + obj[R] + Math.abs(clearance * Math.cos(theta)) - dx
        deltas[Y] = item[H] / 2 + obj[R] + Math.abs(clearance * Math.sin(theta)) - dy
    } else {
        // use radii for both item and target
        const d = Math.sqrt(
            squaredDistance(
                item.slice(0, 2) as [number, number],
                obj.slice(0, 2) as [number, number]
            )
        )
        deltas[X] = item[R] + obj[R] + clearance - d
        deltas[Y] = deltas[X]
    }
    const multipliers = [0, 0]
    // avoid repulsion of already non-overlapping objects
    if (charge > 0) {
        // repulsion
        if (deltas[X] <= 0 || deltas[Y] <= 0) return zeroDisplacement
        multipliers[X] = -relu(deltas[X])
        multipliers[Y] = -relu(deltas[Y])
    } else {
        // attraction
        multipliers[X] = -relu(charge * deltas[X])
        multipliers[Y] = -relu(charge * deltas[Y])
    }
    return [charge * multipliers[X] * Math.cos(theta), charge * multipliers[Y] * Math.sin(theta)]
}

// compute total displacement due to repulsion of items from themselves and from obstacles
const totalRepulsion = (
    index: number,
    items: BlockObject[],
    obstacles: BlockObject[],
    clearance: number
): NumericPositionSpec => {
    const target = items[index]
    const result: NumericPositionSpec = [0, 0]
    const updateResult = (displacement: NumericPositionSpec, weight: number) => {
        result[0] += displacement[0] * weight
        result[1] += displacement[1] * weight
    }
    obstacles.forEach(item => {
        const displacement = computeDisplacement(target, item, clearance, +1)
        updateResult(displacement, 1)
    })
    items.forEach((item, i) => {
        if (i === index && item[X] === target[X] && item[Y] === target[Y]) return
        const displacement = computeDisplacement(target, item, clearance, +1)
        updateResult(displacement, 0.5)
    })
    return result
}

// compute total displacement due to attraction of items back to their preferred locations
const totalAttraction = (
    index: number,
    items: BlockObject[],
    attractors: BlockObject[],
    clearance: number
): NumericPositionSpec => {
    const target = items[index]
    const attractor = attractors[index]
    return computeDisplacement(target, attractor, clearance, -1)
}

/** update a 2d position using a translation vector */
const updateXY = (
    position: number[],
    displacement: NumericPositionSpec,
    lr: number,
    minDelta: number,
    maxDelta: number
) => {
    // these if statements are meant to avoid changing positions in cases
    // with displacement as small as 1e-15,
    // which can arise during near-vertical/near-horizontal adjustments
    if (Math.abs(displacement[X]) > minDelta) {
        position[X] += clip(lr * displacement[X], -maxDelta, maxDelta)
    }
    if (Math.abs(displacement[Y]) > minDelta) {
        position[Y] += clip(lr * displacement[Y], -maxDelta, maxDelta)
    }
}

/** compute label positions, taking into account immovable data points */
export const arrangeBlockObjects = ({
    items,
    obstacles = [],
    clearance = 0,
    lr = 1,
    maxIterations = 6,
    minDelta = 0.05,
    maxDelta = 20,
}: {
    items: BlockObject[]
    obstacles?: BlockObject[]
    clearance?: number // distance between items and obstacles
    lr?: number // (initial) learning rate
    maxIterations?: number // change in learning rate at each epoch
    minDelta?: number // minimum position update
    maxDelta?: number // maximum update in one iteration
}) => {
    const result = cloneDeep(items)
    const attractors = items.map(item => {
        const result: BlockObject = [...item]
        result[W] = -1
        result[H] = -1
        return result
    })

    const indexes = Array.from(Array(items.length).keys())
    let n = 0
    const alpha = 1 / Math.max(1, maxIterations)
    while (lr > 0 && n < maxIterations) {
        const repulsion: NumericPositionSpec[] = indexes.map(index => {
            return totalRepulsion(index, result, obstacles, clearance)
        })
        const attraction: NumericPositionSpec[] = indexes.map(index => {
            return totalAttraction(index, result, attractors, clearance)
        })
        let maxDisplacement = 0
        indexes.forEach(index => {
            const displacement = addPositions(repulsion[index], attraction[index])
            displacement[X] = roundDecimalPlaces(displacement[X], 4)
            displacement[Y] = roundDecimalPlaces(displacement[Y], 4)
            updateXY(result[index], displacement, lr, minDelta, maxDelta)
            maxDisplacement = Math.max(
                maxDisplacement,
                Math.max(Math.abs(displacement[X]), Math.abs(displacement[Y]))
            )
        })
        // perform some iterations with full learning rate, then decrease adjustments
        if (n > 2) {
            lr -= alpha
        }
        if (lr * maxDisplacement < minDelta) {
            lr = 0
        }
        n = n + 1
    }

    return result.map(item => ({
        position: item.slice(0, 2) as NumericPositionSpec,
        anchor: [0.5, 0.5] as AnchorSpec,
    }))
}
