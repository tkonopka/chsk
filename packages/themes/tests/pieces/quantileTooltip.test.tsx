import { quantileTooltipThemePiece } from '../../src'

describe('quantile tooltip theme', () => {
    it('specifies styles for text', () => {
        expect(quantileTooltipThemePiece).toHaveProperty('text')
    })
})
