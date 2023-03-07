import { tooltipItemLabelValueTheme } from '../../src/pieces'

describe('quantile tooltip theme', () => {
    it('specifies styles for text', () => {
        expect(tooltipItemLabelValueTheme).toHaveProperty('text')
    })
})
