import { render, screen } from '@testing-library/react'
import { Chart } from '@chask/core'
import { Scatter, ScatterSeries } from '../src'
import { chartProps, scatterProps } from './props'

describe('ScatterSeries', () => {
    it('creates a series of circles', () => {
        render(
            <Chart {...chartProps}>
                <Scatter {...scatterProps}>
                    <ScatterSeries series={'linear'} />
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-series').querySelectorAll('circle')
        expect(result).toHaveLength(7)
    })

    it('skips work when a series id does not exist', () => {
        render(
            <Chart {...chartProps}>
                <Scatter {...scatterProps}>
                    <ScatterSeries series={'non-existent'} />
                </Scatter>
            </Chart>
        )
        const result = screen.queryByRole('scatter-series')
        expect(result).toBeNull()
    })
})
