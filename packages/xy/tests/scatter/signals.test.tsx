import { roundDecimalPlaces } from '@chsk/core'
import { convolution, curvePoints, downsample } from '../../src/scatter'

const round2dp = (x: number) => roundDecimalPlaces(x, 2)

describe('convolution', () => {
    const mask3 = [1, 1, 1]
    const mask2 = [1, 1]
    const maskTriangle = [0.5, 1, 0.5]
    const maskRamp = [1, 2, 3]

    it('performs simple moving average', () => {
        const input = [2, 4, 6, 8]
        const normalization = 1.0 / 3
        const expected = [2, 2 + 4, 2 + 4 + 6, 4 + 6 + 8, 6 + 8, 8].map(x => x * normalization)
        const result = convolution(input, mask3).map(round2dp)
        expect(result).toEqual(expected.map(round2dp))
    })

    it('performs weighted moving average', () => {
        const input = [2, 4, 6, 8]
        const normalization = 1.0 / 6
        const expected = [
            2 * 1,
            4 * 1 + 2 * 2,
            6 * 1 + 4 * 2 + 2 * 3,
            8 * 1 + 6 * 2 + 4 * 3,
            0 * 1 + 8 * 2 + 6 * 3,
            0 * 1 + 0 * 2 + 8 * 3,
        ].map(x => x * normalization)
        const result = convolution(input, maskRamp)
        expect(result.map(round2dp)).toEqual(expected.map(round2dp))
    })
})

describe('downsample', () => {
    it('downsample at easy intervals', () => {
        const data = [1, 2, 3, 4, 5, 6, 7, 8]
        expect(downsample(data, 0.5, 0)).toEqual([1, 3, 5, 7])
    })

    it('downsample at easy intervals incomplete', () => {
        const data = [1, 2, 3, 4, 5, 6]
        expect(downsample(data, 0.25)).toEqual([1, 5])
    })

    it('downsample at easy intervals with offset', () => {
        const data = [1, 2, 3, 4, 5, 6, 7, 8]
        expect(downsample(data, 0.5, 1)).toEqual([2, 4, 6, 8])
    })

    it('downsample at non-easy interval', () => {
        const data = Array(20)
            .fill(0)
            .map((_, i) => i)
        const result = downsample(data, 1 / 2.5)
        expect(result.length).toBeGreaterThan(data.length / 3)
        expect(result.length).toBeLessThan(data.length / 2)
    })
})

describe('curvePoints', () => {
    it('returns raw data with default settings', () => {
        const x = [1, 2, 3, 4]
        const y = [0.9, 1.1, 0.9, 1.1]
        const result = curvePoints({ x, y })
        expect(result).toHaveLength(4)
        expect(result[0]).toEqual([1, 0.9])
        expect(result[1]).toEqual([2, 1.1])
        expect(result[2]).toEqual([3, 0.9])
        expect(result[3]).toEqual([4, 1.1])
    })

    it('performs a moving average', () => {
        const x = [1, 2, 3, 4]
        const y = [0.9, 1.1, 0.9, 1.1]
        const result = curvePoints({ x, y, convolutionMask: [1, 1] })
        expect(result).toHaveLength(3)
        expect(result[0]).toEqual([2, 1.0])
        expect(result[1]).toEqual([3, 1.0])
        expect(result[2]).toEqual([4, 1.0])
    })

    it('performs a down-sampling', () => {
        const x = [1, 2, 3, 4]
        const y = [0.9, 1.1, 0.9, 1.1]
        const result = curvePoints({ x, y, downsampleFactor: 0.5 })
        expect(result).toHaveLength(2)
        expect(result[0]).toEqual([1, 0.9])
        expect(result[1]).toEqual([3, 0.9])
    })
})
