import { ScatterDataItem, ScatterPreparedDataItem, ScatterProcessedDataItem } from './types'
import { RawData } from '@chsk/core'

export const isScatterProcessedData = (
    data: Array<unknown>
): data is Array<ScatterProcessedDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item && 'index' in item && 'x' in item && 'y' in item && 'size' in item
    })
    return result.every(Boolean)
}

export const isScatterPreparedData = (
    data: Array<unknown>
): data is Array<ScatterPreparedDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item && 'index' in item && 'x' in item && 'y' in item && 'r' in item
    })
    return result.every(Boolean)
}

export const isScatterData = (data: RawData): data is Array<ScatterDataItem> => {
    const result = data.map(item => {
        return 'id' in item && 'data' in item && Array.isArray(data)
    })
    return result.every(Boolean)
}
