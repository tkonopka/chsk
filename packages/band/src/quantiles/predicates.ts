import { QuantileDataItem, QuantileProcessedDataItem, QuantileProcessedSummary } from './types'

const isArray = Array.isArray

export const isQuantileData = (data: Array<unknown>): data is Array<QuantileDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        if (!('id' in item && 'data' in item)) return false
        return true
    })
    return result.every(Boolean)
}

export const isQuantileProcessedSummary = (x: unknown): x is QuantileProcessedSummary => {
    if (typeof x !== 'object' || x === null) return false
    const keys = [
        'values' as keyof typeof x,
        'quantiles' as keyof typeof x,
        'extrema' as keyof typeof x,
    ]
    const sizes = [5, 5, 2]
    const result = keys.map((k, i) => {
        return isArray(x[k]) && (x[k] as []).length === sizes[i]
    })
    return result.every(Boolean)
}

export const isQuantileProcessedData = (
    data: Array<unknown>
): data is Array<QuantileProcessedDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        if (!('id' in item && 'index' in item && 'data' in item && 'domain' in item)) return false
        return true
    })
    return result.length > 0 && result.every(Boolean)
}
