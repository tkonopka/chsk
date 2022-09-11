import {
    createContinuousScale,
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
