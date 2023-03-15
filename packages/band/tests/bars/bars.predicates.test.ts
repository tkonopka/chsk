import { isBarProcessedData } from '../../src'

describe('isBarProcessedData', () => {
    it('detects correct data format', () => {
        const input = [
            {
                id: 'a',
                index: 0,
                data: [0.5, 1.0, 1.5],
                domain: [[0.5, 1.5]],
            },
        ]
        expect(isBarProcessedData(input)).toBeTruthy()
    })

    it('rejects non-objects', () => {
        const input = [null]
        expect(isBarProcessedData(input)).toBeFalsy()
    })

    it('rejects empty data', () => {
        expect(isBarProcessedData([])).toBeFalsy()
    })
})
