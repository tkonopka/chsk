import { render, screen } from '@testing-library/react'
import { Chart } from '@chask/core'
import { Scatter, ScatterSeries } from '../src'
import { chartProps, scatterProps } from './props'

describe('ScatterSeries', () => {
    it('creates paths for area and curve', () => {
        render(
            <Chart {...chartProps}>
                <Scatter {...scatterProps}>
                    <ScatterSeries series={'quadratic'} layers={['curve', 'area']} />
                </Scatter>
            </Chart>
        )
        const area = screen.getByRole('scatter-area').querySelectorAll('path')
        expect(area).toHaveLength(1)
        const curve = screen.getByRole('scatter-curve').querySelectorAll('path')
        expect(curve).toHaveLength(1)
    })

    it('creates paths for points', () => {
        render(
            <Chart {...chartProps}>
                <Scatter {...scatterProps}>
                    <ScatterSeries series={'quadratic'} layers={['points']} />
                </Scatter>
            </Chart>
        )
        const points = screen.getByRole('scatter-points').querySelectorAll('circle')
        expect(points.length).toBeGreaterThan(2)
    })

    it('skips work when a series id does not exist', () => {
        render(
            <Chart {...chartProps}>
                <Scatter {...scatterProps}>
                    <ScatterSeries series={'non-existent'} layers={['curve']} />
                </Scatter>
            </Chart>
        )
        const result = screen.queryByRole('scatter-series')
        expect(result).toBeNull()
    })
})
