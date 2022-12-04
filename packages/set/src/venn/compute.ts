import { NumericPositionSpec, X } from '@chsk/core'

const PI = Math.PI
const abs = Math.abs
const sqrt = Math.sqrt
const sin = Math.sin
const cos = Math.cos

export const computeVenn2 = (
    sizeA: number,
    sizeB: number,
    sizeIntersectionAB: number,
    disjointSpacing = 1
) => {
    const posA: NumericPositionSpec = [0, 0]
    const posB: NumericPositionSpec = [0, 0]
    const rA = sqrt(sizeA / PI)
    const rB = sqrt(sizeB / PI)
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
        const threshold = sizeIntersectionAB * 0.01
        let theta = (2 * PI) / 16,
            currentSize = 0,
            n = 0
        const thetaRange = [0, PI]
        while (abs(currentSize - sizeIntersectionAB) > threshold && n < 40) {
            currentSize = getAreaIntersection(rA, rB, theta)
            if (currentSize < sizeIntersectionAB) {
                thetaRange[0] = theta
            } else {
                thetaRange[1] = theta
            }
            theta = (thetaRange[0] + thetaRange[1]) / 2
            n += 1
        }
        posA[X] = -rA * cos(theta)
        posB[X] = rB * cos(Math.asin((rA / rB) * sin(theta)))
    }

    // shift positions so that they are equidistant from the origin
    const centerX = (posA[X] + posB[X]) / 2
    posA[X] -= centerX
    posB[X] -= centerX
    return { positionA: posA, positionB: posB, rA, rB }
}

// calculate area of an arc (area between circle and a straight line cutting the arc)
const getAreaArc = (r: number, theta: number) => r * r * (theta - sin(theta) * cos(theta))

const getAreaIntersection = (rA: number, rB: number, thetaA: number) => {
    const sinThetaA = sin(thetaA)
    const sinThetaB = (rA / rB) * sinThetaA
    const thetaB = Math.asin(sinThetaB)
    return getAreaArc(rA, thetaA) + getAreaArc(rB, thetaB)
}
