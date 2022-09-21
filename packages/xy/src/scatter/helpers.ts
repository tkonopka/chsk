import {
    ColorScaleProps,
    ColorScaleSpec,
    ContinuousScaleProps,
    ContinuousScaleSpec,
    createColorScaleProps,
    createContinuousScaleProps,
    createSizeScaleProps,
    getMax,
    getMinMax,
    isScaleWithDomain,
    SizeScaleProps,
    SizeScaleSpec,
    SizeSpec,
    X,
    Y,
} from '@chask/core'
import { ScatterProcessedDataItem } from './types'
import { cloneDeep } from 'lodash'

export const getXYScaleProps = (
    data: Array<ScatterProcessedDataItem>,
    scaleSpecX: ContinuousScaleSpec,
    scaleSpecY: ContinuousScaleSpec,
    size: SizeSpec,
    disabled: boolean[]
) => {
    const result = {
        scalePropsX: cloneDeep(scaleSpecX) as ContinuousScaleProps,
        scalePropsY: cloneDeep(scaleSpecY) as ContinuousScaleProps,
    }
    const filterDisabled = (v: unknown, i: number) => !disabled[i]
    if (!isScaleWithDomain(scaleSpecX)) {
        const x = data
            .filter(filterDisabled)
            .map(seriesData => seriesData.x)
            .flat()
        result.scalePropsX = createContinuousScaleProps(scaleSpecX, getMinMax(x))
    }
    if (!isScaleWithDomain(scaleSpecY)) {
        const y = data
            .filter(filterDisabled)
            .map(seriesData => seriesData.y)
            .flat()
        result.scalePropsY = createContinuousScaleProps(scaleSpecY, getMinMax(y))
    }
    result.scalePropsX.size = size[X]
    result.scalePropsY.size = size[Y]
    return result
}

export const getSizeScaleProps = (
    data: ScatterProcessedDataItem[],
    scaleSpec: SizeScaleSpec,
    maxSize: unknown
): SizeScaleProps => {
    const maxDomain = getMax(data.map(seriesData => seriesData.size).flat())
    if (typeof maxSize === 'number') return createSizeScaleProps(scaleSpec, maxDomain, maxSize)
    return createSizeScaleProps(scaleSpec, maxDomain, 10)
}

export const getColorScaleProps = (
    data: ScatterProcessedDataItem[],
    scaleSpec: ColorScaleSpec,
    seriesIds: string[]
): ColorScaleProps => {
    if (scaleSpec.variant === 'categorical') {
        return createColorScaleProps(scaleSpec, seriesIds)
    }
    const minmax = getMinMax(data.map(seriesData => seriesData.color ?? []).flat())
    return createColorScaleProps(scaleSpec, minmax)
}
