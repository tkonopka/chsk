import { VennDataItem, VennProcessedDataItem } from './types'

export const isVennData = (data: Array<unknown>): data is Array<VennDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item
    })
    return result.every(Boolean)
}

export const isVennProcessedData = (data: Array<unknown>): data is Array<VennProcessedDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item && 'index' in item && 'position' in item && 'r' in item
    })
    return result.every(Boolean)
}
