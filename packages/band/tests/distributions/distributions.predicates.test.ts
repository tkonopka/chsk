import {
    isDistributionData,
    isDistributionProcessedData,
    isDistributionProcessedSummary,
} from '../../src'

describe('isDistributionData', () => {
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
        expect(isDistributionData(input)).toBeTruthy()
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
        expect(isDistributionData(input)).toBeFalsy()
    })

    it('rejects non-objects', () => {
        const input = [
            {
                id: 'a',
                data: [1, 2, 3],
            },
            null,
        ]
        expect(isDistributionData(input)).toBeFalsy()
    })
})

describe('isDistributionProcessedSummary', () => {
    const q5 = [0.05, 0.25, 0.5, 0.75, 0.95]

    it('detects correct data format', () => {
        const input = { n: 20, mean: 3, values: [1, 2, 3, 4, 5], quantiles: q5, extrema: [0, 8] }
        expect(isDistributionProcessedSummary(input)).toBeTruthy()
    })

    it('rejects arrays', () => {
        const input = [1, 2, 3]
        expect(isDistributionProcessedSummary(input)).toBeFalsy()
    })

    it('rejects objects without n', () => {
        const input = { mean: 3, values: [1, 2, 3, 4, 5], quantiles: q5, extrema: [0, 8] }
        expect(isDistributionProcessedSummary(input)).toBeFalsy()
    })

    it('rejects partial objects', () => {
        const input = { n: 20, mean: 3, values: [1, 2, 3, 4, 5], quantiles: q5 }
        expect(isDistributionProcessedSummary(input)).toBeFalsy()
    })

    it('rejects incorrect lengths', () => {
        const inputV = { n: 20, mean: 3, values: [1, 2, 4, 5], quantiles: q5, extrema: [0, 8] }
        expect(isDistributionProcessedSummary(inputV)).toBeFalsy()
        const inputQ = {
            n: 20,
            mean: 3,
            values: [1, 2, 3, 4, 5],
            quantiles: [0, 1],
            extrema: [0, 8],
        }
        expect(isDistributionProcessedSummary(inputQ)).toBeFalsy()
        const inputE = {
            n: 20,
            mean: 3,
            values: [1, 2, 3, 4, 5],
            quantiles: q5,
            extrema: [0, 8, 12],
        }
        expect(isDistributionProcessedSummary(inputE)).toBeFalsy()
    })
})

describe('isDistributionProcessedData', () => {
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
        expect(isDistributionProcessedData(input)).toBeTruthy()
    })

    it('rejects objects with incorrect keys', () => {
        const input = [
            {
                id: 'a',
                index: 0,
            },
        ]
        expect(isDistributionProcessedData(input)).toBeFalsy()
    })

    it('rejects non-objects', () => {
        const input = [null]
        expect(isDistributionProcessedData(input)).toBeFalsy()
    })

    it('rejects empty data', () => {
        expect(isDistributionProcessedData([])).toBeFalsy()
    })
})
