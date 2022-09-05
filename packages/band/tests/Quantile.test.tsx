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
} from '@chask/core'
import {
    Quantile,
    QuantilePreparedDataContextProps,
    QuantileProcessedDataContextProps,
    isQuantileProcessedData,
    useQuantilePreparedData,
    QuantileProcessedDataItem,
} from '../src'
import { quantileProps, dummyBandScale, dummyLinearScale, dataMissingKeys } from './props'

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
            x: dummyBandScale,
            y: dummyLinearScale,
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
            x: dummyBandScale,
            y: dummyLinearScale,
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
        expect(result[0].data[0]).not.toBeFalsy()
        expect(result[0].data[1]).toBeFalsy()
        // for second id, first key (x) is not defined
        expect(result[1].data[0]).toBeFalsy()
        expect(result[1].data[1]).not.toBeFalsy()
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
})
