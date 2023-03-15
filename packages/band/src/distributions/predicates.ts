import {
    DistributionDataItem,
    DistributionProcessedDataItem,
    DistributionProcessedSummary,
} from './types'

const isArray = Array.isArray

export const isDistributionData = (data: Array<unknown>): data is Array<DistributionDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        if (!('id' in item && 'data' in item)) return false
        return true
    })
    return result.every(Boolean)
}

export const isDistributionProcessedSummary = (x: unknown): x is DistributionProcessedSummary => {
    if (typeof x !== 'object' || x === null) return false
    if (!('n' in x)) return false
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

export const isDistributionProcessedData = (
    data: Array<unknown>
): data is Array<DistributionProcessedDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        if (!('id' in item && 'index' in item && 'data' in item && 'domain' in item)) return false
        return true
    })
    return result.length > 0 && result.every(Boolean)
}
