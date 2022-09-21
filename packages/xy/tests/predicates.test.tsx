import { isScatterData, isScatterPreparedData, isScatterProcessedData } from '../src/'
import { isHistogramData, isHistogramProcessedData } from '../src/'

describe('isScatterData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                data: [
                    { x: 1, y: 1 },
                    { x: 2, y: 2 },
                ],
            },
            {
                id: 'b',
                data: [
                    { x: 1, y: 1 },
                    { x: 2, y: 2 },
                ],
            },
        ]
        expect(isScatterData(input)).toBeTruthy()
    })

    it('rejects objects with missing data', () => {
        const input = [
            {
                id: 'a',
                data: [
                    { x: 1, y: 1 },
                    { x: 2, y: 2 },
                ],
            },
            {
                id: 'b',
            },
        ]
        expect(isScatterData(input)).toBeFalsy()
    })
})

describe('isScatterProcessedData and isScatterPreparedData', () => {
    it('detects correct processed data format', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                x: [0, 1],
                y: [0, 1],
                size: [2, 2],
            },
        ]
        expect(isScatterProcessedData(input)).toBeTruthy()
        expect(isScatterPreparedData(input)).toBeFalsy()
    })

    it('detects correct prepared data format', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                x: [0, 1],
                y: [0, 1],
                r: [2, 2],
            },
        ]
        expect(isScatterProcessedData(input)).toBeFalsy()
        expect(isScatterPreparedData(input)).toBeTruthy()
    })

    it('rejects objects with incorrect keys', () => {
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
        expect(isScatterProcessedData(input)).toBeFalsy()
        expect(isScatterPreparedData(input)).toBeFalsy()
    })

    it('rejects non-objects', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                data: [
                    { x: 1, y: 1 },
                    { x: 2, y: 2 },
                ],
            },
            null,
        ]
        expect(isScatterProcessedData(input)).toBeFalsy()
        expect(isScatterPreparedData(input)).toBeFalsy()
    })
})

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

    it('rejects objects with missing keys', () => {
        const input = [
            {
                id: 'a',
                data: [1, 2, 3, 4],
            },
            {
                id: 'b',
                values: [1, 2, 3, 4],
            },
        ]
        expect(isScatterData(input)).toBeFalsy()
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
