import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { BackgroundColorFilter } from '../../src'
import { chartProps } from '../props'

describe('BackgroundColorFilter', () => {
    it('creates a filter', () => {
        render(
            <Chart {...chartProps}>
                <BackgroundColorFilter id={'custom'} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelectorAll('filter')
        expect(result).toHaveLength(1)
    })
})
