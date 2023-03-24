import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { InsetBorderFilter } from '../../src'
import { chartProps } from '../props'

describe('InsetBorderFilter', () => {
    it('creates a filter', () => {
        render(
            <Chart {...chartProps}>
                <InsetBorderFilter id={'custom'} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelectorAll('filter')
        expect(result).toHaveLength(1)
    })
})
