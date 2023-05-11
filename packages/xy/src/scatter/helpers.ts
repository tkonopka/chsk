import { useMemo } from 'react'
import { cloneDeep } from 'lodash'
import {
    ColorScaleProps,
    ColorScaleSpec,
    ContinuousScaleProps,
    ContinuousScaleSpec,
    createColorScaleProps,
    createContinuousScaleProps,
    createSizeScaleProps,
    max,
    interval,
    isScaleWithDomain,
    NumericPositionSpec,
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
import { isScatterProcessedData } from './predicates'

export const getXYScaleProps = (
    data: Array<ScatterProcessedDataItem>,
    scaleSpecX: ContinuousScaleSpec,
    scaleSpecY: ContinuousScaleSpec,
    size: SizeSpec,
    disabled: boolean[]
) => {
    const result = {
        x: cloneDeep(scaleSpecX) as ContinuousScaleProps,
        y: cloneDeep(scaleSpecY) as ContinuousScaleProps,
    }
    const filterDisabled = (v: unknown, i: number) => !disabled[i]
    if (!isScaleWithDomain(scaleSpecX)) {
        const x = data
            .filter(filterDisabled)
            .map(seriesData => seriesData.x)
            .flat()
        result.x = createContinuousScaleProps(scaleSpecX, interval(x))
    }
    if (!isScaleWithDomain(scaleSpecY)) {
        const y = data
            .filter(filterDisabled)
            .map(seriesData => seriesData.y)
            .flat()
        result.y = createContinuousScaleProps(scaleSpecY, interval(y))
    }
    result.x.size = size[X]
    result.y.size = size[Y]
    return result
}

export const getSizeScaleProps = (
    data: ScatterProcessedDataItem[],
    scaleSpec: SizeScaleSpec,
    maxSize: unknown
): SizeScaleProps => {
    const maxDomain = max(data.map(seriesData => seriesData.size).flat())
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
    const minmax = interval(data.map(seriesData => seriesData.color ?? []).flat())
    return createColorScaleProps(scaleSpec, minmax)
}

export const useSymbolData = (
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

// array with [coordinate X, coordinate Y, series index, point index]
export type TargetData = [number, number, number, number]

// alternative ranking functions (distance or distance-squared)
type XY = NumericPositionSpec | TargetData
export const distanceXY = (a: XY, b: XY) => Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2)
export const distanceX = (a: XY, b: XY) => Math.abs(a[X] - b[X])
export const distanceY = (a: XY, b: XY) => Math.abs(a[Y] - b[Y])

export const useTargets = (preparedData: ScatterDataContextProps, disabledKeys: Set<string>) => {
    return useMemo(() => {
        const result: TargetData[] = []
        preparedData.keys.forEach(id => {
            if (disabledKeys.has(id)) return
            const seriesIndex = preparedData.seriesIndexes[id]
            const data = preparedData.data[seriesIndex]
            data.r.forEach((r: number, index: number) => {
                result.push([data.x[index], data.y[index], seriesIndex, index])
            })
        })
        return result
    }, [preparedData, disabledKeys])
}
