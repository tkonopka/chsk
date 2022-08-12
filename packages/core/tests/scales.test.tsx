import {
    createBandScale,
    createContinuousScale,
    getTickCoordinates,
    getMinMax,
    getAbsolutePosition,
    ScalesContextProps,
} from '../src/scales'

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
        expect(cd - ab).toBeGreaterThan(5)
    })

    it('extract tick coordinates for center of bands', () => {
        const scale = createBandScale({
            domain: ['a', 'b', 'c', 'd'],
            size: 120,
            padding: 0,
        })
        // four bands [0, 30], [30, 60], [60, 90], [90, 120]
        // default ticks should be at the center of the band interval
        const result = getTickCoordinates(scale, undefined)
        expect(result).toHaveLength(4)
        const expected = [15, 45, 75, 105]
        expected.map((v, i) => expect(result[i]).toEqual(v))
    })

    it('extract tick coordinates for band start positions', () => {
        const scale = createBandScale({
            domain: ['a', 'b', 'c', 'd'],
            size: 120,
            padding: 0,
        })
        // four bands [0, 30], [30, 60], [60, 90], [90, 120]
        const result = getTickCoordinates(scale, undefined, -0.5)
        expect(result).toHaveLength(4)
        const expected = [0, 30, 60, 90]
        expected.map((v, i) => expect(result[i]).toEqual(v))
    })

    it('extract tick coordinates for band end positions', () => {
        const scale = createBandScale({
            domain: ['a', 'b', 'c', 'd'],
            size: 120,
            padding: 0,
        })
        // four bands [0, 30], [30, 60], [60, 90], [90, 120]
        const result = getTickCoordinates(scale, undefined, +0.5)
        expect(result).toHaveLength(4)
        const expected = [30, 60, 90, 120]
        expected.map((v, i) => expect(result[i]).toEqual(v))
    })
})

describe('createContinuousScale', () => {
    it('creates linear scale for x axis', () => {
        const result = createContinuousScale({
            variant: 'linear',
            axis: 'x',
            domain: [0, 10],
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
            domain: [0, 10],
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
            domain: [1, 100],
            size: 100,
        })
        expect(result(1)).toEqual(0)
        expect(result(10)).toEqual(50)
        expect(result(100)).toEqual(100)
    })

    it('continuous scales have zero bandwidth', () => {
        const result = createContinuousScale({
            variant: 'linear',
            axis: 'x',
            domain: [1, 100],
            size: 100,
        })
        expect('bandwidth' in result).toBeTruthy()
        expect(result.bandwidth ? result.bandwidth() : null).toEqual(0)
    })

    it('extract tick coordinates', () => {
        const scale = createContinuousScale({
            variant: 'linear',
            axis: 'x',
            domain: [0, 100],
            size: 200,
        })
        const result = getTickCoordinates(scale, 6)
        const expected = [0, 40, 80, 120, 160, 200]
        expected.map((v, i) => expect(result[i]).toEqual(v))
    })
})

describe('getMinMax', () => {
    it('computes min and max from non-empty array', () => {
        const result = getMinMax([3, 6, 4, 9, 0, -1])
        expect(result[0]).toEqual(-1)
        expect(result[1]).toEqual(9)
    })

    it('computes min and max from empty array', () => {
        const result = getMinMax([])
        expect(result[0]).toEqual(1)
        expect(result[1]).toEqual(1)
    })
})

describe('getCoordinates', () => {
    const customBandScale = createBandScale({
        domain: ['a', 'b'],
        size: 100,
        padding: 0,
    })
    const customLinearScale = createContinuousScale({
        variant: 'linear',
        axis: 'y',
        domain: [0, 10],
        size: 100,
    })
    const customScales: ScalesContextProps = {
        scaleX: customBandScale,
        scaleY: customLinearScale,
        horizontal: null,
    }

    it('accepts inputs in absolute units', () => {
        const result = getAbsolutePosition([10, 20], 'absolute', [100, 100], customScales)
        expect(result).toEqual([10, 20])
    })

    it('accepts inputs in relative units', () => {
        const resultA = getAbsolutePosition([0.5, 0.6], 'relative', [100, 100], customScales)
        expect(resultA).toEqual([50, 60])
        const resultB = getAbsolutePosition([1, 0], 'relative', [100, 100], customScales)
        expect(resultB).toEqual([100, 0])
    })

    it('accepts inputs in view units', () => {
        const resultA = getAbsolutePosition(['a', 1], 'view', [100, 100], customScales)
        expect(resultA).toEqual([25, 90])
        const resultB = getAbsolutePosition(['b', 9], 'view', [100, 100], customScales)
        expect(resultB).toEqual([75, 10])
    })
})