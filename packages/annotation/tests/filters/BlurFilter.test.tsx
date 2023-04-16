import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { BlurFilter } from '../../src'
import { chartProps } from '../props'

describe('BlurFilter', () => {
    it('creates a filter', () => {
        render(
            <Chart {...chartProps}>
                <BlurFilter id={'custom'} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelectorAll('filter')
        expect(result).toHaveLength(1)
    })
})
