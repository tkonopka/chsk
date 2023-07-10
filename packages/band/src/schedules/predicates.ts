import { ScheduleDataItem, ScheduleProcessedDataItem, ScheduleProcessedSummary } from './types'
import { isBandProcessedDataArray } from '../bands/predicates'

export const isScheduleData = (data: Array<unknown>): data is Array<ScheduleDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item && 'data' in item
    })
    return result.every(Boolean)
}

export const isScheduleProcessedSummary = (x: unknown): x is ScheduleProcessedSummary => {
    if (!x) return true
    if (typeof x !== 'object') return false
    const keys = ['start' as keyof typeof x, 'end' as keyof typeof x, 'key' as keyof typeof x]
    return keys.map(k => x[k] !== undefined).every(Boolean)
}

export const isScheduleProcessedData = (
    data: Array<unknown>
): data is Array<ScheduleProcessedDataItem> => {
    return isBandProcessedDataArray(data, isScheduleProcessedSummary)
}
