import { render, screen } from '@testing-library/react'
import { cloneDeep } from 'lodash'
import { Chart, Legend } from '@chsk/core'
import {
    Histogram,
    useHistogramPreparedData,
    isHistogramProcessedData,
    HistogramDataContextProps,
    HistogramProcessedDataItem,
} from '../../src/histogram'
import { histogramProps } from './histogram.props'
import { GetProcessedData, mockProcessedData } from '../contexts'

describe('Histogram', () => {
    it('defines processed data', () => {
        const result = cloneDeep(mockProcessedData)
        render(
            <Chart>
                <Histogram {...histogramProps}>
                    <GetProcessedData value={result} />
                </Histogram>
            </Chart>
        )
        expect(isHistogramProcessedData(result.data)).toBeTruthy()
        // the dataset has two series, and each series should have mean around 0 and sd < 5
        expect(Object.keys(result.seriesIndexes)).toHaveLength(2)
        expect(result.data).toHaveLength(2)
        result.data.map(d => {
            const item = d as HistogramProcessedDataItem
            expect(Math.abs(item.mean ?? 1000)).toBeLessThan(1)
            expect(Math.abs(item.sd ?? 1000)).toBeLessThan(5)
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
