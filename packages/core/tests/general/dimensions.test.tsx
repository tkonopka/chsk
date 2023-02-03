import { getAbsoluteSize } from '../../src/general/dimensions'

describe('getAbsoluteSize', () => {
    it('returns an absolute size as-is', () => {
        const result = getAbsoluteSize([10, 20], 'absolute', [100, 100])
        expect(result).toEqual([10, 20])
    })

    it('computes an absolute size', () => {
        const result = getAbsoluteSize([0.1, 0.5], 'relative', [100, 100])
        expect(result).toEqual([10, 50])
    })
})
