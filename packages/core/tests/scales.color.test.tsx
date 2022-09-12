import { createCategoricalScale } from '../src/scales/categorical'
import { createSequentialScale } from '../src/scales/sequential'
import { createDivergingScale } from '../src/scales/diverging'
import {
    createColorScale,
    createColorScaleProps,
    getTicks,
    DivergingScaleProps,
    SequentialScaleProps,
} from '../src/scales/'

describe('createCategoricalScale', () => {
    it('categorical with custom colors', () => {
        const result = createCategoricalScale({
            variant: 'categorical',
            colors: ['#000', '#fff'],
            domain: ['a', 'b'],
        })
        expect(result(0)).toBe('#000')
        expect(result(1)).toBe('#fff')
        // recycles colors
        expect(result(2)).toBe('#000')
        expect(result(3)).toBe('#fff')
        // ticks are at the domain elements
        expect(getTicks(result)).toEqual([0, 1])
    })

    it('categorical with custom colors and domain', () => {
        const result = createCategoricalScale({
            variant: 'categorical',
            colors: ['#000', '#fff'],
            domain: ['x', 'y'],
        })
        expect(result('x')).toBe('#000')
        expect(result('y')).toBe('#fff')
        expect(result('z')).toBe(undefined)
    })

    it('categorical with custom colors, restricted', () => {
        const result = createCategoricalScale({
            variant: 'categorical',
            colors: ['#000', '#fff', '#0f0'],
            size: 2,
            domain: ['a', 'b', 'c'],
        })
        expect(result(0)).toBe('#000')
        expect(result(1)).toBe('#fff')
        // size is restricted to 2, so color(2) should be the same as color(0)
        expect(result(2)).toBe('#000')
    })

    it('categorical with custom colors, empty domain', () => {
        const result = createCategoricalScale({
            variant: 'categorical',
            colors: ['#000', '#fff', '#0f0'],
            domain: [],
        })
        // the domain is empty so mappings should signal out-of range
        expect(result(0)).toBeUndefined()
        expect(result(1)).toBeUndefined()
    })

    it('categorical using d3 categorical scheme', () => {
        const result = createCategoricalScale({
            variant: 'categorical',
            colors: 'Category10',
            domain: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        })
        // a few colors to compare - they should be different from each other
        const colors = [result(0), result(2), result(6)]
        expect(colors[0]).not.toEqual(colors[1])
        expect(colors[0]).not.toEqual(colors[2])
        expect(colors[1]).not.toEqual(colors[2])
    })

    it('categorical using d3 sequential scheme', () => {
        const result = createCategoricalScale({
            variant: 'categorical',
            colors: 'Blues',
            domain: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        })
        // a few colors to compare - they should be different from each other
        const colors = [result(0), result(3), result(6)]
        expect(colors[0]).not.toEqual(colors[1])
        expect(colors[0]).not.toEqual(colors[2])
        expect(colors[1]).not.toEqual(colors[2])
    })

    it('categorical using d3 sequential scheme with fixed size', () => {
        const result = createCategoricalScale({
            variant: 'categorical',
            colors: 'Blues',
            size: 5,
            domain: [],
        })
        // a few colors to compare - they should be different from each other
        const colors = [result(0), result(4), result(5)]
        expect(colors[0]).not.toEqual(colors[1])
        // size 5 means result(5) should recycle result from result(0)
        expect(colors[0]).toEqual(colors[2])
    })
})

describe('createSequentialScale', () => {
    it('sequential with custom colors', () => {
        const result = createSequentialScale({
            variant: 'sequential',
            colors: ['#000', '#fff'],
            domain: [0, 10],
        })
        expect(result(0)).toBe('rgb(0, 0, 0)')
        expect(result(10)).toBe('rgb(255, 255, 255)')
    })

    it('sequential with d3 sequential scheme', () => {
        const result = createSequentialScale({
            variant: 'sequential',
            colors: 'Blues',
            domain: [0, 10],
        })
        const colors = [result(0), result(5), result(10)]
        expect(colors[0]).not.toEqual(colors[1])
        expect(colors[0]).not.toEqual(colors[2])
        expect(colors[1]).not.toEqual(colors[2])
    })
})

describe('createDivergingScale', () => {
    it('diverging with custom colors', () => {
        const result = createDivergingScale({
            variant: 'diverging',
            colors: ['#f00', '#000', '#00f'],
            domain: [-10, 0, 10],
        })
        const colors = [result(-10), result(0), result(10)]
        expect(colors[0]).toBe('rgb(255, 0, 0)')
        expect(colors[1]).toBe('rgb(0, 0, 0)')
        expect(colors[2]).toBe('rgb(0, 0, 255)')
    })

    it('diverging with d3 sequential scheme', () => {
        const result = createDivergingScale({
            variant: 'diverging',
            colors: 'BrBG',
            domain: [-10, 0, 10],
        })
        const colors = [result(-10), result(0), result(10)]
        expect(colors[0]).not.toEqual(colors[1])
        expect(colors[0]).not.toEqual(colors[2])
        expect(colors[1]).not.toEqual(colors[2])
    })
})

describe('createColorScale', () => {
    it('categorical', () => {
        const result = createColorScale({
            variant: 'categorical',
            colors: ['#000', '#fff'],
            domain: ['a', 'b'],
        })
        expect(result(0)).toBe('#000')
        expect(result(1)).toBe('#fff')
    })

    it('sequential', () => {
        const result = createColorScale({
            variant: 'sequential',
            colors: ['#000', '#fff'],
            domain: [0, 1],
        })
        expect(result(0)).toBe('rgb(0, 0, 0)')
        expect(result(1)).toBe('rgb(255, 255, 255)')
    })

    it('diverging', () => {
        const result = createColorScale({
            variant: 'diverging',
            colors: ['#000', '#000', '#fff'],
            domain: [0, 0, 1],
        })
        expect(result(0)).toBe('rgb(0, 0, 0)')
        expect(result(1)).toBe('rgb(255, 255, 255)')
    })
})

describe('createColorScaleProps', () => {
    it('creates basic categorical props', () => {
        const result = createColorScaleProps(
            {
                variant: 'categorical',
                colors: ['#000', '#fff'],
            },
            []
        )
        expect(result.colors).toHaveLength(2)
    })

    it('fills in domain for categorical props', () => {
        const result = createColorScaleProps(
            {
                variant: 'categorical',
                colors: ['#000', '#fff'],
            },
            ['a', 'b']
        )
        expect(result.colors).toHaveLength(2)
        expect(result.domain).toEqual(['a', 'b'])
    })

    it('preserves custom domain for categorical props', () => {
        const result = createColorScaleProps(
            {
                variant: 'categorical',
                colors: ['#000', '#fff'],
                domain: ['x', 'y'],
            },
            ['a', 'b']
        )
        expect(result.colors).toHaveLength(2)
        expect(result.domain).toEqual(['x', 'y'])
    })

    it('creates basic sequential props', () => {
        const result = createColorScaleProps(
            {
                variant: 'sequential',
                colors: 'Blues',
                domain: 'auto',
            },
            [0, 20]
        ) as SequentialScaleProps
        expect(result.domain).toEqual([0, 20])
    })

    it('preserves a custom domain for sequential props', () => {
        const result = createColorScaleProps(
            {
                variant: 'sequential',
                colors: 'Blues',
                domain: [2, 4],
            },
            [0, 20]
        ) as SequentialScaleProps
        expect(result.domain).toEqual([2, 4])
    })

    it('creates a default domain for sequential props', () => {
        const result = createColorScaleProps(
            {
                variant: 'sequential',
                colors: 'Blues',
                domain: 'auto',
            },
            []
        ) as SequentialScaleProps
        expect(result.domain).toEqual([0, 100])
    })

    it('creates basic diverging props', () => {
        const result = createColorScaleProps(
            {
                variant: 'diverging',
                colors: ['#0000ff', '#ffffff', '#ff0000'],
                domain: 'auto',
            },
            [-2, 0, 2]
        ) as DivergingScaleProps
        expect(result.domain).toEqual([-2, 0, 2])
    })

    it('preserves custom domain for diverging props', () => {
        const result = createColorScaleProps(
            {
                variant: 'diverging',
                colors: ['#0000ff', '#ffffff', '#ff0000'],
                domain: [-10, -5, 0],
            },
            [-2, 0, 2]
        ) as DivergingScaleProps
        expect(result.domain).toEqual([-10, -5, 0])
    })

    it('creates a default domain for diverging props', () => {
        const result = createColorScaleProps(
            {
                variant: 'diverging',
                colors: ['#0000ff', '#ffffff', '#ff0000'],
                domain: 'auto',
            },
            []
        ) as DivergingScaleProps
        expect(result.domain).toEqual([-100, 0, 100])
    })
})
