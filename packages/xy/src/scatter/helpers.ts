import { useMemo } from 'react'
import {
    cloneProps,
    indexes,
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
    PreparedDataContextProps,
} from '@chsk/core'
import {
    ScatterInteractiveDataItem,
    XYProcessedDataItem,
    ScatterProcessedDataItem,
    ScatterPreparedDataItem,
} from './types'
import { isScatterProcessedData } from './predicates'

export const getXYScaleProps = (
    data: XYProcessedDataItem[],
    scaleSpecX: ContinuousScaleSpec,
    scaleSpecY: ContinuousScaleSpec,
    size: SizeSpec,
    disabled: boolean[]
) => {
    const result = {
        x: cloneProps(scaleSpecX) as ContinuousScaleProps,
        y: cloneProps(scaleSpecY) as ContinuousScaleProps,
    }
    const active = indexes(disabled).filter(i => !disabled[i])
    if (!isScaleWithDomain(scaleSpecX)) {
        const x = active
            .map(i => data[i])
            .map(seriesData => seriesData?.x ?? [])
            .flat()
        result.x = createContinuousScaleProps(scaleSpecX, interval(x))
    }
    if (!isScaleWithDomain(scaleSpecY)) {
        const y = active
            .map(i => data[i])
            .map(seriesData => seriesData?.y ?? [])
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
    data: XYProcessedDataItem[],
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
    preparedData: PreparedDataContextProps<ScatterPreparedDataItem>
): Array<ScatterInteractiveDataItem[]> => {
    if (!isScatterProcessedData(processedData)) return []
    return useMemo(() => {
        return preparedData.keys.map(id => {
            const seriesIndex = Number(preparedData.seriesIndexes[id])
            const seriesProcessedData = processedData[seriesIndex]
            const data = preparedData.data[seriesIndex]
            if (data === undefined) return []
            return indexes(data.r).map(index => ({
                id,
                index,
                point: [
                    seriesProcessedData?.x[index],
                    seriesProcessedData?.y[index],
                ] as NumericPositionSpec,
                size: seriesProcessedData?.size[index],
                color: seriesProcessedData?.color?.[index],
            }))
        })
    }, [processedData, preparedData])
}

// array with [coordinate X, coordinate Y, series index, point index]
export type TargetData = [number, number, number, number]

// alternative ranking functions (distance or distance-squared)
type XY =
    | NumericPositionSpec
    | [number, number, unknown, unknown]
    | [number, number, unknown, unknown, unknown]
export const distanceXY = (a: XY, b: XY) => Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2)
export const distanceX = (a: XY, b: XY) => Math.abs(a[X] - b[X])
export const distanceY = (a: XY, b: XY) => Math.abs(a[Y] - b[Y])

export const useTargets = (
    preparedData: PreparedDataContextProps<ScatterPreparedDataItem>,
    disabledKeys: Set<string>
): TargetData[] => {
    return useMemo(() => {
        const result: TargetData[] = []
        preparedData.keys.forEach(id => {
            const seriesIndex = preparedData.seriesIndexes[id]
            if (disabledKeys.has(id) || seriesIndex === undefined) return
            const data = preparedData.data[seriesIndex]
            if (!data) return
            indexes(data.r).forEach(index => {
                result.push([data.x[index] as number, data.y[index] as number, seriesIndex, index])
            })
        })
        return result
    }, [preparedData, disabledKeys])
}
