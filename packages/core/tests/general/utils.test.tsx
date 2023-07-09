import {
    getAnchoredOrigin,
    getCenter,
    url,
    cloneProps,
    mergeProps,
    mergeTargets,
    trimTarget,
} from '../../src/general/utils'
import { AnchorSpec, NumericPositionSpec, SizeSpec } from '../../src/general/types'
import { AnimationSpec } from '../../dist/types'

describe('getAnchoredOrigin', () => {
    it('computes origin - top-left position with top-left anchor', () => {
        const inputs = {
            position: [0, 0] as NumericPositionSpec,
            size: [10, 20] as SizeSpec,
            anchor: [0, 0] as AnchorSpec,
        }
        const result = getAnchoredOrigin(inputs.position, inputs.size, inputs.anchor)
        expect(result).toEqual([0, 0])
    })

    it('computes origin - top-left position with top-middle anchor', () => {
        const inputs = {
            position: [0, 0] as NumericPositionSpec,
            size: [10, 20] as SizeSpec,
            anchor: [0.5, 0] as AnchorSpec,
        }
        const result = getAnchoredOrigin(inputs.position, inputs.size, inputs.anchor)
        expect(result).toEqual([-5, 0])
    })

    it('computes origin - top-center with top-middle anchor', () => {
        const inputs = {
            position: [50, 0] as NumericPositionSpec,
            size: [10, 20] as SizeSpec,
            anchor: [0.5, 0] as AnchorSpec,
        }
        const result = getAnchoredOrigin(inputs.position, inputs.size, inputs.anchor)
        expect(result).toEqual([45, 0])
    })

    it('computes origin - top-right with top-right anchor', () => {
        const inputs = {
            position: [100, 0] as NumericPositionSpec,
            size: [10, 20] as SizeSpec,
            anchor: [1, 0] as AnchorSpec,
        }
        const result = getAnchoredOrigin(inputs.position, inputs.size, inputs.anchor)
        expect(result).toEqual([90, 0])
    })

    it('computes origin - bottom-right with bottom-right anchor', () => {
        const inputs = {
            position: [100, 200] as NumericPositionSpec,
            size: [10, 20] as SizeSpec,
            anchor: [1, 1] as AnchorSpec,
        }
        const result = getAnchoredOrigin(inputs.position, inputs.size, inputs.anchor)
        expect(result).toEqual([90, 180])
    })

    it('computes origin - middle-right with middle-left anchor', () => {
        const inputs = {
            position: [100, 100] as NumericPositionSpec,
            size: [10, 20] as SizeSpec,
            anchor: [0, 0.5] as AnchorSpec,
        }
        const result = getAnchoredOrigin(inputs.position, inputs.size, inputs.anchor)
        expect(result).toEqual([100, 90])
    })
})

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

describe('mergeTargets', () => {
    it('ignores empty update', () => {
        const result = mergeTargets({ x: 0 }, undefined)
        expect(result?.x).toEqual(0)
    })

    it('transfers information', () => {
        const result = mergeTargets({ x: 0 }, { width: 10 })
        expect(result?.x).toEqual(0)
        expect(result?.width).toEqual(10)
    })

    it('replaces information', () => {
        const result = mergeTargets({ opacity: 0 }, { opacity: 0.5 })
        expect(result?.opacity).toEqual(0.5)
    })

    it('transforms target using a function', () => {
        const customTransform = (target: AnimationSpec): AnimationSpec => {
            return { x: Number(target.x) + Number(target.width), width: 0 }
        }
        const result = mergeTargets({ x: 0, width: 10 }, customTransform)
        expect(result?.x).toEqual(10)
        expect(result?.width).toEqual(0)
    })
})

describe('trimTarget', () => {
    it('preserves values in target', () => {
        const result = trimTarget({ stroke: '#000000', strokeWidth: 1 })
        expect(JSON.stringify(Object.keys(result))).toContain('stroke')
        expect(JSON.stringify(Object.keys(result))).toContain('strokeWidth')
    })

    it('removes fields with undefined values', () => {
        const input = { opacity: undefined, fill: '#000000' }
        expect(JSON.stringify(Object.keys(input))).toContain('opacity')
        const result = trimTarget(input)
        expect(JSON.stringify(Object.keys(result))).not.toContain('opacity')
        expect(JSON.stringify(Object.keys(result))).toContain('fill')
    })
})
