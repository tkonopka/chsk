import { UpSetDataItem, UpSetProcessedDataItem } from './types'

export const isUpSetData = (data: Array<unknown>): data is Array<UpSetDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item
    })
    return result.every(Boolean)
}

export const isUpSetProcessedData = (
    data: Array<unknown>
): data is Array<UpSetProcessedDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item && 'index' in item && 'data' in item
    })
    return result.every(Boolean)
}
