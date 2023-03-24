import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { InsetShadowFilter } from '../../src'
import { chartProps } from '../props'

describe('InsetShadowFilter', () => {
    it('creates a filter', () => {
        render(
            <Chart {...chartProps}>
                <InsetShadowFilter id={'custom'} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelectorAll('filter')
        expect(result).toHaveLength(1)
    })
})
