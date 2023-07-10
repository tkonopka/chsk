import { isStripData, isStripProcessedPoints, isStripProcessedData } from '../../src'

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

describe('isStripProcessedPoints', () => {
    it('rejects string data', () => {
        expect(isStripProcessedPoints('abc')).toBeFalsy()
    })
})

describe('isStripProcessedData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                data: [{ internal: [0, 1, 2], value: [0.5, 1.5, 1.0], valueSize: [2, 2, 2] }],
                domain: [[0.5, 1.5]],
            },
        ]
        expect(isStripProcessedData(input)).toBeTruthy()
    })

    it('rejects non-objects', () => {
        expect(isStripProcessedData([null])).toBeFalsy()
    })

    it('rejects empty data', () => {
        expect(isStripProcessedData([])).toBeFalsy()
    })
})
