import {
    ColorScaleProps,
    createColorScaleProps,
    getMinMax,
    SizeSpec,
    X,
    Y,
    ContinuousScaleProps,
    isScaleWithDomain,
    createContinuousScaleProps,
    CategoricalScaleSpec,
    LinearScaleSpec,
    NumericPositionSpec,
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
    const result = {
        scalePropsX: cloneDeep(scaleSpecX) as ContinuousScaleProps,
        scalePropsY: cloneDeep(scaleSpecY) as ContinuousScaleProps,
    }
    if (!isScaleWithDomain(scaleSpecX)) {
        const x = data
            .map(seriesData => [
                seriesData.center[X] - seriesData.r,
                seriesData.center[X] + seriesData.r,
            ])
            .flat()
        result.scalePropsX = createContinuousScaleProps(scaleSpecX, getMinMax(x))
    }
    if (!isScaleWithDomain(scaleSpecY)) {
        const y = data
            .map(seriesData => [
                seriesData.center[Y] - seriesData.r,
                seriesData.center[Y] + seriesData.r,
            ])
            .flat()
        result.scalePropsY = createContinuousScaleProps(scaleSpecY, getMinMax(y))
    }

    // extend domains to force a 1:1 aspect ratio
    const getDomainRatio = (scaleProps: ContinuousScaleProps) =>
        (Number(scaleProps.domain[1]) - Number(scaleProps.domain[0])) / scaleProps.size
    const adjustDomain = (domain: [number, number], ratio: number) => {
        if (ratio > 1) return
        const domainSize = domain[1] - domain[0]
        const extension = domainSize / ratio - domainSize
        domain[0] -= extension / 2
        domain[1] += extension / 2
    }
    result.scalePropsX.size = size[X]
    result.scalePropsY.size = size[Y]
    result.scalePropsX.nice = false
    result.scalePropsY.nice = false
    const xRatio = getDomainRatio(result.scalePropsX)
    const yRatio = getDomainRatio(result.scalePropsY)
    adjustDomain(result.scalePropsX.domain as [number, number], xRatio / yRatio)
    adjustDomain(result.scalePropsY.domain as [number, number], yRatio / xRatio)

    return result
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

export const addPoints = (a: NumericPositionSpec, b: NumericPositionSpec): NumericPositionSpec => {
    return [a[X] + b[X], a[Y] + b[Y]]
}

export const equalCoordinates = (a: NumericPositionSpec, b: NumericPositionSpec): boolean => {
    return a[X] === b[X] && a[Y] === b[Y]
}

export const midpoint = (a: NumericPositionSpec, b: NumericPositionSpec): NumericPositionSpec => {
    return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
}

export const distance = (a: NumericPositionSpec, b: NumericPositionSpec): number => {
    return Math.sqrt((a[X] - b[X]) ** 2 + (a[Y] - b[Y]) ** 2)
}

// angle between y axis and vector from point a to point b
export const angle = (a: NumericPositionSpec, b: NumericPositionSpec): number => {
    const deltaX = b[X] - a[X]
    const deltaY = b[Y] - a[Y]
    if (deltaX === 0) {
        return deltaY >= 0 ? 0 : Math.PI
    }
    const result = Math.atan(deltaX / Math.abs(deltaY))
    return deltaY >= 0 ? result : Math.PI - result
}

export const translatedPosition = (
    start: NumericPositionSpec,
    distance: number,
    angle: number
): NumericPositionSpec => {
    const result: NumericPositionSpec = [start[X], start[Y]]
    result[X] += distance * Math.sin(angle)
    result[Y] += distance * Math.cos(angle)
    return result
}
