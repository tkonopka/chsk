import { render, screen } from '@testing-library/react'
import { cloneDeep } from 'lodash'
import { Chart, Legend, Scales } from '@chsk/core'
import {
    Strip,
    StripPreparedDataContextProps,
    isStripProcessedData,
    useStripPreparedData,
    StripProcessedDataItem,
    StripDataItem,
} from '../../src/strips'
import { stripProps, dataMissingKeys, mockScales, mockProcessedData } from '../props'
import { GetProcessedData, GetScales } from '../contexts'

const mockStripPreparedData: StripPreparedDataContextProps = {
    data: [],
    seriesIndexes: {},
    keys: [],
}
const GetStripPreparedData = ({ value }: { value: StripPreparedDataContextProps }) => {
    const preparedData = useStripPreparedData()
    value.data = preparedData.data
    value.seriesIndexes = preparedData.seriesIndexes
    value.keys = preparedData.keys
    return null
}

describe('Strip', () => {
    it('defines processed data (no jitter)', () => {
        const result = cloneDeep(mockProcessedData)
        render(
            <Chart>
                <Strip {...stripProps} jitter={'none'}>
                    <GetProcessedData value={result} />
                </Strip>
            </Chart>
        )
        expect(isStripProcessedData(result.data)).toBeTruthy()
        // the dataset has two indexes and two keys
        expect(Object.keys(result.seriesIndexes)).toHaveLength(2)
        expect(result.data).toHaveLength(2)
        expect(result.keys).toHaveLength(2)
        // in default variant, data points will have an internal ordering [0, 1, 2, ...]
        const data = result.data as Array<StripProcessedDataItem>
        const firstIdData = data[0].data
        expect(firstIdData[0]?.internal).toEqual(firstIdData[1]?.internal)
    })

    it('defines processed data (random jitter)', () => {
        const result = cloneDeep(mockProcessedData)
        render(
            <Chart>
                <Strip {...stripProps} jitter={'random'}>
                    <GetProcessedData value={result} />
                </Strip>
            </Chart>
        )
        expect(isStripProcessedData(result.data)).toBeTruthy()
        const data = result.data as Array<StripProcessedDataItem>
        const firstIdData = data[0].data
        // in jitter variant, data points should have a randomized order,
        // i.e. two 11-element arrays for keys 'x' and 'y' are unlikely to be equal
        expect(firstIdData[0]?.internal).not.toEqual(firstIdData[1]?.internal)
    })

    it('defines processed data (jitter ascending)', () => {
        const result = cloneDeep(mockProcessedData)
        render(
            <Chart>
                <Strip {...stripProps} jitter={'ascending'}>
                    <GetProcessedData value={result} />
                </Strip>
            </Chart>
        )
        expect(isStripProcessedData(result.data)).toBeTruthy()
        const data = result.data as Array<StripProcessedDataItem>
        const firstIdData = data[0].data
        // in ascending mode:
        // data points alpha.x which are ascending in the raw dataset, should be left as-is
        // data points alpha.y, which are decreasing in the raw dataset, should be reversed
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

    it('defines processed data (jitter descending)', () => {
        const result = cloneDeep(mockProcessedData)
        render(
            <Chart>
                <Strip {...stripProps} jitter={'descending'}>
                    <GetProcessedData value={result} />
                </Strip>
            </Chart>
        )
        const data = result.data as Array<StripProcessedDataItem>
        const firstIdData = data[0].data
        // in descending mode:
        // data points alpha.x, which are ascending in the raw dataset, should be reversed
        // data points alpha.y, which are decreasing in the raw dataset, should be left as is
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

    it('defines processed data (jitter middle)', () => {
        const result = cloneDeep(mockProcessedData)
        render(
            <Chart>
                <Strip {...stripProps} jitter={'middle'}>
                    <GetProcessedData value={result} />
                </Strip>
            </Chart>
        )
        const data = result.data as Array<StripProcessedDataItem>
        const firstIdData = data[0].data
        // in middle variant, data points should all be at one internal offset value
        expect(firstIdData[0]?.internal.length).toBeGreaterThan(5)
        expect(new Set(firstIdData[0]?.internal).size).toEqual(1)
    })

    it('defines prepared data', () => {
        const result = cloneDeep(mockStripPreparedData)
        render(
            <Chart>
                <Strip {...stripProps}>
                    <GetStripPreparedData value={result} />
                </Strip>
            </Chart>
        )
        // the dataset has two indexes and three keys
        expect(Object.keys(result.seriesIndexes)).toHaveLength(2)
        expect(result.data).toHaveLength(2)
        expect(result.keys).toHaveLength(2)
    })

    it('defines prepared data for series with 0, 1, more points', () => {
        const specialCases = [
            {
                id: 'zero',
                x: [],
            },
            {
                id: 'one',
                x: [2],
            },
            {
                id: 'two',
                x: [2, 4],
            },
        ]
        const result = cloneDeep(mockStripPreparedData)
        render(
            <Chart>
                <Strip {...stripProps} data={specialCases}>
                    <GetStripPreparedData value={result} />
                </Strip>
            </Chart>
        )
        // the dataset has two indexes and three keys
        expect(Object.keys(result.seriesIndexes)).toHaveLength(3)
        const preparedData = result.data
        expect(preparedData[0].data[0]?.internal).toEqual([])
        // all values should be finite
        expect(preparedData[1].data[0]?.internal[0]).toBeLessThan(1000)
        expect(preparedData[1].data[0]?.value[0]).toBeLessThan(1000)
        expect(preparedData[2].data[0]?.internal[0]).toBeLessThan(1000)
        expect(preparedData[2].data[0]?.value[0]).toBeLessThan(1000)
    })

    it('auto-detects scales (vertical)', () => {
        const result: Scales = cloneDeep(mockScales)
        render(
            <Chart>
                <Strip
                    {...stripProps}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales value={result} />
                </Strip>
            </Chart>
        )
        // the dataset has two groups alpha and beta
        // values are [0, 20] in the manual dataset
        expect(result.x.domain()).toEqual(['alpha', 'beta'])
        expect(result.y.domain()).toEqual([0, 20])
    })

    it('auto-detects scales (horizontal)', () => {
        const result = cloneDeep(mockScales)
        render(
            <Chart>
                <Strip
                    {...stripProps}
                    horizontal={true}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales value={result} />
                </Strip>
            </Chart>
        )
        // the dataset has two groups alpha and beta
        // values are [0, 20] in the manual dataset
        expect(result.y.domain()).toEqual(['alpha', 'beta'])
        expect(result.x.domain()).toEqual([0, 20])
    })

    it('computes scales using available keys and ignores missing data', () => {
        const result = cloneDeep(mockScales)
        const data = [{ id: 'alpha', x: [10, 11, 12] }, { id: 'beta' }]
        render(
            <Chart>
                <Strip
                    data={data}
                    keys={['x', 'y']}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales value={result} />
                </Strip>
            </Chart>
        )
        expect(result.x.domain()).toEqual(['alpha', 'beta'])
        expect(result.y.domain()).toEqual([10, 12])
    })

    it('handles missing keys', () => {
        const result = cloneDeep(mockProcessedData)
        render(
            <Chart>
                <Strip {...stripProps} data={dataMissingKeys} keys={['x', 'y']}>
                    <GetProcessedData value={result} />
                </Strip>
            </Chart>
        )
        const data = result.data as Array<StripProcessedDataItem>
        // for first id, first key (x) should have information, second key should not
        expect(data[0].data[0]).not.toBeFalsy()
        expect(data[0].data[1]).toBeFalsy()
        // for second id, first key (x) should not have information
        expect(data[1].data[0]).toBeFalsy()
        expect(data[1].data[1]).not.toBeFalsy()
    })

    it('accepts logarithmic scale', () => {
        const result = cloneDeep(mockScales)
        const data: Array<StripDataItem> = [{ id: 'A', x: [10, 11] }]
        render(
            <Chart>
                <Strip data={data} keys={['x']} scaleValue={{ variant: 'log' }}>
                    <GetScales value={result} />
                </Strip>
            </Chart>
        )
        expect(result.x.variant).toEqual('band')
        expect(result.y.variant).toEqual('log')
    })

    it('prepares color scale for legend', () => {
        render(
            <Chart>
                <Strip {...stripProps}>
                    <Legend variant={'list'} />
                </Strip>
            </Chart>
        )
        expect(screen.queryAllByRole('legend-item')).toHaveLength(2)
    })
})
