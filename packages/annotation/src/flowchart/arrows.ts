import { NumericPositionSpec, X, Y } from '@chsk/core'
import { getStartToEndAxis } from '../lines/utils'

// transformations on arrays of points
const translatePoints = (points: NumericPositionSpec[], translate: NumericPositionSpec) => {
    return points.map(point => [point[X] + translate[X], point[Y] + translate[Y]])
}
const rotateAndTranslatePoints = (
    points: NumericPositionSpec[],
    translate: NumericPositionSpec,
    cosAngle: number,
    sinAngle: number
): NumericPositionSpec[] => {
    return points.map(point => [
        translate[X] - (cosAngle * point[X] + sinAngle * point[Y]),
        translate[Y] - (sinAngle * point[X] - cosAngle * point[Y]),
    ])
}

// points for the stem-end and head-end of a block arrow
const stemPoints = (halfStemWidth: number): NumericPositionSpec[] => {
    if (halfStemWidth === 0) return [[0, 0]]
    return [
        [-halfStemWidth, 0], // base, left side
        [halfStemWidth, 0], // base, right side
    ]
}
const headPoints = (
    halfStemWidth: number,
    halfHeadWidth: number,
    headLength: number
): NumericPositionSpec[] => {
    return [
        [-halfStemWidth, -headLength],
        [-halfHeadWidth, -headLength],
        [0, 0], // tip of arrow
        [halfHeadWidth, -headLength],
        [halfStemWidth, -headLength],
    ]
}

type GetArrowPointsProps = {
    start: NumericPositionSpec
    end: NumericPositionSpec
    heads: [boolean, boolean]
    headWidth: number
    headLength: number
    stemWidth: number
}

export const getBlockArrowPoints = ({
    start,
    end,
    heads,
    headWidth,
    headLength,
    stemWidth,
}: GetArrowPointsProps): NumericPositionSpec[] => {
    const { deltaX, deltaY, cosBeta, sinBeta } = getStartToEndAxis(start, end)

    // shorthand for arrow features
    const halfLength = Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 2
    const halfStemWidth = stemWidth / 2
    const halfHeadWidth = headWidth / 2

    // points for a block arrow that points upward
    const pointsA = heads[0]
        ? headPoints(halfStemWidth, halfHeadWidth, headLength)
        : stemPoints(halfStemWidth)
    const pointsB = heads[1]
        ? headPoints(-halfStemWidth, -halfHeadWidth, -headLength)
        : stemPoints(-halfStemWidth)
    const result: NumericPositionSpec[] = translatePoints(pointsA, [0, halfLength])
        .concat(translatePoints(pointsB, [0, -halfLength]))
        .map(point => [point[X], point[Y] - halfLength])

    // reposition and rotate
    return rotateAndTranslatePoints(result, start, cosBeta, sinBeta)
}

const getClosedPath = (points: NumericPositionSpec[]) => {
    const p0 = points[0][X] + ',' + points[0][Y]
    const d = points
        .slice(1)
        .map(point => 'L' + point[X] + ',' + point[Y])
        .join('')
    return 'M' + p0 + d + 'Z'
}

export const getBlockArrowPath = (props: GetArrowPointsProps): string => {
    const points = getBlockArrowPoints(props)
    return getClosedPath(points)
}

/** compute position of center of a circle that passes through two points */
const getCenter = (
    start: NumericPositionSpec,
    end: NumericPositionSpec,
    r: number,
    variant: 'left' | 'right'
): NumericPositionSpec => {
    // angle of line along start-to-end axis
    const deltaX = end[X] - start[X]
    const deltaY = end[Y] - start[Y]
    const theta = Math.atan(-deltaY / deltaX)
    // middle of line along start-to-end axis
    const mid = [(start[X] + end[X]) / 2, (start[Y] + end[Y]) / 2]
    // angle to reach center of circle or radius r that passes both start and end positions
    const adjustment = deltaX < 0 ? Math.PI : 0
    const handedness = variant === 'left' ? Math.PI / 2 : -Math.PI / 2
    const eta = theta + adjustment + handedness
    return [mid[X] + r * Math.cos(eta), mid[Y] - r * Math.sin(eta)]
}

/** compute angles for a tangent line to a circle at a given position */
export const getTangent = (
    center: NumericPositionSpec,
    position: NumericPositionSpec,
    variant: 'left' | 'right' = 'left'
) => {
    const deltaX = position[X] - center[X]
    const deltaY = position[Y] - center[Y]
    const theta = Math.atan(deltaY / deltaX)
    // adjustment breaks degeneracy in case where deltaY is zero
    const adjustment = deltaX < 0 ? Math.PI : 0
    const handedness = variant === 'left' ? 0 : -Math.PI
    const angle = (theta + adjustment + handedness + 2 * Math.PI) % (2 * Math.PI)
    return { angle, cosAngle: Math.cos(angle), sinAngle: Math.sin(angle) }
}

export const getArcArrowPath = ({
    start,
    end,
    heads,
    headWidth,
    headLength,
    stemWidth,
    r,
    variant = 'right',
}: GetArrowPointsProps & { r?: number; variant?: 'left' | 'right' }): string => {
    // points for arrow components that point upward
    const halfStemWidth = stemWidth / 2
    const halfHeadWidth = headWidth / 2
    const pointsStart = heads[0]
        ? headPoints(halfStemWidth, halfHeadWidth, headLength)
        : stemPoints(0)
    const pointsEnd = heads[1]
        ? headPoints(-halfStemWidth, -halfHeadWidth, -headLength)
        : stemPoints(0)

    if (r === undefined) {
        const { deltaX, deltaY, cosBeta, sinBeta } = getStartToEndAxis(start, end)
        const halfLength = Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 2
        const rawPoints: NumericPositionSpec[] = translatePoints(pointsStart, [0, halfLength])
            .concat(translatePoints(pointsEnd, [0, -halfLength]))
            .map(point => [point[X], point[Y] - halfLength])
        // shift and rotate to align the points with start/end positions
        const points = rotateAndTranslatePoints(rawPoints, start, cosBeta, sinBeta)
        return getClosedPath(points)
    }

    const center = getCenter(start, end, r, variant)
    const { cosAngle: startCosBeta, sinAngle: startSinBeta } = getTangent(center, start, variant)
    const { cosAngle: endCosBeta, sinAngle: endSinBeta } = getTangent(center, end, variant)
    const transformedStart = rotateAndTranslatePoints(
        pointsStart,
        start,
        startCosBeta,
        startSinBeta
    )
    const transformedEnd = rotateAndTranslatePoints(pointsEnd, end, endCosBeta, endSinBeta)

    const pStart0 = transformedStart[0][X] + ' ' + transformedStart[0][Y]
    const pEnd0 = transformedEnd[0][X] + ' ' + transformedEnd[0][Y]
    const result: string[] = ['M' + pStart0]
    transformedStart.slice(1).forEach(point => result.push('L ' + point[X] + ' ' + point[Y]))
    const startSweep = variant === 'left' ? 0 : 1
    result.push('A ' + r + ' ' + r + ' 0 0 ' + startSweep + ' ' + pEnd0)
    transformedEnd.slice(1).forEach(point => result.push('L ' + point[X] + ' ' + point[Y]))
    const endSweep = variant === 'left' ? 1 : 0
    result.push('A ' + r + ' ' + r + ' 0 0 ' + endSweep + ' ' + pStart0)
    return result.join('')
}
