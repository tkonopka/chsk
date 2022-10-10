import { render, screen } from '@testing-library/react'
import {
    Chart,
    defaultDivergingScale,
    defaultSequentialScale,
    defaultSizeScale,
    Legend,
    ScalesContextProps,
    useProcessedData,
    useScales,
} from '@chsk/core'
import {
    Quantile,
    QuantilePreparedDataContextProps,
    QuantileProcessedDataContextProps,
    isQuantileProcessedData,
    useQuantilePreparedData,
    QuantileProcessedDataItem,
    isQuantileProcessedSummary,
} from '../src'
import { quantileProps, dummyXBandScale, dummyYLinearScale, dataMissingKeys } from './props'

describe('Quantile', () => {
    it('defines processed data', () => {
        const processed: QuantileProcessedDataContextProps = {
            data: [],
            seriesIndexes: {},
            keys: [],
        }
        const GetProcessedData = () => {
            const temp = useProcessedData()
            if (isQuantileProcessedData(temp.data)) {
                processed.data = temp.data
                processed.keys = temp.keys
                processed.seriesIndexes = temp.seriesIndexes
            }
            return null
        }
        render(
            <Chart>
                <Quantile {...quantileProps}>
                    <GetProcessedData />
                </Quantile>
            </Chart>
        )
        // the dataset has two indexes and two keys
        expect(Object.keys(processed.seriesIndexes)).toHaveLength(2)
        expect(processed.data).toHaveLength(2)
        expect(processed.keys).toHaveLength(2)
    })

    it('defines prepared data', () => {
        let prepared: QuantilePreparedDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
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
        // the dataset has two indexes and three keys
        expect(Object.keys(prepared.seriesIndexes)).toHaveLength(2)
        expect(prepared.data).toHaveLength(2)
        expect(prepared.keys).toHaveLength(2)
    })

    it('auto-detects scales (vertical)', () => {
        let scales: ScalesContextProps = {
            x: dummyXBandScale,
            y: dummyYLinearScale,
            size: defaultSizeScale,
            color: defaultSequentialScale,
        }
        const GetScales = () => {
            scales = useScales()
            return null
        }
        render(
            <Chart>
                <Quantile
                    {...quantileProps}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales />
                </Quantile>
            </Chart>
        )
        // the dataset has two groups alpha and beta
        // values are [0, 20] in the manual dataset
        expect(scales.x.domain()).toEqual(['alpha', 'beta'])
        expect(scales.y.domain()).toEqual([0, 20])
    })

    it('auto-detects scales (horizontal)', () => {
        let scales: ScalesContextProps = {
            x: dummyXBandScale,
            y: dummyYLinearScale,
            size: defaultSizeScale,
            color: defaultDivergingScale,
        }
        const GetScales = () => {
            scales = useScales()
            return null
        }
        render(
            <Chart>
                <Quantile
                    {...quantileProps}
                    horizontal={true}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales />
                </Quantile>
            </Chart>
        )
        // the dataset has two groups alpha and beta
        // values are [0, 20] in the manual dataset
        expect(scales.y.domain()).toEqual(['alpha', 'beta'])
        expect(scales.x.domain()).toEqual([0, 20])
    })

    it('handles missing keys', () => {
        let result: Array<QuantileProcessedDataItem> = []
        const GetProcessedData = () => {
            const temp = useProcessedData()
            if (isQuantileProcessedData(temp.data)) result = temp.data
            return null
        }
        render(
            <Chart>
                <Quantile {...quantileProps} data={dataMissingKeys} keys={['x', 'y']}>
                    <GetProcessedData />
                </Quantile>
            </Chart>
        )
        // for first id, first key (x) is defined and second key (y) is not
        expect(result[0].data[0]).toBeTruthy()
        expect(result[0].data[1]).toBeFalsy()
        // for second id, first key (x) is not defined
        expect(result[1].data[0]).toBeFalsy()
        expect(result[1].data[1]).toBeTruthy()
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
                    values: [5, 10, 15, 20, 25],
                    quantiles: q5,
                    extrema: [5, 30],
                    junk: [1, 2, 3],
                },
            },
        ]
        let result: Array<QuantileProcessedDataItem> = []
        const GetProcessedData = () => {
            const temp = useProcessedData()
            if (isQuantileProcessedData(temp.data)) result = temp.data
            return null
        }
        render(
            <Chart>
                <Quantile data={precomputed} keys={['x']}>
                    <GetProcessedData />
                </Quantile>
            </Chart>
        )
        expect(isQuantileProcessedSummary(precomputed[0].x)).toBeTruthy()
        expect(result[0].id).toEqual(precomputed[0].id)
        expect(result[0].data[0]?.values).toEqual(precomputed[0].x.values)
        expect(result[0].data[0]?.quantiles).toEqual(precomputed[0].x.quantiles)
        expect(JSON.stringify(result[0].data[0])).not.toContain('junk')
    })
})
