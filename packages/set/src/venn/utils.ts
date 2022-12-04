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
                seriesData.position[X] - seriesData.r,
                seriesData.position[X] + seriesData.r,
            ])
            .flat()
        result.scalePropsX = createContinuousScaleProps(scaleSpecX, getMinMax(x))
    }
    if (!isScaleWithDomain(scaleSpecY)) {
        const y = data
            .map(seriesData => [
                seriesData.position[Y] - seriesData.r,
                seriesData.position[Y] + seriesData.r,
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
