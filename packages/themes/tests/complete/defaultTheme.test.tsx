import { defaultTheme } from '../../src/complete'

describe('defaultTheme', () => {
    it('defines styles for svg elements', () => {
        expect(defaultTheme.rect).toHaveProperty('default')
        expect(defaultTheme.line).toHaveProperty('default')
        expect(defaultTheme.path).toHaveProperty('default')
        expect(defaultTheme.circle).toHaveProperty('default')
        expect(defaultTheme.polygon).toHaveProperty('default')
    })
})
