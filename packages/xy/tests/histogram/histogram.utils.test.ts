import { binValues, getBreaksArray } from '../../src/histogram/utils'
import { HistogramDataItem } from '../../src/histogram'

describe('binValues', () => {
    // ten values - 6 in bin [0, 5] and 4 in bin [5, 10]
    const tenValues = [1, 2, 2.5, 3, 3.5, 4, 6, 7, 8, 9]

    it('places data into bins', () => {
        // three breakpoints, i.e. two bins [0, 5] and [5, 10]
        // center points of bins should be at 0.25 and 0.75
        const result = binValues(tenValues, [0, 5, 10], false)
        expect(result.length).toEqual(4)
        // middle points convey bins and counts in the bins
        expect(result[1]).toEqual([2.5, 6])
        expect(result[2]).toEqual([7.5, 4])
        // boundary points convey the edges
        expect(result[0]).toEqual([0, 6])
        expect(result[3]).toEqual([10, 4])
    })

    it('estimates densities', () => {
        // three breakpoints, i.e. two bins [0, 5] and [5, 10]
        // center points of bins should be at 0.25 and 0.75
        const result = binValues(tenValues, [0, 5, 10], true)
        expect(result.length).toEqual(4)
        // middle points convey bins and density
        expect(result[1]).toEqual([2.5, 0.6 / 5])
        expect(result[2]).toEqual([7.5, 0.4 / 5])
        // boundary points convey the edges
        expect(result[0]).toEqual([0, 0.6 / 5])
        expect(result[3]).toEqual([10, 0.4 / 5])
    })

    it('handles empty dataset', () => {
        // three breakpoints, i.e. two bins [0, 5] and [5, 10]
        // center points of bins should be at 0.25 and 0.75
        const result = binValues([], [0, 5, 10], true)
        // the data is empty, histogram representation should be flat/empty
        expect(result.length).toEqual(4)
        expect(result.map(d => d[1])).toEqual([0, 0, 0, 0])
    })
})

describe('getBreaksArrays', () => {
    it('computes reasonable breakpoints', () => {
        const rawData: HistogramDataItem[] = [
            {
                id: 'A',
                data: [0, 2, 4, 6],
            },
            {
                id: 'A',
                data: [-2, 2, 4, 12],
            },
        ]
        const result = getBreaksArray(rawData, 4)
        expect(result.length).toBeGreaterThan(4)
        expect(result[0]).toBeLessThanOrEqual(-2)
        expect(result[result.length - 1]).toBeGreaterThan(12)
    })
})
