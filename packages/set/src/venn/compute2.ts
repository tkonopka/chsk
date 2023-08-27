import { NumericPositionSpec, X, addPositions } from '@chsk/core'
import { VennProcessedDataItem } from './types'

const add = addPositions

// modifies object 'result'
export const processData2 = (
    result: [VennProcessedDataItem, VennProcessedDataItem],
    separation: number,
    proportional: boolean
) => {
    const intersection = Number(result[0]?.intersection[1])
    if (proportional) {
        // two circles with different sizes
        const { centerA, centerB, rA, rB, pointsA, pointsB, thetaA, thetaB } = computeVenn2(
            result[0].size,
            result[1].size,
            intersection,
            separation
        )
        result[0].center = centerA
        result[1].center = centerB
        result[0].r = rA
        result[1].r = rB
        result[0].points = pointsA
        result[1].points = pointsB
        const largeA = +(thetaA > Math.PI / 2)
        const largeB = +(thetaB > Math.PI / 2)
        result[0].largeArcs = [largeA, (largeA + 1) % 2]
        result[1].largeArcs = [largeB, (largeB + 1) % 2]
    } else if (intersection > 0) {
        // overlapping circles of equal sizes, symmetrical around y=0
        result[0].center[X] = -separation
        result[1].center[X] = separation
        const theta = Math.acos(separation)
        result[0].points = [
            [0, Math.sin(theta)],
            [0, -Math.sin(theta)],
        ]
        result[1].points = [...result[0].points].reverse()
        const large = +(theta > Math.PI / 2)
        result[0].largeArcs = [large, (large + 1) % 2]
        result[1].largeArcs = [large, (large + 1) % 2]
    } else {
        // non-overlapping
        result[0].center[X] = -1 - (1 - separation)
        result[1].center[X] = 1 + (1 - separation)
        result[0].points = [
            [-1 + separation, 0],
            [-1 + separation, 0],
        ]
        result[0].largeArcs = [0, 1]
        result[1].points = [
            [1 - separation, 0],
            [1 - separation, 0],
        ]
        result[1].largeArcs = [0, 1]
    }
}

export const computeVenn2 = (
    sizeA: number,
    sizeB: number,
    sizeIntersectionAB: number,
    disjointSpacing = 1
) => {
    const posA: NumericPositionSpec = [0, 0]
    const posB: NumericPositionSpec = [0, 0]
    const rA = Math.sqrt(sizeA / Math.PI)
    const rB = Math.sqrt(sizeB / Math.PI)
    const pointsA: NumericPositionSpec[] = []
    const pointsB: NumericPositionSpec[] = []
    let thetaA = 0
    let thetaB = 0
    if (sizeIntersectionAB == 0) {
        const factor = 1 + disjointSpacing / 2
        posA[X] = -rA * factor
        posB[X] = rB * factor
        const pointA: NumericPositionSpec = add(posA, [rA, 0])
        const pointB: NumericPositionSpec = add(posB, [-rB, 0])
        pointsA.push(pointA)
        pointsA.push([...pointA]) // a clone is needed because objects will be shifted later
        pointsB.push(pointB)
        pointsB.push([...pointB])
    } else if (sizeIntersectionAB === sizeA || sizeIntersectionAB === sizeB) {
        let pointA: NumericPositionSpec = [0, 0]
        let pointB: NumericPositionSpec = [0, 0]
        if (sizeIntersectionAB === sizeA) {
            posB[X] = rB - rA
            thetaA = Math.PI
            pointA = add(posA, [-rA, 0])
            pointB = add(posB, [-rB, 0])
        }
        if (sizeIntersectionAB === sizeB) {
            posB[X] = rA - rB
            thetaB = Math.PI
            pointA = add(posA, [rA, 0])
            pointB = add(posB, [rB, 0])
        }
        const r = (rA + rB) / 2
        pointsA.push([pointA[X], 0.01 * r])
        pointsA.push([pointA[X], -0.01 * r])
        pointsB.push([pointB[X], -0.01 * r])
        pointsB.push([pointB[X], 0.01 * r])
    } else {
        const range: [number, number] = [Math.abs(rA - rB), rA + rB]
        let d = (range[1] + range[0]) / 2,
            size = 0
        while (range[1] - range[0] > 1e-6 * (rA + rB)) {
            const estimate = getAreaIntersection(rA, rB, d)
            thetaA = estimate.thetaA
            thetaB = estimate.thetaB
            size = estimate.area
            if (size < sizeIntersectionAB) {
                range[1] = d
            } else {
                range[0] = d
            }
            d = (range[0] + range[1]) / 2
        }
        posA[X] = -d / 2
        posB[X] = d / 2
        pointsA.push([rA * Math.cos(thetaA) - d / 2, rA * Math.sin(thetaA)])
        pointsA.push([rA * Math.cos(thetaA) - d / 2, -rA * Math.sin(thetaA)])
        pointsB.push(pointsA[1] as NumericPositionSpec)
        pointsB.push(pointsA[0] as NumericPositionSpec)
    }

    // shift positions so that they are equidistant from the origin
    const centerX = (posA[X] + posB[X]) / 2
    posA[X] -= centerX
    posB[X] -= centerX
    pointsA.forEach(p => (p[X] -= centerX))
    pointsB.forEach(p => (p[X] -= centerX))
    return { centerA: posA, centerB: posB, rA, rB, pointsA, pointsB, thetaA, thetaB }
}

// calculate area of an arc (area between circle and a straight line cutting the arc)
const getAreaArc = (r: number, theta: number) => r * r * (theta - Math.sin(theta) * Math.cos(theta))

// given radii and a distance between two circles, compute angles from circle centers to circle intersections
const getThetas = (rA: number, rB: number, d: number) => {
    const rLarge = Math.max(rA, rB)
    const rSmall = Math.min(rA, rB)
    const rLS = rLarge / rSmall
    const thetaCritical = Math.asin(rSmall / rLarge)
    const range: [number, number] = [0, thetaCritical]
    const dCritical = rLarge * Math.cos(thetaCritical)
    let thetaLarge = 0
    const thetaSmall = (theta: number) => {
        const result = Math.asin(rLS * Math.sin(theta))
        return d < dCritical ? Math.PI - result : result
    }
    const computeD = (theta: number) => {
        return rLarge * Math.cos(theta) + rSmall * Math.cos(thetaSmall(theta))
    }
    let currentD = computeD(thetaLarge)
    while (range[1] - range[0] > 1e-4) {
        thetaLarge = (range[1] + range[0]) / 2
        currentD = computeD(thetaLarge)
        if (d > dCritical) {
            // configuration is such that smaller Theta leads to larger distance
            if (currentD > d) {
                range[0] = thetaLarge
            } else {
                range[1] = thetaLarge
            }
        } else {
            // configuration is such that smaller Theta leads to smaller distance
            if (currentD > d) {
                range[1] = thetaLarge
            } else {
                range[0] = thetaLarge
            }
        }
    }
    if (rB == rLarge) {
        return { thetaA: thetaSmall(thetaLarge), thetaB: thetaLarge }
    }
    return { thetaA: thetaLarge, thetaB: thetaSmall(thetaLarge) }
}

const getAreaIntersection = (rA: number, rB: number, d: number) => {
    const { thetaA, thetaB } = getThetas(rA, rB, d)
    return { thetaA, thetaB, area: getAreaArc(rA, thetaA) + getAreaArc(rB, thetaB) }
}
