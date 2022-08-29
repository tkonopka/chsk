import { render } from '@testing-library/react'
import {
    Chart,
    defaultDivergingScale,
    defaultSequentialScale,
    defaultSizeScale,
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
} from '../src'
import { quantileProps, dummyBandScale, dummyLinearScale } from './props'

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
})
