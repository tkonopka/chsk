import { render, screen } from '@testing-library/react'
import { Chart, Legend, useProcessedData } from '@chask/core'
import {
    Histogram,
    useHistogramPreparedData,
    isHistogramProcessedData,
    getBreaksArray,
    binValues,
    HistogramDataItem,
} from '../src/histogram'
import { HistogramDataContextProps } from '../src/histogram'
import { histogramProps } from './props'

describe('Histogram utils', () => {
    // ten values - 6 in bin [0, 5] and 4 in bin [5, 10]
    const tenValues = [1, 2, 2.5, 3, 3.5, 4, 6, 7, 8, 9]

    it('binValues places data into bins', () => {
        // three breakpoints, i.e. two bins [0, 5] and [5, 10]
        // center points of bins should be at 0.25 and 0.75
        const result = binValues(tenValues, [0, 5, 10], false)
        expect(result.length).toEqual(4)
        // middle points convey bins and counts in the bins
        expect(result[1]).toEqual([2.5, 6])
        expect(result[2]).toEqual([7.5, 4])
        // boundary points convey the edges
        expect(result[0]).toEqual([0, 6])
        expect(result[3]).toEqual([10, 4])
    })

    it('binValues estimates densities', () => {
        // three breakpoints, i.e. two bins [0, 5] and [5, 10]
        // center points of bins should be at 0.25 and 0.75
        const result = binValues(tenValues, [0, 5, 10], true)
        expect(result.length).toEqual(4)
        // middle points convey bins and density
        expect(result[1]).toEqual([2.5, 0.6 / 5])
        expect(result[2]).toEqual([7.5, 0.4 / 5])
        // boundary points convey the edges
        expect(result[0]).toEqual([0, 0.6 / 5])
        expect(result[3]).toEqual([10, 0.4 / 5])
    })

    it('getBreaksArray computes reasonable breakpoints', () => {
        const rawData: HistogramDataItem[] = [
            {
                id: 'A',
                data: [0, 2, 4, 6],
            },
            {
                id: 'A',
                data: [-2, 2, 4, 12],
            },
        ]
        const result = getBreaksArray(rawData, 4)
        expect(result.length).toBeGreaterThan(4)
        expect(result[0]).toBeLessThanOrEqual(-2)
        expect(result[result.length - 1]).toBeGreaterThan(12)
    })
})

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
})
