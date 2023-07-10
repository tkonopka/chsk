import { isArray } from '@chsk/core'

export const isBandProcessedDataArray = <T>(
    data: Array<unknown>,
    predicate: (x: unknown) => boolean
): data is Array<T> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        const hasKeys = 'id' in item && 'index' in item && 'data' in item && 'domain' in item
        if (!hasKeys) return false
        return isArray(item.data) && item.data.map(predicate).every(Boolean)
    })
    return result.length > 0 && result.every(Boolean)
}
