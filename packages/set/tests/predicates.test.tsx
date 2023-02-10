import { isVennData, isVennProcessedData, isVennPreparedData } from '../src/venn'

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

    it('rejects empty array', () => {
        expect(isVennData([])).toBeFalsy()
    })
})

describe('isVennProcessedData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                center: [0, 0],
                r: 10,
            },
            {
                id: 'b',
                index: 1,
                center: [0, 0],
                r: 10,
            },
        ]
        expect(isVennProcessedData(input)).toBeTruthy()
    })

    it('reject data with missing center labelPosition', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                r: 10,
            },
            {
                id: 'b',
                index: 1,
                center: [0, 0],
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
                center: [0, 0],
            },
            {
                id: 'b',
                index: 1,
                center: [0, 0],
                r: 10,
            },
        ]
        expect(isVennProcessedData(input)).toBeFalsy()
    })

    it('reject null', () => {
        const input = [null]
        expect(isVennProcessedData(input)).toBeFalsy()
    })

    it('reject empty array', () => {
        expect(isVennProcessedData([])).toBeFalsy()
    })
})

describe('isVennPreparedData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                members: [true, false],
                label: 'a',
                value: 10,
                d: 'm 0 0',
            },
            {
                id: 'b',
                members: [false, true],
                label: 'a',
                value: 10,
                d: 'm 0 0',
            },
        ]
        expect(isVennPreparedData(input)).toBeTruthy()
    })

    it('detects missing path d', () => {
        const input = [
            {
                id: 'a',
                members: [true, false],
                label: 'a',
                value: 10,
            },
            {
                id: 'b',
                members: [false, true],
                label: 'a',
                value: 10,
            },
        ]
        expect(isVennPreparedData(input)).toBeFalsy()
    })

    it('reject null', () => {
        const input = [null]
        expect(isVennPreparedData(input)).toBeFalsy()
    })

    it('rejects empty data ', () => {
        expect(isVennPreparedData([])).toBeFalsy()
    })
})
