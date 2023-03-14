import { render, screen } from '@testing-library/react'
import { Chart, Legend, useProcessedData } from '@chsk/core'
import {
    Histogram,
    useHistogramPreparedData,
    isHistogramProcessedData,
    HistogramDataContextProps,
    HistogramProcessedDataItem,
} from '../../src/histogram'
import { histogramProps } from './histogram.props'

describe('Histogram', () => {
    it('defines processed data', () => {
        const processed: HistogramDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetProcessedData = () => {
            const temp = useProcessedData()
            if (isHistogramProcessedData(temp.data)) {
                processed.data = temp.data
                processed.seriesIndexes = temp.seriesIndexes
                processed.keys = temp.keys
            }
            return null
        }
        render(
            <Chart>
                <Histogram {...histogramProps}>
                    <GetProcessedData />
                </Histogram>
            </Chart>
        )
        // the dataset has two series
        expect(Object.keys(processed.seriesIndexes)).toHaveLength(2)
        expect(processed.data).toHaveLength(2)
        // both series should have mean around 0 and sd < 5
        processed.data.map((d: HistogramProcessedDataItem) => {
            expect(Math.abs(d.mean ?? 1000)).toBeLessThan(1)
            expect(Math.abs(d.sd ?? 1000)).toBeLessThan(5)
        })
    })

    it('defines prepared data', () => {
        let prepared: HistogramDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetPreparedData = () => {
            prepared = useHistogramPreparedData()
            return null
        }
        render(
            <Chart>
                <Histogram {...histogramProps}>
                    <GetPreparedData />
                </Histogram>
            </Chart>
        )
        // the dataset has two series
        expect(Object.keys(prepared.seriesIndexes)).toHaveLength(2)
        expect(prepared.data).toHaveLength(2)
    })

    it('prepares color scale for legend', () => {
        render(
            <Chart>
                <Histogram {...histogramProps}>
                    <Legend variant={'list'} />
                </Histogram>
            </Chart>
        )
        // dataset has two series, so two colors
        expect(screen.queryAllByRole('legend-item')).toHaveLength(2)
    })

    it('handles empty data series', () => {
        const emptyData = [
            {
                id: 'non-empty',
                data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            },
            {
                id: 'empty',
                data: [],
            },
        ]
        render(
            <Chart>
                <Histogram {...histogramProps} data={emptyData}>
                    <Legend variant={'list'} />
                </Histogram>
            </Chart>
        )
        // dataset has two series, so two colors
        expect(screen.queryAllByRole('legend-item')).toHaveLength(2)
    })
})
