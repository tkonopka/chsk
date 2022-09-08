import { isQuantileData, isQuantileProcessedData } from '../src/quantiles/'
import { isStripData, isStripProcessedData } from '../src'

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
})

describe('isStripData', () => {
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
        expect(isStripData(input)).toBeTruthy()
    })

    it('rejects objects with missing id', () => {
        const input = [
            {
                id: 'a',
                data: [1, 2, 3],
            },
            {
                data: [1, 2, 3],
            },
        ]
        expect(isStripData(input)).toBeFalsy()
    })

    it('rejects non-objects', () => {
        const input = [
            {
                id: 'a',
                data: [1, 2, 3],
            },
            null,
        ]
        expect(isStripData(input)).toBeFalsy()
    })
})

describe('isStripProcessedData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                data: [{ internal: [0, 1, 2], value: [0.5, 1.5, 1.0], r: [2, 2, 2] }],
                domain: [[0.5, 1.5]],
            },
        ]
        expect(isStripProcessedData(input)).toBeTruthy()
    })

    it('rejects non-objects', () => {
        const input = [null]
        expect(isStripProcessedData(input)).toBeFalsy()
    })
})
