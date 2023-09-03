import { getAccessor, getNumberAccessor } from '../../src/general/accessors'

describe('getAccessor', () => {
    it('create a function to get strings from an object', () => {
        const testdata = { a: 'alpha', b: 20 }
        const result = getAccessor<string>('a')
        expect(result(testdata)).toEqual('alpha')
    })

    it('create a function to get numbers from an object', () => {
        const testdata = { a: 'alpha', b: 20 }
        const result = getAccessor<number>('b')
        expect(result(testdata)).toEqual(20)
    })

    it('create a function to get a custom string from an object', () => {
        const testdata = { a: 'alpha', b: 20 }
        const customFunction = (obj: Record<string, unknown>) => obj['a'] + ' ' + obj['b']
        const result = getAccessor<string>(customFunction)
        expect(result(testdata)).toEqual('alpha 20')
    })
})

describe('getNumberAccessor', () => {
    it('create a function to get numbers from an object', () => {
        const testdata = { a: 'alpha', b: 20 }
        const result = getNumberAccessor('b')
        expect(result(testdata)).toEqual(20)
    })

    it('create a function to get a constant number', () => {
        const testdata = { a: 'alpha', b: 20 }
        const result = getNumberAccessor(123)
        expect(result(testdata)).toEqual(123)
    })

    it('create a function to get a custom string from an object', () => {
        const testdata = { a: 1, b: 2 }
        const customFunction = (obj: Record<string, unknown>) => Number(obj['a']) + Number(obj['b'])
        const result = getNumberAccessor(customFunction)
        expect(result(testdata)).toEqual(3)
    })
})
