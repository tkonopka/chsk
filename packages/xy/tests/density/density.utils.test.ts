import { createColorScale } from '@chsk/core'
import { rgb } from 'd3-color'
import { avgLab, avgRgb } from '../../src/density/utils'

// two color scale with red and blue
const scale = createColorScale({
    variant: 'categorical',
    domain: ['a', 'b'],
    colors: ['#ff0000', '#0000ff'],
})

describe('avgLab', () => {
    it('handles empty input', () => {
        expect(avgLab([], scale)).toEqual('#000000')
    })

    it('handles single values', () => {
        expect(avgLab([0], scale)).toEqual('#ff0000')
        expect(avgLab([1], scale)).toEqual('#0000ff')
    })

    it('handles homogeneous value arrays', () => {
        expect(avgLab([0, 0, 0], scale)).toEqual('#ff0000')
    })

    it('averages colors', () => {
        const result = avgLab([0, 1, 1, 1, 1], scale)
        expect(rgb(result).r).toBeGreaterThan(0)
        expect(rgb(result).r).toBeLessThan(255)
        expect(rgb(result).b).toBeGreaterThan(0)
        expect(rgb(result).b).toBeLessThan(255)
        expect(rgb(result).b).toBeGreaterThan(rgb(result).r)
    })
})

describe('avgRgb', () => {
    it('handles empty input', () => {
        expect(avgRgb([], scale)).toEqual('#000000')
    })

    it('handles single values', () => {
        expect(avgRgb([0], scale)).toEqual('#ff0000')
        expect(avgRgb([1], scale)).toEqual('#0000ff')
    })

    it('handles homogeneous value arrays', () => {
        expect(avgRgb([0, 0, 0], scale)).toEqual('#ff0000')
    })

    it('averages colors', () => {
        const result = avgRgb([0, 1, 1, 1, 1], scale)
        expect(rgb(result).r).toBeGreaterThan(0)
        expect(rgb(result).r).toBeLessThan(255)
        expect(rgb(result).b).toBeGreaterThan(0)
        expect(rgb(result).b).toBeLessThan(255)
        expect(rgb(result).b).toBeGreaterThan(rgb(result).r)
        // in rgb averaging of red and blue, green will always be zero
        expect(rgb(result).g).toEqual(0)
    })
})
