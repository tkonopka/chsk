import { VennDataItem, VennPreparedDataItem, VennProcessedDataItem } from './types'

export const isVennData = (data: Array<unknown>): data is Array<VennDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item
    })
    return result.length > 0 && result.every(Boolean)
}

export const isVennProcessedData = (data: Array<unknown>): data is Array<VennProcessedDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item && 'index' in item && 'center' in item && 'r' in item
    })
    return result.length > 0 && result.every(Boolean)
}

export const isVennPreparedData = (data: Array<unknown>): data is Array<VennPreparedDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item && 'label' in item && 'd' in item && 'value' in item
    })
    return result.length > 0 && result.every(Boolean)
}
