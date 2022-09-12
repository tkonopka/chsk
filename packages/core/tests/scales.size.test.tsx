import {
    createContinuousScale,
    createSizeScaleProps,
    isAxisScale,
    isColorScale,
    isBandAxisScale,
    isContinuousAxisScale,
    isSqrtAxisScale,
} from '../src/scales'

describe('createContinuousScale', () => {
    it('creates a size scale', () => {
        const result = createContinuousScale({
            variant: 'sqrt',
            domain: [0, 100],
            size: 100,
        })
        expect(isAxisScale(result)).toBeTruthy()
        expect(isColorScale(result)).toBeFalsy()
        expect(isBandAxisScale(result)).toBeFalsy()
        expect(isSqrtAxisScale(result)).toBeTruthy()
        expect(isContinuousAxisScale(result)).toBeTruthy()
    })
})

describe('createSizeScaleProps', () => {
    it('creates size props (auto)', () => {
        const result = createSizeScaleProps(
            {
                variant: 'sqrt',
                domain: 'auto',
                size: 'auto',
            },
            100,
            20
        )
        expect(result.domain).toEqual([0, 100])
        expect(result.size).toEqual(20)
    })

    it('creates size props (semi-automatic)', () => {
        const result = createSizeScaleProps(
            {
                variant: 'sqrt',
                domain: [0, 'auto'],
                size: 'auto',
            },
            100,
            20
        )
        expect(result.domain).toEqual([0, 100])
        expect(result.size).toEqual(20)
    })

    it('preserves custom settings', () => {
        const result = createSizeScaleProps(
            {
                variant: 'sqrt',
                domain: [0, 200],
                size: 15,
            },
            100,
            20
        )
        expect(result.domain).toEqual([0, 200])
        expect(result.size).toEqual(15)
    })
})
