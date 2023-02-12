import { VennInterpolation, VennPreparedDataItem, VennProcessedDataItem } from './types'
import { ContinuousAxisScale, NumericPositionSpec, ScalesContextProps, X, Y } from '@chsk/core'
import { pathVenn1, pathVenn2, pathVenn3 } from './paths'
import { svgAngle, distance, midpoint, svgTranslatedPosition } from './utils'

// turn processed data into view-specific coordinates
// input is set-oriented array, i.e. set A, set B, set C
// output is a piece-oriented array, i.e. piece with A-only elements, piece with A-B intersection, etc.
export const prepareData = (
    data: Array<VennProcessedDataItem>,
    scales: ScalesContextProps,
    interpolation: VennInterpolation
): Array<VennPreparedDataItem> => {
    // convert into view-specific coordinates
    const scaleX = scales.x as ContinuousAxisScale
    const scaleY = scales.y as ContinuousAxisScale
    const scalePoint = (p: NumericPositionSpec): NumericPositionSpec => [scaleX(p[X]), scaleY(p[Y])]
    const scaledData = data.map((seriesData: VennProcessedDataItem) => ({
        ...seriesData,
        points: seriesData.points.map(scalePoint),
        center: scalePoint(seriesData.center),
        r: scaleX(seriesData.r) - scaleX(0),
    }))
    // split set-oriented data into piece-oriented format
    // this is brute-force handling of cases with 1 set, 2 sets, 3 sets
    let prepare: (
        data: VennProcessedDataItem[],
        scales: ScalesContextProps,
        interpolation: VennInterpolation
    ) => VennPreparedDataItem[] = prepareData1
    if (data.length === 2) prepare = prepareData2
    if (data.length === 3) prepare = prepareData3

    if (data.length === 0) return []
    return prepare(scaledData, scales, interpolation)
}

const prepareData1 = (
    data: VennProcessedDataItem[],
    scales: ScalesContextProps
): VennPreparedDataItem[] => {
    const A = data[0]
    return [
        {
            id: A.id,
            membership: [true],
            label: A.id,
            labelPosition: A.center,
            value: A.intersection[0],
            color: scales.color(0),
            d: pathVenn1({ data, index: 0 }),
        },
    ]
}

const prepareData2 = (
    data: VennProcessedDataItem[],
    scales: ScalesContextProps,
    interpolation: VennInterpolation
): VennPreparedDataItem[] => {
    const A = data[0]
    const B = data[1]
    const angleA = svgAngle(A.center, B.center)
    const angleB = svgAngle(B.center, A.center)
    const d = distance(A.center, B.center) // distance between two circles
    const disjoint = d >= A.r + B.r
    // positions at circumference inside circles A, B
    const sA = svgTranslatedPosition(A.center, d - B.r, angleA)
    const sB = svgTranslatedPosition(B.center, d - A.r, angleB)
    // positions opposite sA and sB
    const oA = svgTranslatedPosition(A.center, A.r, angleA - Math.PI)
    const oB = svgTranslatedPosition(B.center, B.r, angleB - Math.PI)
    //
    if (disjoint) {
        return [
            {
                id: A.id,
                membership: [true, false],
                labelPosition: A.center,
                value: A.size,
                label: A.id + ' ∩ ! ' + B.id,
                color: scales.color(0),
                d: pathVenn1({ data, index: 0 }),
            },
            {
                id: B.id,
                membership: [false, true],
                labelPosition: B.center,
                value: B.size,
                label: '! ' + A.id + ' ∩ ' + B.id,
                color: scales.color(1),
                d: pathVenn1({ data, index: 1 }),
            },
        ]
    }
    return [
        {
            id: A.id,
            membership: [true, false],
            labelPosition: midpoint(sA, oA),
            value: A.size - A.common,
            label: A.id + ' ∩ ! ' + B.id,
            color: scales.color(0),
            d: pathVenn1({ data, index: 0 }),
        },
        {
            id: B.id,
            membership: [false, true],
            labelPosition: midpoint(sB, oB),
            value: B.size - B.common,
            label: '! ' + A.id + ' ∩ ' + B.id,
            color: scales.color(1),
            d: pathVenn1({ data, index: 1 }),
        },
        {
            id: A.id + ' ' + B.id,
            membership: [true, true],
            labelPosition: midpoint(sA, sB),
            value: A.common,
            label: A.id + ' ∩ ' + B.id,
            color: interpolation(scales.color(0), scales.color(1)),
            d: pathVenn2({ data, index: 0 }),
        },
    ]
}

const prepareData3 = (
    data: VennProcessedDataItem[],
    scales: ScalesContextProps,
    interpolation: VennInterpolation
): VennPreparedDataItem[] => {
    const scaleX = scales.x as ContinuousAxisScale
    const scaleY = scales.y as ContinuousAxisScale
    const origin: NumericPositionSpec = [scaleX(0), scaleY(0)]
    //
    const A = data[0]
    const B = data[1]
    const C = data[2]
    // distance from origin to one of the center
    const d0 = distance(origin, A.center)
    // distance between centers
    const d = distance(A.center, B.center)
    const sep = d / 2
    // midpoint between A and B, determines the global orientation of the diagram
    const midAB = midpoint(A.center, B.center)
    const rotation = svgAngle(origin, midAB)
    // distance from AB axis and intersection of A and B circles
    const unitDistance = scaleX(1) - scaleX(0)
    const h3 = Math.sqrt(unitDistance ** 2 - sep ** 2)
    // distance from center to the AB axis
    const dAB = distance(origin, midAB)
    // distance from origin to intersection of A and B circles
    const h2 = h3 + dAB
    // distance from origin to nearest circle
    const h1 = unitDistance - d0
    // distance from center to center of space shared by two sets
    const sharedD = (h1 + h2) / 2
    // apply sine rule to compute labelPosition of inner intersection
    const angleThird = (2 * Math.PI) / 3
    const gamma = Math.asin((d0 * Math.sin(angleThird)) / unitDistance)
    const eta = Math.PI - angleThird - gamma
    const innerD = (unitDistance * Math.sin(eta)) / Math.sin(angleThird)
    // distance from center to a location within one set that does not overlap with other sets
    const exclusiveD = (innerD + (unitDistance + d0)) / 2
    const color = scales.color
    return [
        // first three items represent elements unique to A, B, C
        {
            id: A.id,
            membership: [true, false, false],
            label: A.id + ' ∩ ! ' + B.id + ' ∩ ! ' + C.id,
            labelPosition: svgTranslatedPosition(origin, exclusiveD, rotation - angleThird / 2),
            value: A.size - A.intersection[1] - A.intersection[2] + A.common,
            color: color(0),
            d: pathVenn1({ data, index: 0 }),
        },
        {
            id: B.id,
            membership: [false, true, false],
            label: '! ' + A.id + ' ∩ ' + B.id + ' ∩ ! ' + C.id,
            labelPosition: svgTranslatedPosition(origin, exclusiveD, rotation + angleThird / 2),
            value: B.size - B.intersection[0] - B.intersection[2] + B.common,
            color: color(1),
            d: pathVenn1({ data, index: 1 }),
        },
        {
            id: C.id,
            membership: [false, false, true],
            label: '! ' + A.id + ' ∩ ! ' + B.id + '  ∩ ' + C.id,
            labelPosition: svgTranslatedPosition(origin, exclusiveD, rotation + Math.PI),
            value: C.size - C.intersection[0] - C.intersection[1] + C.common,
            color: color(2),
            d: pathVenn1({ data, index: 2 }),
        },
        // next three items are intersections between AB, BC, CA,
        {
            id: A.id + ' ' + B.id,
            membership: [true, true, false],
            label: A.id + ' ∩ ' + B.id + ' ∩ ! ' + C.id,
            labelPosition: svgTranslatedPosition(origin, sharedD, rotation + 0),
            value: A.intersection[1] - A.common,
            color: interpolation(color(0), color(1)),
            d: pathVenn2({ data, index: 0 }),
        },
        {
            id: B.id + ' ' + C.id,
            membership: [false, true, true],
            labelPosition: svgTranslatedPosition(origin, sharedD, rotation + angleThird),
            value: B.intersection[2] - B.common,
            label: '! ' + A.id + ' ∩ ' + B.id + ' ∩ ' + C.id,
            color: interpolation(color(1), color(2)),
            d: pathVenn2({ data, index: 1 }),
        },
        {
            id: A.id + ' ' + C.id,
            membership: [true, false, true],
            label: A.id + ' ∩ ! ' + B.id + ' ∩ ' + C.id,
            labelPosition: svgTranslatedPosition(origin, sharedD, rotation - angleThird),
            value: C.intersection[0] - C.common,
            color: interpolation(color(0), color(2)),
            d: pathVenn2({ data, index: 2 }),
        },
        // last element is intersection of all sets
        {
            id: A.id + ' ' + B.id + ' ' + C.id,
            membership: [true, true, true],
            label: A.id + ' ∩ ' + B.id + ' ∩ ' + C.id,
            labelPosition: origin,
            value: A.common,
            color: interpolation(color(0), color(1), color(2)),
            d: pathVenn3({ data }),
        },
    ]
}
