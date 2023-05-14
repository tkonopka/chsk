import { isViolinData, isViolinProcessedSummary, isViolinProcessedData } from '../../src/violins'

describe('isViolinData', () => {
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
        expect(isViolinData(input)).toBeTruthy()
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
        expect(isViolinData(input)).toBeFalsy()
    })

    it('rejects non-objects', () => {
        const input = [
            {
                id: 'a',
                data: [1, 2, 3],
            },
            null,
        ]
        expect(isViolinData(input)).toBeFalsy()
    })
})

describe('isViolinProcessedSummary', () => {
    it('detects correct data format', () => {
        const input = {
            n: 20,
            values: [5, 10, 5],
            breaks: [0, 1, 2, 3],
        }
        expect(isViolinProcessedSummary(input)).toBeTruthy()
    })

    it('requires n', () => {
        const input = {
            values: [5, 5, 5],
            breaks: [0, 1, 2, 3],
        }
        expect(isViolinProcessedSummary(input)).toBeFalsy()
    })

    it('requires array types', () => {
        const input = {
            n: 20,
            values: 20,
            breaks: [0, 1, 2, 3],
        }
        expect(isViolinProcessedSummary(input)).toBeFalsy()
    })

    it('rejects null', () => {
        const input = null
        expect(isViolinProcessedSummary(input)).toBeFalsy()
    })
})

describe('isViolinProcessedData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                data: [{ n: 20, values: [10, 10], breaks: [0, 2, 4] }],
                domain: [[0, 4]],
            },
        ]
        expect(isViolinProcessedData(input)).toBeTruthy()
    })

    it('rejects non-objects', () => {
        const input = [5, 5]
        expect(isViolinProcessedData(input)).toBeFalsy()
    })

    it('rejects null', () => {
        const input = [null]
        expect(isViolinProcessedData(input)).toBeFalsy()
    })
})
