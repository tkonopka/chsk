import { buttonTheme } from '../../src/pieces'

describe('button theme', () => {
    it('specifies styles for text and path', () => {
        expect(buttonTheme).toHaveProperty('text')
        expect(buttonTheme).toHaveProperty('path')
    })

    it('specifies fill opacity for paths', () => {
        expect(buttonTheme?.path?.['button']?.['fillOpacity']).toBeGreaterThan(0)
    })
})
