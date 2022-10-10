import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Scatter, ScatterSeries } from '../src/scatter'
import { scatterProps } from './props'

describe('ScatterSeries', () => {
    it('creates paths for area and curve', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterSeries ids={['quadratic']} layers={['curve', 'area']} />
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
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterSeries ids={['quadratic']} layers={['points']} />
                </Scatter>
            </Chart>
        )
        const points = screen.getByRole('scatter-points').querySelectorAll('circle')
        expect(points.length).toBeGreaterThan(2)
    })

    it('skips work when a series id does not exist', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterSeries ids={['non-existent']} layers={['curve']} />
                </Scatter>
            </Chart>
        )
        const result = screen.queryByRole('scatter-series')
        expect(result).toBeNull()
    })

    it('skips rendering when keys are disabled', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['linear', 'quadratic']) }}>
                <Scatter {...scatterProps}>
                    <ScatterSeries ids={['non-existent']} layers={['curve']} />
                </Scatter>
            </Chart>
        )
        const result = screen.queryByRole('scatter-series')
        expect(result).toBeNull()
    })
})
