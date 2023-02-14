import { NumericPositionSpec, addPositions, X, Y } from '@chsk/core'
import { VennProcessedDataItem } from './types'
import { equalCoordinates } from './utils'

// create an arc definition in svg format:
// A rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y
const pathArc = (b: NumericPositionSpec, r: number, largeArc: number, sweep = 0) => {
    return 'A ' + r + ' ' + r + ' 0 ' + largeArc + ' ' + sweep + ' ' + b[X] + ' ' + b[Y]
}

const pathM = (p: NumericPositionSpec) => {
    return 'm ' + p[X] + ' ' + p[Y]
}

/** paths for outside pieces (elements unique to one set) */

export type pathVennProps = {
    data: Array<VennProcessedDataItem>
    index: number
}

const pathVenn1of1 = ({ data, index }: pathVennProps) => {
    const item = data[index]
    const p1: NumericPositionSpec = addPositions(item.points[0], [0, -0.01])
    const p2: NumericPositionSpec = addPositions(item.points[0], [0, 0.01])
    return [pathM(p1), pathArc(p2, item.r, 0, 0), pathArc(p1, item.r, 1, 1)].join(' ')
}

const pathVenn1of2 = ({ data, index }: pathVennProps) => {
    const item = data[index]
    const other = data[(index + 1) % 2]
    const p1 = item.points[0]
    const p2 = item.points[1]
    let p1effective = p1
    let p2effective = p2
    if (equalCoordinates(p1, p2)) {
        const ysign = index === 0 ? 1 : -1
        p1effective = addPositions(p1, [0, -ysign * 0.01])
        p2effective = addPositions(p2, [0, ysign * 0.01])
    }
    //const p2effective = equalCoordinates(p1, p2) ? addPoints(p2, [0, 1e-6]) : p2
    // sweep for arc of the boundary between item and other
    const s1 = other.largeArcs[0]
    // sweep for arc on the outside
    const s2 = item.largeArcs[1]
    return [
        pathM(p1effective),
        pathArc(p2effective, other.r, s1, 0),
        pathArc(p1effective, item.r, s2, 1),
    ].join(' ')
}

const pathVenn1of3 = ({ data, index }: pathVennProps) => {
    const item0 = data[index]
    const item1 = data[(index + 1) % 3]
    const item2 = data[(index + 2) % 3]
    const p1 = item0.points[0]
    const p2 = item2.points[1]
    const p3 = item0.points[3]
    return [
        pathM(p1),
        pathArc(p2, item1.r, 0),
        pathArc(p3, item2.r, 0),
        pathArc(p1, item0.r, item0.largeArcs[3], 1),
    ].join(' ')
}

export const pathVenn1 = (props: pathVennProps) => {
    if (props.data.length === 2) return pathVenn1of2(props)
    if (props.data.length === 1) return pathVenn1of1(props)
    return pathVenn1of3(props)
}

/** paths for intersections between two sets */

export const pathVenn2of2 = ({ data, index }: pathVennProps) => {
    const item = data[index]
    const other = data[(index + 1) % 2]
    const p1 = item.points[0]
    const p2 = item.points[1]
    const s1 = item.largeArcs[0]
    const s2 = other.largeArcs[0]
    if (equalCoordinates(p1, p2)) {
        return ''
    }
    return [pathM(p1), pathArc(p2, item.r, s1, 1), pathArc(p1, other.r, s2, 1)].join(' ')
}

export const pathVenn2of3 = ({ data, index }: pathVennProps) => {
    const item0 = data[index]
    const item1 = data[(index + 1) % 3]
    const item2 = data[(index + 2) % 3]
    const p1 = item0.points[0]
    const p2 = item0.points[1]
    const p3 = item1.points[2]
    return [
        pathM(p1),
        pathArc(p2, item0.r, 0, 1),
        pathArc(p3, item2.r, 0, 0),
        pathArc(p1, item1.r, 0, 1),
    ].join(' ')
}

export const pathVenn2 = (props: pathVennProps) => {
    if (props.data.length === 2) return pathVenn2of2(props)
    return pathVenn2of3(props)
}

/** paths for intersections between three sets */

export const pathVenn3 = ({ data }: Pick<pathVennProps, 'data'>) => {
    const item0 = data[0]
    const item1 = data[1]
    const item2 = data[2]
    const p1 = item0.points[1]
    const p2 = item1.points[1]
    const p3 = item2.points[1]
    return [
        pathM(p1),
        pathArc(p2, item0.r, 0, 1),
        pathArc(p3, item1.r, 0, 1),
        pathArc(p1, item2.r, 0, 1),
    ].join(' ')
}
