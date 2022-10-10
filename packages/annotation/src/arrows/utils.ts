import { NumericPositionSpec, X, Y } from '@chsk/core'
import { getStartToEndAxis } from '../lines/utils'

// points for the stem end of a block arrow
const stemPoints = (halfStemWidth: number, headLength: number, halfLength: number) => {
    const startY = Math.sign(-halfLength) * Math.min(0, Math.abs(halfLength) - Math.abs(headLength))
    return [
        [-halfStemWidth, startY],
        [-halfStemWidth, halfLength], // base, left side
        [halfStemWidth, halfLength], // base, right side
        [halfStemWidth, startY],
    ]
}

// points for the head end of a block arrow
const headPoints = (
    halfStemWidth: number,
    halfHeadWidth: number,
    headLength: number,
    halfLength: number
) => {
    const result = [
        [-halfStemWidth, 0],
        [-halfStemWidth, halfLength - headLength],
        [-halfHeadWidth, halfLength - headLength],
        [0, halfLength], // tip of arrow
        [halfHeadWidth, halfLength - headLength],
        [halfStemWidth, halfLength - headLength],
        [halfStemWidth, 0],
    ]
    if (Math.abs(halfLength) < Math.abs(headLength)) return result.slice(1, 6)
    return result
}

export const getBlockArrowPoints = ({
    start,
    end,
    heads,
    headWidth,
    headLength,
    stemWidth,
}: {
    start: NumericPositionSpec
    end: NumericPositionSpec
    heads: [boolean, boolean]
    headWidth: number
    headLength: number
    stemWidth: number
}): [number, number][] => {
    const { deltaX, deltaY, cosBeta, sinBeta } = getStartToEndAxis(start, end)

    // shorthand for arrow features
    const halfLength = Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 2
    const halfStemWidth = stemWidth / 2
    const halfHeadWidth = headWidth / 2

    // construct points a block arrow that points upward
    const pointsA = heads[0]
        ? headPoints(halfStemWidth, halfHeadWidth, headLength, halfLength)
        : stemPoints(halfStemWidth, headLength, halfLength)
    const pointsB = heads[1]
        ? headPoints(-halfStemWidth, -halfHeadWidth, -headLength, -halfLength)
        : stemPoints(-halfStemWidth, -headLength, -halfLength)
    const result = pointsA.concat(pointsB.slice(1))

    // reposition and rotate the arrow
    return result
        .map(point => [point[X], point[Y] - halfLength])
        .map(point => [
            start[X] - (cosBeta * point[X] + sinBeta * point[Y]),
            start[Y] - (sinBeta * point[X] - cosBeta * point[Y]),
        ])
}
