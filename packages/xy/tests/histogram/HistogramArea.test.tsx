import { render, screen } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
import { Histogram, HistogramArea } from '../../src/histogram'
import { histogramProps } from './histogram.props'

describe('HistogramArea', () => {
    it('creates a path', () => {
        render(
            <Chart>
                <Histogram {...histogramProps}>
                    <HistogramArea ids={['normal']} />
                </Histogram>
            </Chart>
        )
        const result = screen.getByRole('histogram-area').querySelectorAll('path')
        expect(result).toHaveLength(1)
    })

    it('skips work when a series id does not exist', () => {
        render(
            <Chart>
                <Histogram {...histogramProps}>
                    <HistogramArea ids={['non-existent']} />
                </Histogram>
            </Chart>
        )
        const result = screen.queryByRole('histogram-area')
        expect(result).toBeNull()
    })

    it('skips rendering when keys are disabled', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['uniform', 'normal']) }}>
                <Histogram {...histogramProps}>
                    <HistogramArea />
                </Histogram>
            </Chart>
        )
        const result = screen.queryByRole('histogram-area')
        expect(result).toBeNull()
    })

    it('skips work in non-histogram context', () => {
        render(
            <Chart>
                <View data={[{ id: 'a' }]}>
                    <HistogramArea />
                </View>
            </Chart>
        )
        expect(screen.queryByRole('histogram-area')).toBeNull()
    })

    it('skips work when scale is not linear', () => {
        render(
            <Chart>
                <View scaleY={{ variant: 'band', domain: ['a', 'b'] }}>
                    <HistogramArea />
                </View>
            </Chart>
        )
        expect(screen.queryByRole('histogram-area')).toBeNull()
    })
})
