import { render, screen } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
import { Histogram, HistogramBars } from '../../src/histogram'
import { histogramProps } from './histogram.props'

describe('HistogramBars', () => {
    it('creates a set of bars', () => {
        render(
            <Chart>
                <Histogram {...histogramProps} breaks={8}>
                    <HistogramBars ids={['normal']} />
                </Histogram>
            </Chart>
        )
        expect(screen.queryByRole('histogram-bars-presence')).not.toBeNull()
        expect(screen.getByRole('view-content').querySelectorAll('rect').length).toBeGreaterThan(1)
        expect(screen.getAllByRole('histogram-bar').length).toBeGreaterThan(1)
    })

    it('skips work when a series id does not exist', () => {
        render(
            <Chart>
                <Histogram {...histogramProps}>
                    <HistogramBars ids={['non-existent']} />
                </Histogram>
            </Chart>
        )
        expect(screen.queryByRole('histogram-bars-presence')).toBeNull()
    })

    it('skips rendering when keys are disabled', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['uniform', 'normal']) }}>
                <Histogram {...histogramProps}>
                    <HistogramBars />
                </Histogram>
            </Chart>
        )
        expect(screen.queryByRole('histogram-bars-presence')).toBeNull()
    })

    it('skips work in non-histogram context', () => {
        render(
            <Chart>
                <View data={[{ id: 'a' }]}>
                    <HistogramBars />
                </View>
            </Chart>
        )
        expect(screen.queryByRole('histogram-bars-presence')).toBeNull()
    })

    it('skips work when scale is not linear', () => {
        render(
            <Chart>
                <View scaleY={{ variant: 'band', domain: ['a', 'b'] }}>
                    <HistogramBars />
                </View>
            </Chart>
        )
        expect(screen.queryByRole('histogram-bars-presence')).toBeNull()
    })
})
