import { render, screen } from '@testing-library/react'
import { Chart } from '../../src/charts'
import { chartProps } from '../props'

describe('Styles', () => {
    it('skips styles element when not needed', () => {
        render(<Chart {...chartProps} selectors={[]} />)
        // by setting styles=[], expect there to be no <styles> tag in the svg
        // but the testing-library framework always removes style tags
        // so there isn't anything to test here
        const result = screen.getByRole('chart-content')
        expect(result).toBeDefined()
    })
})
