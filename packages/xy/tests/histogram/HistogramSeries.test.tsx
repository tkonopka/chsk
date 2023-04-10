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
        expect(screen.queryAllByRole('histogram-area')).toHaveLength(1)
        expect(screen.queryAllByRole('histogram-curve')).toHaveLength(1)
    })

    it('creates paths for area only', () => {
        render(
            <Chart>
                <Histogram {...histogramProps}>
                    <HistogramSeries ids={['uniform']} layers={['area']} />
                </Histogram>
            </Chart>
        )
        expect(screen.queryAllByRole('histogram-area')).toHaveLength(1)
        expect(screen.queryAllByRole('histogram-curve')).toHaveLength(0)
    })

    it('skips work when a series id does not exist', () => {
        render(
            <Chart>
                <Histogram {...histogramProps}>
                    <HistogramSeries ids={['non-existent']} layers={['curve']} />
                </Histogram>
            </Chart>
        )
        expect(screen.queryByRole('histogram-curve')).toBeNull()
    })

    it('skips work when layers are empty', () => {
        render(
            <Chart>
                <Histogram {...histogramProps}>
                    <HistogramSeries ids={['non-existent']} layers={[]} />
                </Histogram>
            </Chart>
        )
        expect(screen.getByRole('view-content').querySelectorAll('path')).toHaveLength(0)
    })
})
