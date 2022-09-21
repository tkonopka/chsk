import { HeatMapDataItem, HeatMapProcessedDataItem } from './types'
import { isBandAxisScale, ScalesContextProps } from '@chask/core'

export const isHeatMapData = (data: Array<unknown>): data is Array<HeatMapDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item
    })
    return result.every(Boolean)
}

export const isHeatMapProcessedData = (
    data: Array<unknown>
): data is Array<HeatMapProcessedDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item && 'index' in item && 'value' in item && 'size' in item
    })
    return result.every(Boolean)
}

export const isHeatMapSetting = (
    data: Array<unknown>,
    scales: ScalesContextProps
): data is Array<HeatMapProcessedDataItem> => {
    return isHeatMapProcessedData(data) && isBandAxisScale(scales.x) && isBandAxisScale(scales.y)
}
