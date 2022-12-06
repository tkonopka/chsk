import { isVennData, isVennProcessedData } from '../src/venn'

describe('isVennData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                data: ['a', 'b'],
            },
            {
                id: 'b',
                x: ['b', 'c'],
            },
        ]
        expect(isVennData(input)).toBeTruthy()
    })

    it('rejects objects with missing ids', () => {
        const input = [
            {
                data: ['a', 'b'],
            },
            {
                x: ['b', 'c'],
            },
        ]
        expect(isVennData(input)).toBeFalsy()
    })

    it('rejects non-objects', () => {
        const input = [null]
        expect(isVennData(input)).toBeFalsy()
    })
})

describe('isVennProcessedData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                position: [0, 0],
                r: 10,
            },
            {
                id: 'b',
                index: 1,
                position: [0, 0],
                r: 10,
            },
        ]
        expect(isVennProcessedData(input)).toBeTruthy()
    })

    it('reject data with missing position', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                r: 10,
            },
            {
                id: 'b',
                index: 1,
                position: [0, 0],
                r: 10,
            },
        ]
        expect(isVennProcessedData(input)).toBeFalsy()
    })

    it('reject data with missing radius', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                position: [0, 0],
            },
            {
                id: 'b',
                index: 1,
                position: [0, 0],
                r: 10,
            },
        ]
        expect(isVennProcessedData(input)).toBeFalsy()
    })

    it('reject null', () => {
        const input = [null]
        expect(isVennProcessedData(input)).toBeFalsy()
    })
})
