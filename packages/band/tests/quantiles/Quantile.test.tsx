import { render, screen } from '@testing-library/react'
import { cloneProps, Chart, Legend, Scales, PreparedDataContextProps } from '@chsk/core'
import {
    Quantile,
    isQuantileProcessedData,
    useQuantilePreparedData,
    QuantileProcessedDataItem,
    isQuantileProcessedSummary,
    QuantilePreparedDataItem,
} from '../../src/quantiles'
import { quantileProps, dataMissingKeys, mockScales, mockProcessedData } from '../props'
import { GetProcessedData, GetScales } from '../contexts'

describe('Quantile', () => {
    it('defines processed data', () => {
        const result = cloneProps(mockProcessedData)
        render(
            <Chart>
                <Quantile {...quantileProps}>
                    <GetProcessedData value={result} />
                </Quantile>
            </Chart>
        )
        // the dataset has two indexes and two keys
        expect(isQuantileProcessedData(result.data)).toBeTruthy()
        expect(Object.keys(result.seriesIndexes)).toHaveLength(2)
        expect(result.data).toHaveLength(2)
        expect(result.keys).toHaveLength(2)
    })

    it('defines prepared data', () => {
        let prepared: PreparedDataContextProps<QuantilePreparedDataItem> = {
            data: [],
            seriesIndexes: {},
            keys: [],
        }
        const GetPreparedData = () => {
            prepared = useQuantilePreparedData()
            return null
        }
        render(
            <Chart>
                <Quantile {...quantileProps}>
                    <GetPreparedData />
                </Quantile>
            </Chart>
        )
        expect(Object.keys(prepared.seriesIndexes)).toHaveLength(2)
        expect(prepared.data).toHaveLength(2)
        expect(prepared.keys).toHaveLength(2)
    })

    it('auto-detects scales (vertical)', () => {
        const result: Scales = cloneProps(mockScales)
        render(
            <Chart>
                <Quantile
                    {...quantileProps}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales value={result} />
                </Quantile>
            </Chart>
        )
        // the dataset has two groups alpha and beta
        // values are [0, 20] in the manual dataset
        expect(result.x.domain()).toEqual(['alpha', 'beta'])
        expect(result.y.domain()).toEqual([0, 20])
    })

    it('auto-detects scales (horizontal)', () => {
        const result: Scales = cloneProps(mockScales)
        render(
            <Chart>
                <Quantile
                    {...quantileProps}
                    horizontal={true}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales value={result} />
                </Quantile>
            </Chart>
        )
        // the dataset has two groups alpha and beta
        // values are [0, 20] in the manual dataset
        expect(result.y.domain()).toEqual(['alpha', 'beta'])
        expect(result.x.domain()).toEqual([0, 20])
    })

    it('handles missing keys', () => {
        const result = cloneProps(mockProcessedData)
        render(
            <Chart>
                <Quantile {...quantileProps} data={dataMissingKeys} keys={['x', 'y']}>
                    <GetProcessedData value={result} />
                </Quantile>
            </Chart>
        )
        expect(isQuantileProcessedData(result.data)).toBeTruthy()
        const data = result.data as Array<QuantileProcessedDataItem>
        // for first id, first key (x) is defined and second key (y) is not
        expect(data[0]?.data[0]).toBeTruthy()
        expect(data[0]?.data[1]).toBeFalsy()
        // for second id, first key (x) is not defined
        expect(data[1]?.data[0]).toBeFalsy()
        expect(data[1]?.data[1]).toBeTruthy()
    })

    it('computes scales using available keys and ignores missing data', () => {
        const result: Scales = cloneProps(mockScales)
        const data = [{ id: 'alpha', x: [10, 11, 12] }, { id: 'beta' }]
        render(
            <Chart>
                <Quantile
                    data={data}
                    keys={['x', 'y']}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales value={result} />
                </Quantile>
            </Chart>
        )
        expect(result.x.domain()).toEqual(['alpha', 'beta'])
        expect(result.y.domain()).toEqual([10, 12])
    })

    it('accepts logarithmic scale', () => {
        const result = cloneProps(mockScales)
        const data = [{ id: 'A', x: [10, 11] }]
        render(
            <Chart>
                <Quantile data={data} keys={['x']} scaleValue={{ variant: 'log' }}>
                    <GetScales value={result} />
                </Quantile>
            </Chart>
        )
        expect(result.x.variant).toEqual('band')
        expect(result.y.variant).toEqual('log')
    })

    it('prepares color scale for legend', () => {
        render(
            <Chart>
                <Quantile {...quantileProps}>
                    <Legend variant={'list'} />
                </Quantile>
            </Chart>
        )
        expect(screen.queryAllByRole('legend-item')).toHaveLength(2)
    })

    const q5 = [0.05, 0.25, 0.5, 0.75, 0.95]

    it('accepts precomputed quantile values', () => {
        const precomputed = [
            {
                id: 'A',
                x: {
                    n: 20,
                    mean: 15,
                    values: [5, 10, 15, 20, 25],
                    quantiles: q5,
                    extrema: [5, 30],
                    junk: [1, 2, 3],
                },
            },
        ]
        const result = cloneProps(mockProcessedData)
        render(
            <Chart>
                <Quantile data={precomputed} keys={['x']}>
                    <GetProcessedData value={result} />
                </Quantile>
            </Chart>
        )
        expect(isQuantileProcessedData(result.data)).toBeTruthy()
        const data = result.data as Array<QuantileProcessedDataItem>
        expect(isQuantileProcessedSummary(precomputed[0]?.x)).toBeTruthy()
        expect(data[0]?.id).toEqual(precomputed[0]?.id)
        expect(data[0]?.data[0]?.values).toEqual(precomputed[0]?.x.values)
        expect(data[0]?.data[0]?.quantiles).toEqual(precomputed[0]?.x.quantiles)
        expect(JSON.stringify(data[0]?.data[0])).not.toContain('junk')
    })
})
