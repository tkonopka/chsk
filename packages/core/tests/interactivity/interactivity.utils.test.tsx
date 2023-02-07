import { guessLabel } from '../../src/interactivity'

describe('guessLabel', () => {
    it('uses an available label', () => {
        expect(guessLabel({ id: 'A', label: 'custom' })).toEqual('custom')
    })

    it('combines key and data', () => {
        expect(guessLabel({ id: 'A', key: 'custom', data: 5 })).toEqual('custom: 5')
    })

    it('uses key', () => {
        expect(guessLabel({ id: 'A', key: 'custom' })).toEqual('custom')
    })

    it('falls back to id', () => {
        expect(guessLabel({ id: 'A', a: 1, b: 2 })).toEqual('A')
    })
})
