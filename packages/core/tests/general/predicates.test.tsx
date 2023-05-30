import { isArray, isString, isNumber } from '../../src/general/predicates'

describe('isArray', () => {
    it('detects arrays', () => {
        expect(isArray([])).toBeTruthy()
        expect(isArray([1, 2, 3])).toBeTruthy()
        expect(isArray(['a', 'b'])).toBeTruthy()
    })

    it('rejects primitives', () => {
        expect(isArray(5)).toBeFalsy()
        expect(isArray('a')).toBeFalsy()
    })

    it('rejects objects', () => {
        expect(isArray({ a: [1, 2, 3] })).toBeFalsy()
    })

    it('rejects special values', () => {
        expect(isArray(null)).toBeFalsy()
        expect(isArray(undefined)).toBeFalsy()
    })
})

describe('isString and isNumber', () => {
    it('detects strings', () => {
        expect(isString('')).toBeTruthy()
        expect(isString('a')).toBeTruthy()
    })

    it('rejects non-strings', () => {
        expect(isString(5)).toBeFalsy()
        expect(isString({ a: [1, 2, 3] })).toBeFalsy()
        expect(isString(null)).toBeFalsy()
        expect(isString(undefined)).toBeFalsy()
    })

    it('detects numbers', () => {
        expect(isNumber(5)).toBeTruthy()
        expect(isNumber(-5)).toBeTruthy()
        expect(isNumber(2.1)).toBeTruthy()
        expect(isNumber(0)).toBeTruthy()
    })

    it('rejects non-numbers', () => {
        expect(isNumber('5')).toBeFalsy()
        expect(isNumber([1, 2, 3])).toBeFalsy()
        expect(isNumber(null)).toBeFalsy()
        expect(isNumber(undefined)).toBeFalsy()
    })
})
