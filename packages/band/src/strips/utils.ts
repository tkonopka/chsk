import { StripVariant } from './types'

// get an array of integer indexes that capture the order in which values should be arranged in the chart
export const getStripInternalOrder = (variant: StripVariant, values: number[]) => {
    const indexes = values.map((v, i) => i)
    if (variant === 'default') return indexes
    if (variant === 'jitter') return indexes.sort(() => Math.random() - 0.5)
    if (variant === 'middle') return Array(values.length).fill((values.length + 1) / 2)

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
