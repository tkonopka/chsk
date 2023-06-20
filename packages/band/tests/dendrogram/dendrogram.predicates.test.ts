import { isDendrogramData, isDendrogramProcessedData } from '../../src/dendrogram'

describe('isDendrogramData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                merge: [
                    [-1, -2],
                    [-3, 1],
                ],
                height: [0.5, 1.5],
                ids: ['a', 'b', 'c'],
            },
        ]
        expect(isDendrogramData(input)).toBeTruthy()
    })

    it('rejects null data', () => {
        expect(isDendrogramData([null])).toBeFalsy()
    })

    it('rejects non-objects data', () => {
        expect(isDendrogramData([[1, 2, 3]])).toBeFalsy()
    })

    it('rejects data with incorrect merge and height arrays', () => {
        const input = [
            {
                id: 'a',
                merge: [],
                height: 0,
                ids: ['a', 'b', 'c'],
            },
        ]
        expect(isDendrogramData(input)).toBeFalsy()
    })

    it('rejects data with incompatible merge and height arrays', () => {
        const input = [
            {
                id: 'a',
                merge: [
                    [-1, -2],
                    [-3, 1],
                ],
                height: [0.5, 1.5, 2, 3, 4],
                ids: ['a', 'b', 'c'],
            },
        ]
        expect(isDendrogramData(input)).toBeFalsy()
    })
})

describe('isDendrogramProcessedData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                domain: [0.5, 1.5],
            },
        ]
        expect(isDendrogramProcessedData(input)).toBeTruthy()
    })

    it('rejects non-objects', () => {
        const input = [null]
        expect(isDendrogramProcessedData(input)).toBeFalsy()
    })

    it('rejects empty data', () => {
        expect(isDendrogramProcessedData([])).toBeFalsy()
    })
})
