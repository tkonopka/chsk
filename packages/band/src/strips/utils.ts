import { indexes } from '@chsk/core'
import { JitterVariant } from './types'

// get an array of integer indexes that capture the order in which values should be arranged in the chart
export const getStripInternalOrder = (jitter: JitterVariant, values: number[]) => {
    const result = indexes(values)
    if (jitter === 'none') return result
    if (jitter === 'random') return result.sort(() => Math.random() - 0.5)
    if (jitter === 'middle') return Array(values.length).fill((values.length + 1) / 2)

    const ascendingComparator = (a: number[], b: number[]) => a[0] - b[0]
    const descendingComparator = (a: number[], b: number[]) => b[0] - a[0]
    const aux = values.map((v, i) => [v, i])
    if (jitter === 'increasing' || jitter === 'ascending') {
        aux.sort(ascendingComparator).forEach((vi, j) => (result[vi[1]] = j))
    } else {
        aux.sort(descendingComparator).forEach((vi, j) => (result[vi[1]] = j))
    }
    return result
}
