import { DendrogramDataItem, DendrogramProcessedDataItem } from './types'
import { isArray } from '@chsk/core'

export const isDendrogramData = (data: Array<unknown>): data is Array<DendrogramDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        if ('id' in item && 'keys' in item && 'height' in item && 'merge' in item) {
            const merge = item['merge']
            const height = item['height']
            if (!isArray(height) || !isArray(merge)) return false
            return height.length === merge.length
        }
        return false
    })
    return result.length > 0 && result.every(Boolean)
}

export const isDendrogramProcessedData = (
    data: Array<unknown>
): data is Array<DendrogramProcessedDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item && 'index' in item && 'domain' in item
    })
    return result.length > 0 && result.every(Boolean)
}
