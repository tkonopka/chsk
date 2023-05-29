import { getCenter, url, cloneProps, mergeProps } from '../../src/general/utils'

describe('getCenter', () => {
    it('computes center of an anchored box', () => {
        expect(getCenter([0, 0], [10, 10], [0.5, 1], [0, 0])).toEqual([0, -5])
    })
})

describe('url', () => {
    it('creates url string', () => {
        expect(url('abc')).toEqual('url(#abc)')
    })

    it('skips work when id is undefined', () => {
        expect(url(undefined)).toEqual(undefined)
    })
})

describe('cloneProps', () => {
    it('copies primitive types', () => {
        expect(cloneProps(5)).toEqual(5)
        expect(cloneProps('abc')).toEqual('abc')
    })

    it('copies special values', () => {
        expect(cloneProps(null)).toEqual(null)
        expect(cloneProps(undefined)).toEqual(undefined)
    })

    it('copies arrays', () => {
        const data = [1, 2, 3]
        const result = cloneProps(data)
        expect(result).toEqual([1, 2, 3])
        data[0] = 10
        result[2] = 20
        expect(data).toEqual([10, 2, 3])
        expect(result).toEqual([1, 2, 20])
    })

    it('copies objects', () => {
        const data = { a: { b: 10 } }
        const result = cloneProps(data)
        expect(result).toEqual({ a: { b: 10 } })
        result.a.b = 20
        expect(data.a.b).toEqual(10)
        expect(result.a.b).toEqual(20)
    })

    it('copies dates', () => {
        const data = new Date('2000-01-01')
        const result = cloneProps(data)
        expect(result.getFullYear()).toEqual(2000)
        result.setFullYear(2050)
        expect(data.getFullYear()).toEqual(2000)
        expect(result.getFullYear()).toEqual(2050)
    })
})

describe('mergeProps', () => {
    it('preserves first object when second is undefined', () => {
        const result = mergeProps({ a: 1 }, undefined)
        expect(result?.a).toEqual(1)
    })

    it('return second object when first object is undefined', () => {
        const result = mergeProps(undefined, { a: 1 })
        expect(result?.a).toEqual(1)
    })

    it('combines two objects', () => {
        const result = mergeProps({ a: 1 }, { b: 2 })
        expect(result.a).toEqual(1)
        expect(result.b).toEqual(2)
    })

    it('combines two nested objects', () => {
        const result = mergeProps({ a: { x: 0, y: 1 }, b: 0 }, { a: { y: 2 } })
        const expected = { a: { x: 0, y: 2 }, b: 0 }
        expect(result).toEqual(expected)
    })

    it('replaces primitive data', () => {
        const result = mergeProps({ a: 1, b: 2 }, { a: 0 })
        expect(result.a).toEqual(0)
        expect(result.b).toEqual(2)
    })

    it('replaces array data', () => {
        const result = mergeProps({ a: [1, 2, 3] }, { a: [4, 5] })
        expect(result.a).toEqual([4, 5])
    })

    it('replaces date data', () => {
        const d1 = new Date('2000-01-01')
        const d2 = new Date('2001-01-01')
        const result = mergeProps({ a: d1 }, { a: d2 })
        expect(d1.getFullYear()).toEqual(2000)
        expect(d2.getFullYear()).toEqual(2001)
        expect(result.a.getFullYear()).toEqual(2001)
    })
})
