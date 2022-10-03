import { boxedTheme } from '../src'

describe('boxedTheme', () => {
    it('defines styles for svg elements', () => {
        expect(boxedTheme).toHaveProperty('rect')
        expect(boxedTheme).toHaveProperty('line')
    })

    it('defines styles for chask components', () => {
        expect(boxedTheme).toHaveProperty('Axis')
        expect(boxedTheme).toHaveProperty('AxisLabel')
        expect(boxedTheme).toHaveProperty('Surface')
    })
})
