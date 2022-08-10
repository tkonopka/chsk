import { createBandScale } from '../src/scales'
import { createContinuousScale } from '../src/scales'

describe('createBandScale', () => {
    it('creates band scale without padding', () => {
        const result = createBandScale({
            domain: ['a', 'b'],
            size: 100,
            padding: 0,
        })
        expect(result.ticks()).toEqual(['a', 'b'])
        expect(result.bandwidth()).toEqual(50)
        expect(result('a')).toEqual(25)
        expect(result('b')).toEqual(75)
    })

    it('creates band scale with outer padding', () => {
        const result = createBandScale({
            domain: ['a', 'b'],
            size: 100,
            paddingOuter: 1,
            paddingInner: 0,
        })
        expect(result.ticks()).toEqual(['a', 'b'])
        // padding outer = 1 is like placing an extra band on each side of the scale
        // each band will have width 100 / 4 = 25
        // effective range is [10, 90], i.e. size of 80, so each bar has bandwidth 40
        expect(result.bandwidth()).toBe(25)
        expect(result('a')).toEqual(25 + 12.5)
        expect(result('b')).toEqual(50 + 12.5)
    })

    it('creates band scale with inner padding', () => {
        const result = createBandScale({
            domain: ['a', 'b'],
            size: 100,
            paddingOuter: 0,
            paddingInner: 0.5,
        })
        expect(result.ticks()).toEqual(['a', 'b'])
        // two bands, no outer padding, and an inner space of width equal to a band
        expect(result.bandwidth()).toBe(100 / 3)
        expect(Math.round(result('a'))).toEqual(Math.round(100 / 6))
        expect(Math.round(result('b'))).toEqual(Math.round((100 * 5) / 6))
    })

    it('creates band scale with extra padding', () => {
        const result = createBandScale({
            domain: ['a', 'b', 'c', 'd'],
            size: 100,
            extraPadding: { d: 1 },
        })
        expect(result.ticks()).toEqual(['a', 'b', 'c', 'd'])
        // an extra space before band d
        // so the distance between [c, d] should greater than between [a, b]
        const ab = result('b') - result('a')
        const cd = result('d') - result('c')
        expect(cd).toBeGreaterThan(ab)
    })
})

describe('createContinuousScale', () => {
    it('creates linear scale for x axis', () => {
        const result = createContinuousScale({
            variant: 'linear',
            axis: 'x',
            min: 0,
            max: 10,
            size: 100,
        })
        expect(result(0)).toEqual(0)
        expect(result(10)).toEqual(100)
        expect(result(5)).toEqual(50)
    })

    it('creates linear scale for y axis', () => {
        const result = createContinuousScale({
            variant: 'linear',
            axis: 'y',
            min: 0,
            max: 10,
            size: 100,
        })
        // for y-axis, the ordering is reversed
        expect(result(0)).toEqual(100)
        expect(result(10)).toEqual(0)
        expect(result(5)).toEqual(50)
    })

    it('creates log scale for x axis', () => {
        const result = createContinuousScale({
            variant: 'log',
            axis: 'x',
            min: 1,
            max: 100,
            size: 100,
        })
        expect(result(1)).toEqual(0)
        expect(result(10)).toEqual(50)
        expect(result(100)).toEqual(100)
    })
})
