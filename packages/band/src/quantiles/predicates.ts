import { isArray } from '@chsk/core'
import { QuantileDataItem, QuantileProcessedDataItem, QuantileProcessedSummary } from './types'
import { isBandProcessedDataArray } from '../bands/predicates'

export const isQuantileData = (data: Array<unknown>): data is Array<QuantileDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item && 'data' in item
    })
    return result.every(Boolean)
}

export const isQuantileProcessedSummary = (x: unknown): x is QuantileProcessedSummary => {
    if (!x) return true
    if (typeof x !== 'object') return false
    if (!('n' in x)) return false
    const keys = [
        'values' as keyof typeof x,
        'quantiles' as keyof typeof x,
        'extrema' as keyof typeof x,
    ]
    const sizes = [5, 5, 2]
    return keys
        .map((k, i) => {
            return isArray(x[k]) && (x[k] as []).length === sizes[i]
        })
        .every(Boolean)
}

export const isQuantileProcessedData = (
    data: Array<unknown>
): data is Array<QuantileProcessedDataItem> => {
    return isBandProcessedDataArray(data, isQuantileProcessedSummary)
}
