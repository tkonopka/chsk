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
    return result.every(Boolean)
}

// helper function to compute a quantile in a sorted array of values
const getQuantile = (values: number[], quantile: number, n: number) => {
    const realIndex = n * Math.max(0, Math.min(1, quantile))
    const intIndex = Math.floor(realIndex)
    if (realIndex === intIndex) return values[intIndex]
    const v1 = values[intIndex],
        v2 = values[intIndex + 1]
    return v1 + (v2 - v1) * (realIndex - intIndex)
}

// compute a series of quantiles in a sorted array of values
export const getQuantiles = (values: number[], quantiles: number[]) => {
    const n1 = values.length - 1
    const sortedValues = [...values].sort((a, b) => a - b)
    return quantiles.map(v => getQuantile(sortedValues, v, n1))
}
