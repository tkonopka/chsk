import { StripDataItem, StripProcessedDataItem } from './types'

export const isStripData = (data: Array<unknown>): data is Array<StripDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item
    })
    return result.every(Boolean)
}

export const isStripProcessedData = (
    data: Array<unknown>
): data is Array<StripProcessedDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item && 'index' in item && 'data' in item && 'domain' in item
    })
    return result.length > 0 && result.every(Boolean)
}
