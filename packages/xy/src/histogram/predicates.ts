import { isArray, RawData } from '@chsk/core'
import { HistogramDataItem, HistogramProcessedDataItem } from './types'

export const isHistogramProcessedData = (
    data: Array<unknown>
): data is Array<HistogramProcessedDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item && 'index' in item && 'points' in item
    })
    return result.every(Boolean)
}

export const isHistogramData = (data: RawData): data is Array<HistogramDataItem> => {
    const result = data.map(item => {
        return 'id' in item && 'data' in item && isArray(item['data'])
    })
    return result.every(Boolean)
}
