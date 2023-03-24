import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { InsetColorFilter } from '../../src'
import { chartProps } from '../props'

describe('InsetColorFilter', () => {
    it('creates a filter', () => {
        render(
            <Chart {...chartProps}>
                <InsetColorFilter id={'custom'} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelectorAll('filter')
        expect(result).toHaveLength(1)
    })
})
