import { render } from '@testing-library/react'
import { cloneDeep, sum } from 'lodash'
import { Chart } from '@chsk/core'
import {
    Violin,
    ViolinPreparedDataContextProps,
    isViolinProcessedData,
    useViolinPreparedData,
    ViolinProcessedDataItem,
} from '../../src/violins'
import { mockProcessedData, mockScales, violinProps } from '../props'
import { GetProcessedData, GetScales } from '../contexts'

describe('Violin', () => {
    it('defines processed data ', () => {
        const result = cloneDeep(mockProcessedData)
        render(
            <Chart>
                <Violin {...violinProps}>
                    <GetProcessedData value={result} />
                </Violin>
            </Chart>
        )
        expect(isViolinProcessedData(result.data)).toBeTruthy()
        // the dataset has two indexes and two keys
        expect(Object.keys(result.seriesIndexes)).toHaveLength(2)
        expect(result.data).toHaveLength(2)
        expect(result.keys).toHaveLength(2)
    })

    it('defines prepared data', () => {
        let prepared: ViolinPreparedDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetPreparedData = () => {
            prepared = useViolinPreparedData()
            return null
        }
        render(
            <Chart>
                <Violin {...violinProps}>
                    <GetPreparedData />
                </Violin>
            </Chart>
        )
        // the dataset has two indexes and three keys
        expect(Object.keys(prepared.seriesIndexes)).toHaveLength(2)
        expect(prepared.data).toHaveLength(2)
        expect(prepared.keys).toHaveLength(2)
    })

    it('uses a fixed number of breaks', () => {
        let prepared: ViolinPreparedDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetPreparedData = () => {
            prepared = useViolinPreparedData()
            return null
        }
        render(
            <Chart>
                <Violin {...violinProps} breaks={4}>
                    <GetPreparedData />
                </Violin>
            </Chart>
        )
        const dataAlphaX = prepared.data[0].data[0]
        // actual number of breaks is dependent on the data, there might be a few more than specified
        expect(dataAlphaX?.breaks.length).toBeGreaterThan(4)
        expect(dataAlphaX?.breaks.length).toBeLessThan(10)
        // the dataset has several values for each id/key
        expect(dataAlphaX?.n).toBeGreaterThan(3)
        expect(sum(dataAlphaX?.values)).toEqual(dataAlphaX?.n)
    })

    it('uses an array as breaks', () => {
        let prepared: ViolinPreparedDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetPreparedData = () => {
            prepared = useViolinPreparedData()
            return null
        }
        render(
            <Chart>
                <Violin {...violinProps} breaks={[-10, 0, 10, 20, 30]}>
                    <GetPreparedData />
                </Violin>
            </Chart>
        )
        const dataAlphaX = prepared.data[0].data[0]
        expect(dataAlphaX?.breaks.length).toBe(5)
        expect(dataAlphaX?.n).toBeGreaterThan(3)
        expect(sum(dataAlphaX?.values)).toEqual(dataAlphaX?.n)
    })

    it('accepts data in a pre-processed form', () => {
        const preprocessed = [
            {
                id: 'A',
                a: {
                    n: 20,
                    values: [5, 5, 5, 5],
                    breaks: [0, 1, 2, 3, 4],
                },
            },
        ]
        const result = cloneDeep(mockProcessedData)
        render(
            <Chart>
                <Violin data={preprocessed} keys={['a']}>
                    <GetProcessedData value={result} />
                </Violin>
            </Chart>
        )
        expect(isViolinProcessedData(result.data)).toBeTruthy()
        expect(Object.keys(result.seriesIndexes)).toHaveLength(1)
        expect(result.data).toHaveLength(1)
        expect(result.keys).toHaveLength(1)
        const firstItem = result.data[0] as ViolinProcessedDataItem
        expect(JSON.stringify(firstItem)).toContain(JSON.stringify([5, 5, 5, 5]))
    })

    it('skips data in incorrect form', () => {
        const data = [
            {
                id: 'A',
                b: 5,
                c: [1, 2, 3, 4, 5, 6],
            },
        ]
        const result = cloneDeep(mockProcessedData)
        render(
            <Chart>
                <Violin data={data} keys={['a', 'b', 'c']}>
                    <GetProcessedData value={result} />
                </Violin>
            </Chart>
        )
        expect(isViolinProcessedData(result.data)).toBeTruthy()
        expect(Object.keys(result.seriesIndexes)).toHaveLength(1)
        expect(result.data).toHaveLength(1)
        expect(result.keys).toHaveLength(3)
        // first id is A. keys 'a' and 'b' are invalid, key 'c' should lead to a valid processedItem
        const firstItem = result.data[0] as ViolinProcessedDataItem
        expect(firstItem.id).toEqual('A')
        expect(firstItem.data[0]).toBeUndefined()
        expect(firstItem.data[1]).toBeUndefined()
        expect(firstItem.data[2]).not.toBeUndefined()
        expect(firstItem.domain).toEqual([undefined, undefined, [1, 6]])
    })

    it('accepts logarithmic scale', () => {
        const result = cloneDeep(mockScales)
        const data = [{ id: 'A', x: [10, 11] }]
        render(
            <Chart>
                <Violin data={data} keys={['x']} scaleValue={{ variant: 'log' }}>
                    <GetScales value={result} />
                </Violin>
            </Chart>
        )
        expect(result.x.variant).toEqual('band')
        expect(result.y.variant).toEqual('log')
    })
})
