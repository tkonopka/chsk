import { BarProcessedDataItem } from './types'

export const isBarProcessedData = (data: Array<unknown>): data is Array<BarProcessedDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item && 'index' in item && 'data' in item && 'domain' in item
    })
    return result.length > 0 && result.every(Boolean)
}
