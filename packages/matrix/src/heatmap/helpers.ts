import {
    BandScaleProps,
    BandScaleSpec,
    ColorScaleProps,
    ColorScaleSpec,
    createColorScaleProps,
    createSizeScaleProps,
    getMinMax,
    getMax,
    SizeScaleProps,
    SizeScaleSpec,
    SizeSpec,
    X,
    Y,
} from '@chask/core'
import { cloneDeep } from 'lodash'
import { HeatMapProcessedDataItem } from './types'

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
    if (scaleSpec.variant === 'categorical') {
        const allValues = new Set<string>(
            data
                .map(item => item.value)
                .flat()
                .map(String)
        )
        return createColorScaleProps(scaleSpec, Array.from(allValues))
    }
    const minmax = getMinMax(
        data
            .map(item => item.value)
            .flat()
            .map(Number)
            .filter(isFinite)
    )
    return createColorScaleProps(scaleSpec, minmax)
}

export const getSizeScaleProps = (
    data: HeatMapProcessedDataItem[],
    scaleSpec: SizeScaleSpec,
    viewSize: SizeSpec,
    ids: string[],
    keys: string[]
): SizeScaleProps => {
    const maxDomain = getMax(data.map(seriesData => seriesData.size).flat())
    const maxSize = Math.min(viewSize[Y] / ids.length, viewSize[X] / keys.length) / 2
    return createSizeScaleProps(scaleSpec, maxDomain, maxSize)
}
