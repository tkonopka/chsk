import { isScaleWithDomain } from '../../src'

describe('isScaleWithDomain', () => {
    it('validates band scale with domain', () => {
        const result = isScaleWithDomain({ variant: 'band', domain: ['a', 'b'] })
        expect(result).toBeTruthy()
    })

    it('detects domain is auto and needs filling in', () => {
        const result = isScaleWithDomain({ variant: 'band', domain: 'auto' })
        expect(result).toBeFalsy()
    })

    it('detects domain is empty', () => {
        const result = isScaleWithDomain({ variant: 'band' })
        expect(result).toBeFalsy()
    })

    it('validates linear scale with domain', () => {
        const result = isScaleWithDomain({ variant: 'linear', domain: [0, 20] })
        expect(result).toBeTruthy()
    })

    it('detects linear scale with auto domain', () => {
        const result = isScaleWithDomain({ variant: 'linear', domain: 'auto' })
        expect(result).toBeFalsy()
    })

    it('detects linear scale with part-auto domain', () => {
        const resultA = isScaleWithDomain({ variant: 'linear', domain: [0, 'auto'] })
        expect(resultA).toBeFalsy()
        const resultB = isScaleWithDomain({ variant: 'linear', domain: ['auto', 0] })
        expect(resultB).toBeFalsy()
    })

    it('detects linear scale without domain', () => {
        const result = isScaleWithDomain({ variant: 'linear' })
        expect(result).toBeFalsy()
    })
})
