import { StripProcessedDataItem, StripVariant } from './types'

export const isStripProcessedData = (
    data: Array<unknown>
): data is Array<StripProcessedDataItem> => {
    const result = data.map((item: unknown) => {
        if (typeof item !== 'object' || item === null) return false
        return 'id' in item && 'index' in item && 'data' in item && 'domain' in item
    })
    return result.every(Boolean)
}

// get an array of integer indexes that capture the order in which values should be arranged in the chart
export const getStripInternalOrder = (variant: StripVariant, values: number[]) => {
    const indexes = values.map((v, i) => i)
    if (variant === 'default') return indexes
    if (variant === 'jitter') return indexes.sort(() => Math.random() - 0.5)

    const ascendingComparator = (a: number[], b: number[]) => a[0] - b[0]
    const descendingComparator = (a: number[], b: number[]) => b[0] - a[0]
    const aux = values.map((v, i) => [v, i])
    if (variant === 'increasing' || variant === 'ascending') {
        aux.sort(ascendingComparator).forEach((vi, j) => (indexes[vi[1]] = j))
    } else {
        aux.sort(descendingComparator).forEach((vi, j) => (indexes[vi[1]] = j))
    }
    return indexes
}
