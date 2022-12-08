import { countCommonElements } from '../src/venn/utils'

describe('countCommonElements', () => {
    it('counts in empty sets', () => {
        const sets = [new Set(), new Set()]
        expect(countCommonElements(sets)).toEqual(0)
    })

    it('accept empty array', () => {
        expect(countCommonElements([])).toEqual(0)
    })

    it('counts common elements in two sets', () => {
        const sets = [new Set([1, 2, 3]), new Set([2, 3, 4])]
        expect(countCommonElements(sets)).toEqual(2)
    })

    it('counts common elements in three sets', () => {
        const sets = [new Set([1, 2, 3, 4]), new Set([2, 3, 5, 6]), new Set([2, 3, 5, 6])]
        expect(countCommonElements(sets)).toEqual(2)
    })

    it('counts common elements in disjoint sets', () => {
        const sets = [new Set([1, 2, 3, 4]), new Set([5, 6]), new Set([7])]
        expect(countCommonElements(sets)).toEqual(0)
    })
})
