import { StripDataItem, StripProcessedDataItem, StripProcessedPoints } from './types'
import { isBandProcessedDataArray } from '../bands/predicates'

export const isStripData = (data: Array<unknown>): data is Array<StripDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item
    })
    return result.every(Boolean)
}

export const isStripProcessedPoints = (x: unknown): x is StripProcessedPoints => {
    if (!x) return true
    if (typeof x !== 'object') return false
    return 'internal' in x && 'value' in x && 'valueSize' in x
}

export const isStripProcessedData = (
    data: Array<unknown>
): data is Array<StripProcessedDataItem> => {
    return isBandProcessedDataArray(data, isStripProcessedPoints)
}
