import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Histogram, HistogramSeries } from '../../src/histogram'
import { histogramProps } from './histogram.props'

describe('HistogramSeries', () => {
    it('creates paths for area and curve', () => {
        render(
            <Chart>
                <Histogram {...histogramProps}>
                    <HistogramSeries ids={['uniform']} layers={['curve', 'area']} />
                </Histogram>
            </Chart>
        )
        const area = screen.getByRole('histogram-area').querySelectorAll('path')
        expect(area).toHaveLength(1)
        const curve = screen.getByRole('histogram-curve').querySelectorAll('path')
        expect(curve).toHaveLength(1)
    })

    it('creates paths for area only', () => {
        render(
            <Chart>
                <Histogram {...histogramProps}>
                    <HistogramSeries ids={['uniform']} layers={['area']} />
                </Histogram>
            </Chart>
        )
        const area = screen.getByRole('histogram-area').querySelectorAll('path')
        expect(area).toHaveLength(1)
        const curve = screen.queryAllByRole('histogram-curve')
        expect(curve).toHaveLength(0)
    })

    it('skips work when a series id does not exist', () => {
        render(
            <Chart>
                <Histogram {...histogramProps}>
                    <HistogramSeries ids={['non-existent']} layers={['curve']} />
                </Histogram>
            </Chart>
        )
        const result = screen.queryByRole('histogram-series')
        expect(result).toBeNull()
    })

    it('skips work when layers are empty', () => {
        render(
            <Chart>
                <Histogram {...histogramProps}>
                    <HistogramSeries ids={['non-existent']} layers={[]} />
                </Histogram>
            </Chart>
        )
        const result = screen.queryByRole('histogram-series')
        expect(result).toBeNull()
    })
})
