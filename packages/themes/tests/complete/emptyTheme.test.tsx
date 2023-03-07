import { emptyTheme } from '../../src/complete'

describe('emptyTheme', () => {
    it('does not define styles for svg elements', () => {
        expect(emptyTheme.rect).toEqual({})
        expect(emptyTheme.path).toEqual({})
        expect(emptyTheme.line).toEqual({})
        expect(emptyTheme.circle).toEqual({})
        expect(emptyTheme.polygon).toEqual({})
    })
})
