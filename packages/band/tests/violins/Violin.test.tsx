import { render } from '@testing-library/react'
import { cloneDeep, sum } from 'lodash'
import { Chart } from '@chsk/core'
import {
    Violin,
    ViolinPreparedDataContextProps,
    isViolinProcessedData,
    useViolinPreparedData,
} from '../../src/violins'
import { mockProcessedData, violinProps } from '../props'
import { GetProcessedData } from '../contexts'

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
})
