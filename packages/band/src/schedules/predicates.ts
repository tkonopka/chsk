import { ScheduleDataItem, ScheduleProcessedDataItem, ScheduleProcessedSummary } from './types'

export const isScheduleData = (data: Array<unknown>): data is Array<ScheduleDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        if (!('id' in item && 'data' in item)) return false
        return true
    })
    return result.every(Boolean)
}

export const isScheduleProcessedSummary = (x: unknown): x is ScheduleProcessedSummary => {
    if (typeof x !== 'object' || x === null) return false
    const keys = ['start' as keyof typeof x, 'end' as keyof typeof x, 'key' as keyof typeof x]
    const result = keys.map(k => x[k] !== undefined)
    return result.every(Boolean)
}

export const isScheduleProcessedData = (
    data: Array<unknown>
): data is Array<ScheduleProcessedDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        if (!('id' in item && 'index' in item && 'data' in item && 'domain' in item)) return false
        return true
    })
    return result.length > 0 && result.every(Boolean)
}
