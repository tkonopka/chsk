import {
    isQuantileData,
    isQuantileProcessedData,
    isQuantileProcessedSummary,
} from '../../src/quantiles'

describe('isQuantileData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                data: [1, 2, 3],
            },
            {
                id: 'b',
                data: [],
            },
        ]
        expect(isQuantileData(input)).toBeTruthy()
    })

    it('rejects objects with missing data', () => {
        const input = [
            {
                id: 'a',
                data: [1, 2, 3],
            },
            {
                id: 'b',
            },
        ]
        expect(isQuantileData(input)).toBeFalsy()
    })

    it('rejects non-objects', () => {
        const input = [
            {
                id: 'a',
                data: [1, 2, 3],
            },
            null,
        ]
        expect(isQuantileData(input)).toBeFalsy()
    })
})

describe('isQuantileProcessedSummary', () => {
    const q5 = [0.05, 0.25, 0.5, 0.75, 0.95]

    it('detects correct data format', () => {
        const input = { n: 20, mean: 3, values: [1, 2, 3, 4, 5], quantiles: q5, extrema: [0, 8] }
        expect(isQuantileProcessedSummary(input)).toBeTruthy()
    })

    it('rejects arrays', () => {
        const input = [1, 2, 3]
        expect(isQuantileProcessedSummary(input)).toBeFalsy()
    })

    it('rejects objects without n', () => {
        const input = { mean: 3, values: [1, 2, 3, 4, 5], quantiles: q5, extrema: [0, 8] }
        expect(isQuantileProcessedSummary(input)).toBeFalsy()
    })

    it('rejects partial objects', () => {
        const input = { n: 20, mean: 3, values: [1, 2, 3, 4, 5], quantiles: q5 }
        expect(isQuantileProcessedSummary(input)).toBeFalsy()
    })

    it('rejects incorrect lengths', () => {
        const inputV = { n: 20, mean: 3, values: [1, 2, 4, 5], quantiles: q5, extrema: [0, 8] }
        expect(isQuantileProcessedSummary(inputV)).toBeFalsy()
        const inputQ = {
            n: 20,
            mean: 3,
            values: [1, 2, 3, 4, 5],
            quantiles: [0, 1],
            extrema: [0, 8],
        }
        expect(isQuantileProcessedSummary(inputQ)).toBeFalsy()
        const inputE = {
            n: 20,
            mean: 3,
            values: [1, 2, 3, 4, 5],
            quantiles: q5,
            extrema: [0, 8, 12],
        }
        expect(isQuantileProcessedSummary(inputE)).toBeFalsy()
    })
})

describe('isQuantileProcessedData', () => {
    const q5 = [0.05, 0.25, 0.5, 0.75, 0.95]

    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                data: [{ values: [1, 2, 3, 4, 5], quantiles: q5, extrema: [0, 8] }],
                domain: [[0, 8]],
            },
        ]
        expect(isQuantileProcessedData(input)).toBeTruthy()
    })

    it('rejects objects with incorrect keys', () => {
        const input = [
            {
                id: 'a',
                index: 0,
            },
        ]
        expect(isQuantileProcessedData(input)).toBeFalsy()
    })

    it('rejects non-objects', () => {
        const input = [null]
        expect(isQuantileProcessedData(input)).toBeFalsy()
    })

    it('rejects empty data', () => {
        expect(isQuantileProcessedData([])).toBeFalsy()
    })
})
