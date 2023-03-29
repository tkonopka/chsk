import {
    ColorScaleProps,
    createColorScaleProps,
    getMinMax,
    SizeSpec,
    X,
    Y,
    isScaleWithDomain,
    createContinuousScaleProps,
    CategoricalScaleSpec,
    LinearScaleSpec,
    LinearScaleProps,
    NumericPositionSpec,
    expandScalePropsToSquare,
} from '@chsk/core'
import { cloneDeep } from 'lodash'
import { VennProcessedDataItem } from './types'

export const getXYScaleProps = (
    data: Array<VennProcessedDataItem>,
    ids: string[],
    scaleSpecX: LinearScaleSpec,
    scaleSpecY: LinearScaleSpec,
    size: SizeSpec
) => {
    const scales = {
        x: cloneDeep(scaleSpecX) as LinearScaleProps,
        y: cloneDeep(scaleSpecY) as LinearScaleProps,
    }
    if (!isScaleWithDomain(scaleSpecX)) {
        const x = data
            .map(seriesData => [
                seriesData.center[X] - seriesData.r,
                seriesData.center[X] + seriesData.r,
            ])
            .flat()
        scales.x = createContinuousScaleProps(scaleSpecX, getMinMax(x)) as LinearScaleProps
    }
    if (!isScaleWithDomain(scaleSpecY)) {
        const y = data
            .map(seriesData => [
                seriesData.center[Y] - seriesData.r,
                seriesData.center[Y] + seriesData.r,
            ])
            .flat()
        scales.y = createContinuousScaleProps(scaleSpecY, getMinMax(y)) as LinearScaleProps
    }
    scales.x.size = size[X]
    scales.y.size = size[Y]
    scales.x.nice = false
    scales.y.nice = false
    return expandScalePropsToSquare(scales.x, scales.y)
}

export const getColorScaleProps = (
    data: VennProcessedDataItem[],
    scaleSpec: CategoricalScaleSpec
): ColorScaleProps => {
    const allValues = new Set<string>(
        data
            .map(item => item.id)
            .flat()
            .map(String)
    )
    return createColorScaleProps(scaleSpec, Array.from(allValues))
}

// count elements in common in two sets
export const countOverlap = (setA: Set<unknown>, setB: Set<unknown>): number => {
    let result = 0
    setA.forEach(x => (result += Number(setB.has(x))))
    return result
}

// count elements that are present in all the provided sets
export const countCommonElements = (sets: Array<Set<unknown>>): number => {
    if (sets.length === 0) return 0
    let common = new Set(sets[0].values())
    sets.slice(1, sets.length).forEach(set => {
        const newCommon = new Set()
        set.forEach(x => {
            if (common.has(x)) {
                newCommon.add(x)
            }
        })
        common = newCommon
    })
    return common.size
}

export const rotatePointTrig = (
    p: NumericPositionSpec,
    cosAngle: number,
    sinAngle: number
): NumericPositionSpec => {
    return [p[X] * cosAngle + p[Y] * sinAngle, -p[X] * sinAngle + p[Y] * cosAngle]
}

export const rotatePoint = (p: NumericPositionSpec, angle: number): NumericPositionSpec => {
    return rotatePointTrig(p, Math.cos(angle), Math.sin(angle))
}

export const equalCoordinates = (a: NumericPositionSpec, b: NumericPositionSpec): boolean => {
    return a[X] === b[X] && a[Y] === b[Y]
}

export const midpoint = (a: NumericPositionSpec, b: NumericPositionSpec): NumericPositionSpec => {
    return [(a[X] + b[X]) / 2, (a[Y] + b[Y]) / 2]
}

export const distance = (a: NumericPositionSpec, b: NumericPositionSpec): number => {
    return Math.sqrt((a[X] - b[X]) ** 2 + (a[Y] - b[Y]) ** 2)
}

// angle between y axis and vector from point a to point b
// note: works with svg coordinates system
export const svgAngle = (a: NumericPositionSpec, b: NumericPositionSpec): number => {
    const deltaX = b[X] - a[X]
    const deltaY = b[Y] - a[Y]
    if (deltaX === 0) {
        return deltaY <= 0 ? 0 : Math.PI
    }
    const result = Math.atan(deltaX / Math.abs(deltaY))
    return deltaY <= 0 ? result : Math.PI - result
}

// note: works with svg coordinates system
export const svgTranslatedPosition = (
    start: NumericPositionSpec,
    distance: number,
    angle: number
): NumericPositionSpec => {
    const result: NumericPositionSpec = [start[X], start[Y]]
    result[X] += distance * Math.sin(angle)
    result[Y] -= distance * Math.cos(angle)
    return result
}
