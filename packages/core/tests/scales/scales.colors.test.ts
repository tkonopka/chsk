import {
    createCategoricalScale,
    createSequentialScale,
    createDivergingScale,
    createThresholdScale,
} from '../../src/scales/colors.helpers'
import {
    createColorScale,
    createColorScaleProps,
    getTicks,
    DivergingScaleProps,
    SequentialScaleProps,
    getTickCoordinates,
    ThresholdScaleProps,
} from '../../src/scales'
import {
    schemeCategory10,
    schemeBlues,
    interpolateBlues,
    interpolateBrBG,
} from 'd3-scale-chromatic'

const rgb = (x: string): { red: number; green: number; blue: number } => ({
    red: parseInt(x.substring(1, 3), 16),
    green: parseInt(x.substring(3, 5), 16),
    blue: parseInt(x.substring(5, 7), 16),
})

describe('createCategoricalScale', () => {
    it('with custom colors', () => {
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

    it('with custom colors and domain', () => {
        const result = createCategoricalScale({
            variant: 'categorical',
            colors: ['#000', '#fff'],
            domain: ['x', 'y'],
        })
        expect(result('x')).toBe('#000')
        expect(result('y')).toBe('#fff')
        expect(result('z')).toBe(undefined)
    })

    it('with custom colors, restricted', () => {
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

    it('with custom colors, empty domain', () => {
        const result = createCategoricalScale({
            variant: 'categorical',
            colors: ['#888', '#fff', '#0f0'],
            domain: [],
        })
        // the domain is empty so mappings should signal out-of range
        expect(result(0)).toBeUndefined()
        expect(result(1)).toBeUndefined()
    })

    it('with a single color', () => {
        const result = createCategoricalScale({
            variant: 'categorical',
            colors: ['#000'],
            size: 2,
            domain: ['a', 'b', 'c'],
        })
        expect(result(0)).toBe('#000')
        // size is restricted to 2, so color(2) should be the same as color(0)
        expect(result(2)).toBe('#000')
    })

    it('using d3 categorical scheme', () => {
        const result = createCategoricalScale({
            variant: 'categorical',
            colors: schemeCategory10,
            domain: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        })
        // a few colors to compare - they should be different from each other
        const colors = [result(0), result(2), result(6)]
        expect(colors[0]).not.toEqual(colors[1])
        expect(colors[0]).not.toEqual(colors[2])
        expect(colors[1]).not.toEqual(colors[2])
    })

    it('using d3 sequential scheme with long domain', () => {
        const result = createCategoricalScale({
            variant: 'categorical',
            colors: schemeBlues,
            domain: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        })
        // a few colors to compare - they should be different from each other
        const colors = [result(0), result(3), result(6)]
        expect(colors[0]).not.toEqual(colors[1])
        expect(colors[0]).not.toEqual(colors[2])
        expect(colors[1]).not.toEqual(colors[2])
        expect(rgb(result(0)).blue).toBeGreaterThan(123)
        expect(rgb(result(1)).blue).toBeGreaterThan(123)
    })

    it('using d3 sequential scheme with short domain', () => {
        const result = createCategoricalScale({
            variant: 'categorical',
            colors: schemeBlues,
            size: 6,
            domain: ['a', 'b'],
        })
        expect(result.domain().length).toEqual(2)
        // colors should be mostly red
        expect(rgb(result(0)).red).toBeGreaterThan(123)
        expect(rgb(result(1)).red).toBeGreaterThan(123)
    })

    it('using d3 scheme with fixed size', () => {
        const result = createCategoricalScale({
            variant: 'categorical',
            colors: schemeBlues,
            size: 5,
            domain: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        })
        const colors = [result(0), result(4), result(5)]
        expect(colors[0]).not.toEqual(colors[1])
        // size 5 means result(5) should recycle result from result(0)
        expect(colors[0]).toEqual(colors[2])
    })

    it('using d3 without domain falls back to black', () => {
        const result = createCategoricalScale({
            variant: 'categorical',
            colors: schemeBlues,
            size: 2,
            domain: ['a', 'b'],
        })
        // d3 Blues start with size=3
        // at size=2, createCategoricalScale should fallback to black
        const colors = [result(0), result(1)]
        expect(colors[0]).toEqual('#000')
        expect(colors[0]).toEqual(colors[1])
    })

    it('preserves domain even when domain.length > colors.length', () => {
        const result = createCategoricalScale({
            variant: 'categorical',
            colors: ['#000000', '#ffffff'],
            domain: ['a', 'b', 'c', 'd'],
        })
        expect(result.domain().length).toEqual(4)
    })
})

describe('createSequentialScale', () => {
    it('with custom colors', () => {
        const result = createSequentialScale({
            variant: 'sequential',
            colors: ['#000', '#fff'],
            domain: [0, 10],
        })
        expect(result(0)).toBe('rgb(0, 0, 0)')
        expect(result(10)).toBe('rgb(255, 255, 255)')
    })

    it('with d3 sequential scheme', () => {
        const result = createSequentialScale({
            variant: 'sequential',
            colors: interpolateBlues,
            domain: [0, 10],
        })
        const colors = [result(0), result(5), result(10)]
        expect(colors[0]).not.toEqual(colors[1])
        expect(colors[0]).not.toEqual(colors[2])
        expect(colors[1]).not.toEqual(colors[2])
    })
})

describe('createDivergingScale', () => {
    it('with custom colors', () => {
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

    it('with d3 sequential scheme', () => {
        const result = createDivergingScale({
            variant: 'diverging',
            colors: interpolateBrBG,
            domain: [-10, 0, 10],
        })
        const colors = [result(-10), result(0), result(10)]
        expect(colors[0]).not.toEqual(colors[1])
        expect(colors[0]).not.toEqual(colors[2])
        expect(colors[1]).not.toEqual(colors[2])
    })
})

describe('createThresholdScale', () => {
    it('with two thresholds', () => {
        const result = createThresholdScale({
            variant: 'threshold',
            colors: ['#f00', '#000', '#00f'],
            domain: [0, 1],
        })
        const colors = [result(-1), result(0), result(0.5), result(10)]
        expect(colors[0]).toBe('#f00')
        expect(colors[1]).toBe('#000')
        expect(colors[2]).toBe('#000')
        expect(colors[3]).toBe('#00f')
    })

    it('with three thresholds', () => {
        const result = createThresholdScale({
            variant: 'threshold',
            colors: ['#f00', '#000', '#111', '#00f'],
            domain: [0, 1, 2],
        })
        const colors = [result(-1), result(0.5), result(1.5), result(10)]
        expect(colors[0]).toBe('#f00')
        expect(colors[1]).toBe('#000')
        expect(colors[2]).toBe('#111')
        expect(colors[3]).toBe('#00f')
    })

    it('with d3 scheme', () => {
        const result = createThresholdScale({
            variant: 'threshold',
            colors: schemeCategory10,
            domain: [-1, 0, 1, 2],
        })
        const colors = [result(-2), result(-0.5), result(0.5), result(1.5)]
        expect(colors[0]).not.toEqual(colors[1])
        expect(colors[0]).not.toEqual(colors[2])
        expect(colors[0]).not.toEqual(colors[3])
        expect(colors[1]).not.toEqual(colors[2])
        expect(colors[1]).not.toEqual(colors[3])
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
        expect(result.variant).toEqual('categorical')
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
                colors: interpolateBlues,
                domain: 'auto',
            },
            [0, 20]
        ) as SequentialScaleProps
        expect(result.variant).toEqual('sequential')
        expect(result.domain).toEqual([0, 20])
    })

    it('preserves a custom domain for sequential props', () => {
        const result = createColorScaleProps(
            {
                variant: 'sequential',
                colors: interpolateBlues,
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
                colors: interpolateBlues,
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
        expect(result.variant).toEqual('diverging')
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

    it('creates threshold props', () => {
        const result = createColorScaleProps(
            {
                variant: 'threshold',
                colors: ['#0000ff', '#ffffff', '#ff0000'],
                domain: [0, 1],
            },
            []
        ) as ThresholdScaleProps
        expect(result.variant).toEqual('threshold')
        expect(result.domain).toEqual([0, 1])
    })
})

describe('getTickCoordinates', () => {
    // getTickCoordinates on a color scale is relevant for building legends

    it('get tick coordinates for a color scale', () => {
        const scale = createColorScale({
            variant: 'sequential',
            colors: ['#000', '#fff'],
            domain: [0, 10],
        })
        const result = getTickCoordinates(scale, 3, 0, 100)
        // 3 ticks at start, middle, end of the scale size
        expect(result).toEqual([0, 50, 100])
    })

    it('get tick coordinates for a color scale with negative size', () => {
        const scale = createColorScale({
            variant: 'sequential',
            colors: ['#000', '#fff'],
            domain: [0, 10],
        })
        const result = getTickCoordinates(scale, 3, 0, -100)
        // 3 ticks at [start, middle, end]
        expect(result).toEqual([100, 50, 0])
    })

    it('get tick coordinates for a categorical color scale', () => {
        const scale = createColorScale({
            variant: 'categorical',
            colors: schemeCategory10,
            domain: ['a', 'b', 'c', 'd'],
        })
        const result = getTickCoordinates(scale, 3, 0, 100)
        expect(result).toEqual([])
    })

    it('get tick coordinates for a threshold color scale', () => {
        const scale = createColorScale({
            variant: 'threshold',
            colors: schemeCategory10,
            domain: [0, 0.8, 1],
        })
        const result = getTickCoordinates(scale, 3, 0, 100)
        expect(result).toEqual([0, 80, 100])
    })
})
