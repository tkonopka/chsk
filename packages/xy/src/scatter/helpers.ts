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
    RecordWithId,
    SizeScaleProps,
    SizeScaleSpec,
    SizeSpec,
    X,
    Y,
} from '@chsk/core'
import {
    ScatterDataContextProps,
    ScatterInteractiveDataItem,
    ScatterProcessedDataItem,
} from './types'
import { cloneDeep } from 'lodash'
import { useMemo } from 'react'
import { isScatterProcessedData } from './predicates'

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

export const getSymbolData = (
    processedData: Array<RecordWithId>,
    preparedData: ScatterDataContextProps
): Array<ScatterInteractiveDataItem[]> => {
    if (!isScatterProcessedData(processedData)) return []
    return useMemo(() => {
        return preparedData.keys.map(id => {
            const seriesIndex = preparedData.seriesIndexes[id]
            const seriesProcessedData = processedData[seriesIndex]
            const data = preparedData.data[seriesIndex]
            return data.r.map((r: number, index: number) => ({
                id,
                index,
                point: [seriesProcessedData.x[index], seriesProcessedData.y[index]] as [
                    number,
                    number
                ],
                size: seriesProcessedData.size[index],
                color: seriesProcessedData.color?.[index],
            }))
        })
    }, [processedData, preparedData])
}
