import { createColorScale } from '@chsk/core'
import { rgb } from 'd3-color'
import { avgLab, avgRgb, toHex } from '../../src/density/utils'

// two color scale with red and blue
const scale = createColorScale({
    variant: 'categorical',
    domain: ['a', 'b'],
    colors: ['#ff0000', '#0000ff'],
})

describe('toHex', () => {
    it('convert regular number to hex', () => {
        expect(toHex(16)).toEqual('10')
    })

    it('convert small number to hex with zero padding', () => {
        expect(toHex(5)).toEqual('05')
        expect(toHex(11)).toEqual('0b')
    })

    it('convert zero to hex double zero', () => {
        expect(toHex(0)).toEqual('00')
    })

    it('convert decimals to integers', () => {
        expect(toHex((255 * 1) / 9)).toEqual('1c')
    })
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

/**
describe('timing color averaging', () => {
    it('time merge', () => {
        const n = 25000
        const scale = createColorScale({ variant: 'categorical', domain: ['a', 'b'], colors: ['#ff0000', '#0000ff']})
        const short = [1,2]
        const long = [1,1,1,1,1,1,1,1,2,2,2,2,2]

        console.log("scale on values " + JSON.stringify([scale(0), scale(1)]))

        const repeats = range(0, n)
        const t0 = Date.now()
        repeats.forEach(() => avgLab(short, scale))
        const t1 = Date.now()
        repeats.forEach(() => avg1(short, scale))
        const t2 = Date.now()
        repeats.forEach(() => avgLab(long, scale))
        const t3 = Date.now()
        repeats.forEach(() => avg1(long, scale))
        const t4 = Date.now()

        const output = []
        output.push('outputs avgLab: ' + JSON.stringify([avgLab(short, scale), avgLab(long, scale)]))
        output.push('outputs avgLab: ' + JSON.stringify([avgLab(short, scale), avgLab(long, scale)]))
        console.log('outputs:\n' + output.join('\n'))

        const timesShort = {
            avgLab: Number(t1) - Number(t0),
            avgRgb: Number(t2) - Number(t1),
        }
        const timesLong = {
            avgLab: Number(t3) - Number(t2),
            avgRgb: Number(t4) - Number(t3),
        }
        console.log('times short:\t' + JSON.stringify(timesShort))
        console.log('times long:\t' + JSON.stringify(timesLong))
        expect(1 + 1).toBe(2)
    })

})
*/
