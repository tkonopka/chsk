import { cloneProps, getCenter } from '../../src/general/utils'

describe('getCenter', () => {
    it('computes center of an anchored box', () => {
        expect(getCenter([0, 0], [10, 10], [0.5, 1], [0, 0])).toEqual([0, -5])
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
