import { inverseGridTheme } from '../../src/partial'

describe('inverse Grid theme', () => {
    it('defines styles for line and rect', () => {
        expect(inverseGridTheme).toHaveProperty('line')
        expect(inverseGridTheme).toHaveProperty('rect')
    })
})
