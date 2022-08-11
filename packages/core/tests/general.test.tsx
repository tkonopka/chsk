import { getAccessor } from '../src/general'

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
        type TestType = {
            a: string
            b: number
        }
        const testdata: TestType = { a: 'alpha', b: 20 }
        const customFunction = (obj: Record<string, unknown>) => obj.a + ' ' + obj.b
        const result = getAccessor<string>(customFunction)
        expect(result(testdata)).toEqual('alpha 20')
    })
})
