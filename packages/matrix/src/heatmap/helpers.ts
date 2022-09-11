import {
    BandScaleProps,
    BandScaleSpec,
    CategoricalScaleProps,
    ColorScaleProps,
    ColorScaleSpec,
    ContinuousScaleProps,
    getMinMax,
    SizeScaleProps,
    SizeScaleSpec,
    SizeSpec,
    X,
    Y,
} from '@chask/core'
import { cloneDeep } from 'lodash'
import { HeatMapProcessedDataItem } from './types'

/**
 * Helpers are exported only for the benefit of in-package components, not for out-of-package use
 * */

export const getXYScaleProps = (
    ids: string[],
    keys: string[],
    scaleSpecX: BandScaleSpec,
    scaleSpecY: BandScaleSpec,
    size: SizeSpec
) => {
    const result = {
        scalePropsX: cloneDeep(scaleSpecX) as BandScaleProps,
        scalePropsY: cloneDeep(scaleSpecY) as BandScaleProps,
    }
    result.scalePropsX.domain = keys
    result.scalePropsX.size = size[X]
    result.scalePropsY.domain = ids
    result.scalePropsY.size = size[Y]
    return result
}

export const getColorScaleProps = (
    data: HeatMapProcessedDataItem[],
    scaleSpec: ColorScaleSpec
): ColorScaleProps => {
    const result = cloneDeep(scaleSpec)
    if (scaleSpec.variant === 'categorical') {
        const allValues = new Set<string>(
            data
                .map(item => item.value)
                .flat()
                .map(String)
        )
        result.domain = Array.from(allValues)
        return result as CategoricalScaleProps
    }
    const minmax = getMinMax(
        data
            .map(item => item.value)
            .flat()
            .map(Number)
            .filter(isFinite)
    )
    if (result.domain === 'auto' || result.domain === undefined) {
        result.domain = result.variant === 'diverging' ? [minmax[0], 0, minmax[1]] : minmax
    } else {
        if (result.domain[0] === 'auto') {
            result.domain[0] = minmax[0]
        }
        const lastIndex = result.domain.length - 1
        if (result.domain[lastIndex] === 'auto') {
            result.domain[lastIndex] = minmax[1]
        }
    }
    return result as ColorScaleProps
}

export const getSizeScaleProps = (
    data: HeatMapProcessedDataItem[],
    scaleSpec: SizeScaleSpec,
    viewSize: SizeSpec,
    ids: string[],
    keys: string[]
): ContinuousScaleProps => {
    const maxDataSize = getMinMax(data.map(seriesData => seriesData.size).flat())[1]
    const result = cloneDeep(scaleSpec)
    if (result.domain === 'auto' || result.domain === undefined) {
        result.domain = [0, maxDataSize]
    } else {
        if (result.domain[0] === 'auto') {
            result.domain = [0, result.domain[1]]
        }
        if (result.domain[1] === 'auto') {
            result.domain = [result.domain[0], maxDataSize]
        }
    }
    if (result.size === 'auto') {
        result.size = Math.min(viewSize[Y] / ids.length, viewSize[X] / keys.length) / 2
    }
    return result as SizeScaleProps
}
