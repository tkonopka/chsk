import { ViolinDataItem, ViolinProcessedDataItem, ViolinProcessedSummary } from './types'
import { isArray } from 'lodash'

export const isViolinData = (data: Array<unknown>): data is Array<ViolinDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item
    })
    return result.every(Boolean)
}

export const isViolinProcessedSummary = (x: unknown): x is ViolinProcessedSummary => {
    if (typeof x !== 'object' || x === null) return false
    if (!('n' in x)) return false
    const keys = ['values' as keyof typeof x, 'breaks' as keyof typeof x]
    const result = keys.map(k => isArray(x[k]))
    return result.every(Boolean)
}

export const isViolinProcessedData = (
    data: Array<unknown>
): data is Array<ViolinProcessedDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item && 'index' in item && 'data' in item && 'domain' in item
    })
    return result.length > 0 && result.every(Boolean)
}
