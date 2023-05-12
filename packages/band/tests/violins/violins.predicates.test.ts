import { isViolinData } from '../../src/violins'

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
