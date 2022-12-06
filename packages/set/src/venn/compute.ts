import { NumericPositionSpec, X } from '@chsk/core'

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
    if (sizeIntersectionAB == 0) {
        posA[X] = -rA * (1 + disjointSpacing / 2)
        posB[X] = rB * (1 + disjointSpacing / 2)
    } else if (sizeIntersectionAB === sizeA || sizeIntersectionAB === sizeB) {
        if (sizeIntersectionAB === sizeA) {
            posB[X] = rB - rA
        }
        if (sizeIntersectionAB === sizeB) {
            posB[X] = rA - rB
        }
    } else {
        const range = [Math.abs(rA - rB), rA + rB]
        let d = (range[1] + range[0]) / 2,
            size = 0
        while (range[1] - range[0] > 1e-4 * (rA + rB)) {
            size = getAreaIntersection(rA, rB, d)
            if (size < sizeIntersectionAB) {
                range[1] = d
            } else {
                range[0] = d
            }
            d = (range[0] + range[1]) / 2
        }
        posA[X] = -d / 2
        posB[X] = d / 2
    }

    // shift positions so that they are equidistant from the origin
    const centerX = (posA[X] + posB[X]) / 2
    posA[X] -= centerX
    posB[X] -= centerX
    return { positionA: posA, positionB: posB, rA, rB }
}

// calculate area of an arc (area between circle and a straight line cutting the arc)
const getAreaArc = (r: number, theta: number) => r * r * (theta - Math.sin(theta) * Math.cos(theta))

// given radii and a distance between two circles, compute angles from circle centers to circle intersections
const getThetas = (rA: number, rB: number, d: number) => {
    const rLarge = Math.max(rA, rB)
    const rSmall = Math.min(rA, rB)
    const rLS = rLarge / rSmall
    const range = [0, Math.asin(rSmall / rLarge)]
    let thetaLarge = 0
    const thetaSmall = (theta: number) => {
        return Math.asin(rLS * Math.sin(theta))
    }
    const computeD = (theta: number) => {
        return rLarge * Math.cos(theta) + rSmall * Math.cos(thetaSmall(theta))
    }
    let currentD = computeD(thetaLarge)
    while (range[1] - range[0] > 1e-6) {
        thetaLarge = (range[1] + range[0]) / 2
        currentD = computeD(thetaLarge)
        if (currentD > d) {
            range[0] = thetaLarge
        } else {
            range[1] = thetaLarge
        }
    }
    if (rB == rLarge) {
        return { thetaA: thetaSmall(thetaLarge), thetaB: thetaLarge }
    }
    return { thetaA: thetaLarge, thetaB: thetaSmall(thetaLarge) }
}

const getAreaIntersection = (rA: number, rB: number, d: number) => {
    const { thetaA, thetaB } = getThetas(rA, rB, d)
    return getAreaArc(rA, thetaA) + getAreaArc(rB, thetaB)
}
