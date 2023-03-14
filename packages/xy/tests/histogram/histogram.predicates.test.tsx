import { isScatterData, isScatterPreparedData, isScatterProcessedData } from '../../src'
import { isHistogramData, isHistogramProcessedData } from '../../src'

describe('isSHistogramData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                data: [1, 2, 3, 4],
            },
            {
                id: 'b',
                data: [],
            },
        ]
        expect(isHistogramData(input)).toBeTruthy()
    })

    it('rejects objects with missing data', () => {
        const input = [
            {
                id: 'a',
                data: [1, 2, 3, 4],
            },
            {
                id: 'b',
            },
        ]
        expect(isHistogramData(input)).toBeFalsy()
    })
})

describe('isHistogramProcessedData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                points: [
                    [0, 1],
                    [1, 2],
                ],
            },
        ]
        expect(isHistogramProcessedData(input)).toBeTruthy()
    })

    it('rejects objects with incorrect keys', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                x: [0, 1],
                y: [0, 1],
                r: [2, 2],
            },
        ]
        expect(isHistogramProcessedData(input)).toBeFalsy()
    })

    it('rejects non-objects', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                points: [
                    [0, 1],
                    [1, 2],
                ],
            },
            null,
        ]
        expect(isHistogramProcessedData(input)).toBeFalsy()
    })
})
