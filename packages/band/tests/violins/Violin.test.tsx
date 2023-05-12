import { render } from '@testing-library/react'
import { Chart, useProcessedData } from '@chsk/core'
import {
    Violin,
    ViolinPreparedDataContextProps,
    ViolinProcessedDataContextProps,
    isViolinProcessedData,
    useViolinPreparedData,
} from '../../src/violins'
import { violinProps } from '../props'
import { sum } from 'lodash'

describe('Violin', () => {
    it('defines processed data ', () => {
        const processed: ViolinProcessedDataContextProps = {
            data: [],
            seriesIndexes: {},
            keys: [],
        }
        const GetProcessedData = () => {
            const temp = useProcessedData()
            if (isViolinProcessedData(temp.data)) {
                processed.data = temp.data
                processed.keys = temp.keys
                processed.seriesIndexes = temp.seriesIndexes
            }
            return null
        }
        render(
            <Chart>
                <Violin {...violinProps}>
                    <GetProcessedData />
                </Violin>
            </Chart>
        )
        // the dataset has two indexes and two keys
        expect(Object.keys(processed.seriesIndexes)).toHaveLength(2)
        expect(processed.data).toHaveLength(2)
        expect(processed.keys).toHaveLength(2)
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
