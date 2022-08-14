import { roundDecimalPlaces, rad2deg } from '../src'

describe('roundDecimalPlaces', () => {
    it('rounds to 1 decimal place', () => {
        expect(String(roundDecimalPlaces(1.0 / 3, 1))).toBe('0.3')
        expect(String(roundDecimalPlaces(10.0 / 3, 1))).toBe('3.3')
    })

    it('rounds to 3 decimal places', () => {
        expect(String(roundDecimalPlaces(1.0 / 3, 3))).toBe('0.333')
        expect(String(roundDecimalPlaces(100 / 3, 3))).toBe('33.333')
    })

    it('rounds to 0 decimal places', () => {
        expect(String(roundDecimalPlaces(1.0 / 3, 0))).toBe('0')
        expect(String(roundDecimalPlaces(100 / 3, 0))).toBe('33')
    })

    it('rounds to 5 decimal places', () => {
        expect(String(roundDecimalPlaces(1.0 / 3, 5))).toBe('0.33333')
        expect(String(roundDecimalPlaces(100 / 3, 5))).toBe('33.33333')
    })
})

describe('radians and degrees', () => {
    it('simple conversion', () => {
        expect(Math.round(rad2deg(Math.PI))).toEqual(180)
        expect(Math.round(rad2deg(Math.PI / 2))).toEqual(90)
    })
})
