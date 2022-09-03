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
    Strip,
    StripPreparedDataContextProps,
    StripProcessedDataContextProps,
    isStripProcessedData,
    useStripPreparedData,
    StripProcessedDataItem,
} from '../src/strips'
import { stripProps, dummyBandScale, dummyLinearScale, dataMissingKeys } from './props'

describe('Strip', () => {
    it('defines processed data (variant default)', () => {
        const processed: StripProcessedDataContextProps = {
            data: [],
            seriesIndexes: {},
            keys: [],
        }
        const GetProcessedData = () => {
            const temp = useProcessedData()
            if (isStripProcessedData(temp.data)) {
                processed.data = temp.data
                processed.keys = temp.keys
                processed.seriesIndexes = temp.seriesIndexes
            }
            return null
        }
        render(
            <Chart>
                <Strip {...stripProps} variant={'default'}>
                    <GetProcessedData />
                </Strip>
            </Chart>
        )
        // the dataset has two indexes and two keys
        expect(Object.keys(processed.seriesIndexes)).toHaveLength(2)
        expect(processed.data).toHaveLength(2)
        expect(processed.keys).toHaveLength(2)
        // in default variant, data points will have an internal ordering [0, 1, 2, ...]
        const firstIdData = processed.data[0].data
        expect(firstIdData[0]?.internal).toEqual(firstIdData[1]?.internal)
    })

    it('defines processed data (variant jitter)', () => {
        let processed: Array<StripProcessedDataItem> = []
        const GetProcessedData = () => {
            const temp = useProcessedData()
            if (isStripProcessedData(temp.data)) processed = temp.data
            return null
        }
        render(
            <Chart>
                <Strip {...stripProps} variant={'jitter'}>
                    <GetProcessedData />
                </Strip>
            </Chart>
        )
        // in jitter variant, data points should have a randomized order,
        // i.e. two 11-element arrays for keys 'x' and 'y' are unlikely to be equal
        const firstIdData = processed[0].data
        expect(firstIdData[0]?.internal).not.toEqual(firstIdData[1]?.internal)
    })

    it('defines processed data (variant ascending)', () => {
        let processed: Array<StripProcessedDataItem> = []
        const GetProcessedData = () => {
            const temp = useProcessedData()
            if (isStripProcessedData(temp.data)) processed = temp.data
            return null
        }
        render(
            <Chart>
                <Strip {...stripProps} variant={'ascending'}>
                    <GetProcessedData />
                </Strip>
            </Chart>
        )
        // in ascending mode:
        // data points alpha.x which are ascending in the raw dataset, should be left as-is
        // data points alpha.y, which are decreasing in the raw dataset, should be reversed
        const firstIdData = processed[0].data
        expect(firstIdData[0]?.internal).toEqual(
            Array(11)
                .fill(0)
                .map((v, i) => i)
        )
        expect(firstIdData[1]?.internal).toEqual(
            Array(11)
                .fill(0)
                .map((v, i) => 10 - i)
        )
    })

    it('defines processed data (variant descending)', () => {
        let processed: Array<StripProcessedDataItem> = []
        const GetProcessedData = () => {
            const temp = useProcessedData()
            if (isStripProcessedData(temp.data)) processed = temp.data
            return null
        }
        render(
            <Chart>
                <Strip {...stripProps} variant={'descending'}>
                    <GetProcessedData />
                </Strip>
            </Chart>
        )
        // in descending mode:
        // data points alpha.x, which are ascending in the raw dataset, should be reversed
        // data points alpha.y, which are decreasing in the raw dataset, should be left as is
        const firstIdData = processed[0].data
        expect(firstIdData[0]?.internal).toEqual(
            Array(11)
                .fill(0)
                .map((v, i) => 10 - i)
        )
        expect(firstIdData[1]?.internal).toEqual(
            Array(11)
                .fill(0)
                .map((v, i) => i)
        )
    })

    it('defines prepared data', () => {
        let prepared: StripPreparedDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetPreparedData = () => {
            prepared = useStripPreparedData()
            return null
        }
        render(
            <Chart>
                <Strip {...stripProps}>
                    <GetPreparedData />
                </Strip>
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
                <Strip
                    {...stripProps}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales />
                </Strip>
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
                <Strip
                    {...stripProps}
                    horizontal={true}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales />
                </Strip>
            </Chart>
        )
        // the dataset has two groups alpha and beta
        // values are [0, 20] in the manual dataset
        expect(scales.y.domain()).toEqual(['alpha', 'beta'])
        expect(scales.x.domain()).toEqual([0, 20])
    })

    it('handles missing keys', () => {
        let result: Array<StripProcessedDataItem> = []
        const GetPreparedData = () => {
            const temp = useProcessedData()
            if (isStripProcessedData(temp.data)) result = temp.data
            return null
        }
        render(
            <Chart>
                <Strip {...stripProps} data={dataMissingKeys} keys={['x', 'y']}>
                    <GetPreparedData />
                </Strip>
            </Chart>
        )
        // for first id, first key (x) should have information, second key should not
        expect(result[0].data[0]).not.toBeFalsy()
        expect(result[0].data[1]).toBeFalsy()
        // for second id, first key (x) should not have information
        expect(result[1].data[0]).toBeFalsy()
        expect(result[1].data[1]).not.toBeFalsy()
    })
})
