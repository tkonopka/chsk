import { boxedViewTheme } from '../../src/partial'

describe('boxedTheme', () => {
    it('defines styles for svg elements', () => {
        expect(boxedViewTheme).toHaveProperty('rect')
        expect(boxedViewTheme).toHaveProperty('line')
    })

    it('defines styles for chart components', () => {
        expect(boxedViewTheme).toHaveProperty('Axis')
        expect(boxedViewTheme).toHaveProperty('AxisLabel')
        expect(boxedViewTheme).toHaveProperty('Surface')
    })
})
