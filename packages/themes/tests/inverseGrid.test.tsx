import { inverseGridTheme } from '../src'

describe('inverse Grid theme', () => {
    it('defines styles for line and rect', () => {
        expect(inverseGridTheme).toHaveProperty('line')
        expect(inverseGridTheme).toHaveProperty('rect')
    })
})
