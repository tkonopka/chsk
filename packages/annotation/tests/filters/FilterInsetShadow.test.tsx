import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { FilterInsetShadow } from '../../src'
import { chartProps } from '../props'

describe('FilterInsetShadow', () => {
    it('creates a filter', () => {
        render(
            <Chart {...chartProps}>
                <FilterInsetShadow id={'custom'} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelectorAll('filter')
        expect(result).toHaveLength(1)
    })
})
