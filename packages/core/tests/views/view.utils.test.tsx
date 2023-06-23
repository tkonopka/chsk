import { getIndexes } from '../../src/views/utils'

describe('getIndexes', () => {
    it('get a map from string ids to integers', () => {
        const testdata = [
            { id: 'A', x: 0 },
            { id: 'Z', x: 100 },
        ]
        const result = getIndexes(testdata)
        expect(result['A']).toBe(0)
        expect(result['Z']).toBe(1)
    })

    it('accepts undefined', () => {
        const result = getIndexes(undefined)
        expect(Object.keys(result)).toEqual([])
    })
})
