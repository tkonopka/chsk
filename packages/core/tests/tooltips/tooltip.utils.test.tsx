import { exitsParent, guessLabel } from '../../src/tooltips/utils'
import { FourSideSizeSpec, SizeSpec } from '../../src'

describe('guessLabel', () => {
    it('uses an available label', () => {
        expect(guessLabel({ id: 'A', label: 'custom' })).toEqual('custom')
    })

    it('combines key and data', () => {
        expect(guessLabel({ id: 'A', key: 'custom', data: 5 })).toEqual('custom: 5')
    })

    it('combines id and data', () => {
        expect(guessLabel({ id: 'A', data: 15 })).toEqual('A: 15')
    })

    it('uses key', () => {
        expect(guessLabel({ id: 'A', key: 'custom' })).toEqual('custom')
    })

    it('falls back to id', () => {
        expect(guessLabel({ id: 'A', a: 1, b: 2 })).toEqual('A')
    })
})

describe('exitsParent', () => {
    const containerSize: SizeSpec = [200, 200]
    const margin: FourSideSizeSpec = [10, 10, 10, 10]

    it('detects object inside parent', () => {
        const result = exitsParent([20, 20], [100, 30], containerSize, margin)
        expect(result).toEqual([false, false])
    })

    it('detects exit on top boundary', () => {
        const result = exitsParent([10, -20], [100, 30], containerSize, margin)
        expect(result).toEqual([false, true])
    })

    it('detects exit on right boundary', () => {
        const result = exitsParent([150, 20], [100, 30], containerSize, margin)
        expect(result).toEqual([true, false])
    })

    it('detects exit on bottom boundary', () => {
        const result = exitsParent([50, 190], [100, 30], containerSize, margin)
        expect(result).toEqual([false, true])
    })

    it('detects exit on bottom boundary', () => {
        const result = exitsParent([50, 190], [100, 30], containerSize, margin)
        expect(result).toEqual([false, true])
    })

    it('permits exit on top boundary within margin', () => {
        const result = exitsParent([20, -5], [100, 30], containerSize, margin)
        expect(result).toEqual([false, false])
    })

    it('permits exit on right boundary within margin', () => {
        const result = exitsParent([105, 20], [100, 30], containerSize, margin)
        expect(result).toEqual([false, false])
    })

    it('permits exit on bottom boundary within margin', () => {
        const result = exitsParent([50, 175], [100, 30], containerSize, margin)
        expect(result).toEqual([false, false])
    })

    it('permits exit on left boundary within margin', () => {
        const result = exitsParent([-10, 50], [100, 30], containerSize, margin)
        expect(result).toEqual([false, false])
    })
})
