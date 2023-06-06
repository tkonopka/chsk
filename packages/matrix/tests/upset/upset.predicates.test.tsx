import { isUpSetData, isUpSetProcessedData } from '../../src/upset'

describe('isUpSetData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                data: ['a', 'b'],
            },
            {
                id: 'b',
                data: ['c'],
            },
        ]
        expect(isUpSetData(input)).toBeTruthy()
    })

    it('rejects objects with missing ids', () => {
        const input = [
            {
                data: ['a', 'b'],
            },
            {
                data: ['c'],
            },
        ]
        expect(isUpSetData(input)).toBeFalsy()
    })

    it('rejects objects with missing data', () => {
        const input = [
            {
                id: 'alpha',
            },
        ]
        expect(isUpSetData(input)).toBeFalsy()
    })

    it('rejects non-objects', () => {
        const input = [
            {
                id: 'alpha',
                data: ['a', 'b'],
            },
            null,
        ]
        expect(isUpSetData(input)).toBeFalsy()
    })
})

describe('isUpSetProcessedData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                horizontal: true,
                data: [1],
            },
        ]
        expect(isUpSetProcessedData(input)).toBeTruthy()
    })

    it('rejects objects with incorrect keys', () => {
        const input = [
            {
                id: 'a',
                index: 0,
            },
        ]
        expect(isUpSetProcessedData(input)).toBeFalsy()
    })

    it('rejects non-objects', () => {
        const input = [null]
        expect(isUpSetProcessedData(input)).toBeFalsy()
    })
})
