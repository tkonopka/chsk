import { getQuantiles } from '../../src/distributions/utils'

describe('getQuantiles', () => {
    const q3 = [0, 0.5, 1]
    const q5 = [0.05, 0.25, 0.5, 0.75, 0.95]

    it('computes simple quantiles', () => {
        const result = getQuantiles([0, 1, 2, 3, 4], q3)
        expect(result).toEqual([0, 2, 4])
    })

    it('computes quantiles with interpolation', () => {
        const result = getQuantiles([0, 1, 2, 3, 4], q5)
        expect(result).toHaveLength(5)
        expect(result[0]).toBeLessThan(1)
        expect(result[0]).toBeGreaterThan(0)
        expect(result[4]).toBeLessThan(4)
        expect(result[4]).toBeGreaterThan(3)
    })

    it('handles short data', () => {
        const result = getQuantiles([10], q5)
        expect(result).toHaveLength(5)
        expect(result).toEqual([10, 10, 10, 10, 10])
    })

    it('handles empty data', () => {
        const result = getQuantiles([], q5)
        expect(result).toEqual([NaN, NaN, NaN, NaN, NaN])
    })
})
