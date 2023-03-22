import { isScaleWithDomain } from '../../src'

describe('isScaleWithDomain', () => {
    it('checks band scale with domain', () => {
        const result = isScaleWithDomain({ variant: 'band', domain: ['a', 'b'] })
        expect(result).toBeTruthy()
    })

    it('checks band scale with auto domain', () => {
        const result = isScaleWithDomain({ variant: 'band', domain: 'auto' })
        expect(result).toBeFalsy()
    })

    it('checks band scale without domain', () => {
        const result = isScaleWithDomain({ variant: 'band' })
        expect(result).toBeFalsy()
    })

    it('checks linear scale with domain', () => {
        const result = isScaleWithDomain({ variant: 'linear', domain: [0, 20] })
        expect(result).toBeTruthy()
    })

    it('checks linear scale with auto domain', () => {
        const result = isScaleWithDomain({ variant: 'linear', domain: 'auto' })
        expect(result).toBeFalsy()
    })

    it('checks linear scale with part-auto domain', () => {
        const resultA = isScaleWithDomain({ variant: 'linear', domain: [0, 'auto'] })
        expect(resultA).toBeFalsy()
        const resultB = isScaleWithDomain({ variant: 'linear', domain: ['auto', 0] })
        expect(resultB).toBeFalsy()
    })

    it('checks linear scale without domain', () => {
        const result = isScaleWithDomain({ variant: 'linear' })
        expect(result).toBeFalsy()
    })
})
