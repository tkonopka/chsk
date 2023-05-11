import { getCenter } from '../../src/general/utils'
import { sortedIndex } from 'lodash'

// this tests a function from lodash -
// this is not strictly necessary but just checks the function satisfies local requirements
describe('sortedIndex', () => {
    it('search in empty array', () => {
        expect(sortedIndex([], 10)).toEqual(0)
    })

    it('search in one-item array', () => {
        expect(sortedIndex([10], 5)).toEqual(0)
        expect(sortedIndex([10], 15)).toEqual(1)
        expect(sortedIndex([10], 10)).toEqual(0)
    })

    it('search in array with unique items', () => {
        const array = [10, 20, 30]
        expect(sortedIndex(array, 5)).toEqual(0)
        expect(sortedIndex(array, 15)).toEqual(1)
        expect(sortedIndex(array, 25)).toEqual(2)
        expect(sortedIndex(array, 50)).toEqual(3)
    })

    it('search in array with repeated items', () => {
        const array = [10, 15, 20, 20, 20, 20, 20, 30]
        expect(sortedIndex(array, 20)).toEqual(2)
    })
})

describe('getCenter', () => {
    it('computes center of an anchored box', () => {
        expect(getCenter([0, 0], [10, 10], [0.5, 1], [0, 0])).toEqual([0, -5])
    })
})
