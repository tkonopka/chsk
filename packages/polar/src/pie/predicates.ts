import { PieDataItem, PieProcessedDataItem } from './types'

export const isPieData = (data: Array<unknown>): data is Array<PieDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item && 'data' in item
    })
    return result.length > 0 && result.every(Boolean)
}

export const isPieProcessedData = (data: Array<unknown>): data is Array<PieProcessedDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        if (!('id' in item) || !('index' in item)) return false
        return 'startAngle' in item && 'endAngle' in item && 'value' in item && 'proportion' in item
    })
    return result.length > 0 && result.every(Boolean)
}
