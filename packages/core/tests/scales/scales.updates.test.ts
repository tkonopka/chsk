import {
    AxisScaleProps,
    changeDomain,
    createAxisScale,
    fillSize,
    zoomDomain,
} from '../../src/scales'
import { ContinuousScaleProps, NumericScaleProps, expandToSquare } from '../../src/scales'
import { roundDecimalPlaces } from '../../src/general'

describe('fillScaleSize', () => {
    it('adds size to a ScaleProps object', () => {
        const props: Omit<AxisScaleProps, 'size'> = { variant: 'linear', domain: [0, 100] }
        const result = fillSize(props, 200)
        expect(result.size).toEqual(200)
    })
})

describe('zoomDomain', () => {
    it('preserves scale props for unit zoom factor', () => {
        const props: ContinuousScaleProps = { variant: 'linear', domain: [0, 1], size: 100 }
        const scale = createAxisScale(props)
        const result = zoomDomain(props, scale, 1, 50)
        expect(result.size).toEqual(100)
        expect(result.viewDomain).toEqual([0, 1])
    })

    it('zooms out', () => {
        const props: ContinuousScaleProps = { variant: 'linear', domain: [0, 1], size: 100 }
        const scale = createAxisScale(props)
        const result = zoomDomain(props, scale, 0.5, 50)
        expect(result.size).toEqual(100)
        expect(result.viewDomain).toEqual([-0.5, 1.5])
    })

    it('zooms in', () => {
        const props: ContinuousScaleProps = { variant: 'linear', domain: [0, 1], size: 100 }
        const scale = createAxisScale(props)
        const result = zoomDomain(props, scale, 2, 50)
        expect(result.size).toEqual(100)
        expect(result.viewDomain).toEqual([0.25, 0.75])
    })

    it('zooms out, large factor', () => {
        const props: ContinuousScaleProps = { variant: 'linear', domain: [0, 1], size: 100 }
        const scale = createAxisScale(props)
        const result = zoomDomain(props, scale, 0.25, 50)
        expect(result.size).toEqual(100)
        expect(result.viewDomain).toEqual([-1.5, 2.5])
    })

    it('zooms in, large factor', () => {
        const props: ContinuousScaleProps = { variant: 'linear', domain: [0, 1], size: 100 }
        const scale = createAxisScale(props)
        const result = zoomDomain(props, scale, 4, 50)
        expect(result.size).toEqual(100)
        expect(result.viewDomain).toEqual([0.375, 0.625])
    })

    it('zooms out, off-center', () => {
        const props: ContinuousScaleProps = { variant: 'linear', domain: [0, 1], size: 100 }
        const scale = createAxisScale(props)
        const result = zoomDomain(props, scale, 0.5, 100)
        expect(result.size).toEqual(100)
        expect(result.viewDomain).toEqual([0, 2])
    })

    it('zooms in, off-center', () => {
        const props: ContinuousScaleProps = { variant: 'linear', domain: [0, 1], size: 100 }
        const scale = createAxisScale(props)
        const result = zoomDomain(props, scale, 2, 100)
        expect(result.size).toEqual(100)
        expect(result.viewDomain).toEqual([0.75, 1.25])
    })

    it('zooms out, log scale', () => {
        const props: ContinuousScaleProps = { variant: 'log', domain: [1, 10], size: 100 }
        const scale = createAxisScale(props)
        const result = zoomDomain(props, scale, 0.5, 50)
        expect(result.size).toEqual(100)
        expect(result.viewDomain?.[0]).toBeLessThan(1)
        expect(result.viewDomain?.[0]).toBeGreaterThan(0)
        expect(result.viewDomain?.[1]).toBeLessThan(100)
        expect(result.viewDomain?.[1]).toBeGreaterThan(10)
    })

    it('zooms in, log scale', () => {
        const props: ContinuousScaleProps = { variant: 'log', domain: [1, 10], size: 100 }
        const scale = createAxisScale(props)
        const result = zoomDomain(props, scale, 2, 50)
        expect(result.size).toEqual(100)
        expect(result.viewDomain?.[0]).toBeGreaterThan(1)
        expect(result.viewDomain?.[1]).toBeLessThan(10)
    })
})

describe('changeDomain', () => {
    it('adjust domain on a linear scale', () => {
        const props: ContinuousScaleProps = { variant: 'linear', domain: [0, 1], size: 100 }
        const scale = createAxisScale(props)
        const result = changeDomain(props, scale, [50, 90])
        expect(result.size).toEqual(100)
        expect(result.viewDomain).toEqual([0.5, 0.9])
    })

    it('adjust domain on a linear scale, y axis', () => {
        const props: ContinuousScaleProps = { variant: 'linear', domain: [0, 1], size: 100 }
        const scale = createAxisScale(props, 'y')
        const result = changeDomain(props, scale, [50, 90])
        expect(result.size).toEqual(100)
        expect(roundDecimalPlaces(result.viewDomain?.[0] ?? 0, 3)).toEqual(0.1)
        expect(roundDecimalPlaces(result.viewDomain?.[1] ?? 0, 3)).toEqual(0.5)
    })

    it('adjust domain on a log scale', () => {
        const props: ContinuousScaleProps = { variant: 'log', domain: [1, 100], size: 100 }
        const scale = createAxisScale(props)
        const result = changeDomain(props, scale, [20, 40])
        expect(result.size).toEqual(100)
        expect(result.viewDomain?.[0]).toBeGreaterThan(1)
        expect(result.viewDomain?.[0]).toBeLessThan(10)
        expect(result.viewDomain?.[1]).toBeGreaterThan(1)
        expect(result.viewDomain?.[1]).toBeLessThan(10)
    })
})

describe('expandToSquare', () => {
    const getSize = (s: [number, number]) => Math.abs(s[1] - s[0])
    const pixelWidth = (x: NumericScaleProps) => getSize(x.domain) / x.size

    it('leaves square props unchanged', () => {
        const x0: NumericScaleProps = { variant: 'linear', domain: [0, 1], size: 100 }
        const y0: NumericScaleProps = { variant: 'linear', domain: [0, 2], size: 200 }
        expect(pixelWidth(x0)).toEqual(pixelWidth(y0))
        const { x, y } = expandToSquare(x0, y0)
        expect(pixelWidth(x)).toEqual(pixelWidth(y))
        expect(x.domain).toEqual([0, 1])
        expect(y.domain).toEqual([0, 2])
    })

    it('expands x scale', () => {
        const x0: NumericScaleProps = { variant: 'linear', domain: [0, 1], size: 100 }
        const y0: NumericScaleProps = { variant: 'linear', domain: [0, 2], size: 100 }
        expect(pixelWidth(x0)).not.toEqual(pixelWidth(y0))
        const { x, y } = expandToSquare(x0, y0)
        expect(pixelWidth(x)).toEqual(pixelWidth(y))
        expect(x.domain).toEqual([-0.5, 1.5])
        expect(y.domain).toEqual([0, 2])
    })

    it('expands y scale', () => {
        const x0: NumericScaleProps = { variant: 'linear', domain: [0, 2], size: 100 }
        const y0: NumericScaleProps = { variant: 'linear', domain: [1, 2], size: 100 }
        expect(pixelWidth(x0)).not.toEqual(pixelWidth(y0))
        const { x, y } = expandToSquare(x0, y0)
        expect(pixelWidth(x)).toEqual(pixelWidth(y))
        expect(x.domain).toEqual([0, 2])
        expect(y.domain).toEqual([0.5, 2.5])
    })
})
