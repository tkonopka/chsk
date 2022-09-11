import { HeatMapDataItem, HeatMapProcessedDataItem } from './types'

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
