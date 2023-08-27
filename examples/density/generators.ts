import { NumericPositionSpec, X, Y, distance, range } from '@chsk/core'
import { randomUniformValue } from '../utils'

const TWOPI = 2 * Math.PI
const cos = Math.cos
const sin = Math.sin

// create n points by picking coordinates at random in intervals
export const generateClusterCenters = (
    n: number,
    xInterval: [number, number],
    yInterval: [number, number]
): NumericPositionSpec[] => {
    const result: NumericPositionSpec[] = []
    while (result.length < n) {
        const x = randomUniformValue(xInterval[0], xInterval[1])
        const y = randomUniformValue(yInterval[0], yInterval[1])
        result.push([x, y])
    }
    return result
}

// create points around a cluster center
const generateOneClusterPoints = (
    i: number,
    centers: NumericPositionSpec[],
    n: number,
    radii: number[]
) => {
    const result: NumericPositionSpec[] = []
    const [x, y] = centers[i] as NumericPositionSpec
    const r: number[] = range(n).map(v => (Number(radii[i]) * Math.sqrt(1 + v)) / Math.sqrt(n))
    let j = 0
    while (j < n) {
        const theta = randomUniformValue(0, TWOPI)
        const point: NumericPositionSpec = [
            Number(r[j]) * cos(theta) + x,
            Number(r[j]) * sin(theta) + y,
        ]
        // estimate if the point falls within intended region of other clusters
        // and reject at random if there is overlap
        let accept = true
        const distances = centers.map(center => distance(center, point))
        distances.map((d, k) => {
            if (k !== i && d < Number(radii[k])) {
                accept = accept && Math.random() > 0.5
            }
        })
        if (accept) {
            result.push(point)
        }
        j += 1
    }
    return result
}

const points2frame = (points: NumericPositionSpec[]) => ({
    x: points.map(point => point[X]),
    y: points.map(point => point[Y]),
})

export const generateClusterFrames = (centers: NumericPositionSpec[], n: number[], density = 1) => {
    const radii = n.map(v => Math.sqrt(v / density))
    return range(centers.length)
        .map(i => generateOneClusterPoints(i, centers, Number(n[i]), radii))
        .map(points2frame)
}
