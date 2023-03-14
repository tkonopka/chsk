import { render, screen } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
import { Histogram, HistogramCurve } from '../../src/histogram'
import { histogramProps } from './histogram.props'

describe('HistogramCurve', () => {
    it('creates a path', () => {
        render(
            <Chart>
                <Histogram {...histogramProps}>
                    <HistogramCurve ids={['uniform']} />
                </Histogram>
            </Chart>
        )
        const result = screen.getByRole('histogram-curve').querySelectorAll('path')
        expect(result).toHaveLength(1)
    })

    it('skips work when a series id does not exist', () => {
        render(
            <Chart>
                <Histogram {...histogramProps}>
                    <HistogramCurve ids={['non-existent']} />
                </Histogram>
            </Chart>
        )
        expect(screen.queryByRole('histogram-curve')).toBeNull()
    })

    it('skips rendering when keys are disabled', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['uniform', 'normal']) }}>
                <Histogram {...histogramProps}>
                    <HistogramCurve />
                </Histogram>
            </Chart>
        )
        expect(screen.queryByRole('histogram-curve')).toBeNull()
    })

    it('skips work in non-histogram context', () => {
        render(
            <Chart>
                <View data={[{ id: 'a' }]}>
                    <HistogramCurve />
                </View>
            </Chart>
        )
        expect(screen.queryByRole('histogram-curve')).toBeNull()
    })
})
