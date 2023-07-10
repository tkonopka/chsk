import { isArray } from '@chsk/core'
import { ViolinDataItem, ViolinProcessedDataItem, ViolinProcessedSummary } from './types'
import { isBandProcessedDataArray } from '../bands/predicates'

export const isViolinData = (data: Array<unknown>): data is Array<ViolinDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item
    })
    return result.every(Boolean)
}

export const isViolinProcessedSummary = (x: unknown): x is ViolinProcessedSummary => {
    if (!x) return true
    if (typeof x !== 'object') return false
    if (!('n' in x)) return false
    return 'values' in x && isArray(x['values'])
}

export const isViolinProcessedData = (
    data: Array<unknown>
): data is Array<ViolinProcessedDataItem> => {
    return isBandProcessedDataArray(data, isViolinProcessedSummary)
}
