import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Histogram, HistogramCurve } from '../src/histogram'
import { histogramProps } from './props'

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
        const result = screen.queryByRole('histogram-curve')
        expect(result).toBeNull()
    })

    it('skips rendering when keys are disabled', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['uniform', 'normal']) }}>
                <Histogram {...histogramProps}>
                    <HistogramCurve />
                </Histogram>
            </Chart>
        )
        const result = screen.queryByRole('histogram-curve')
        expect(result).toBeNull()
    })
})
