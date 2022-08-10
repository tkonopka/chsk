import { render } from '@testing-library/react'
import { Chart } from '@chask/core'
import {
    Bar,
    BarPreparedDataContextProps,
    BarProcessedDataContextProps,
    useBarPreparedData,
    useBarProcessedData,
} from '../src'
import { chartProps, barProps } from './props'

describe('Bar', () => {
    it('defines processed data', () => {
        let data: BarProcessedDataContextProps = { data: [], seriesIndexes: {} }
        const GetProcessedData = () => {
            data = useBarProcessedData()
            return null
        }

        render(
            <Chart {...chartProps}>
                <Bar {...barProps}>
                    <GetProcessedData />
                </Bar>
            </Chart>
        )

        // the dataset has two indexes
        expect(Object.keys(data.seriesIndexes)).toHaveLength(2)
        expect(data.data).toHaveLength(2)
    })

    it('defines prepared data', () => {
        let data: BarPreparedDataContextProps = { data: [], seriesIndexes: {} }
        const GetPreparedData = () => {
            data = useBarPreparedData()
            return null
        }

        render(
            <Chart {...chartProps}>
                <Bar {...barProps}>
                    <GetPreparedData />
                </Bar>
            </Chart>
        )

        // the dataset has two indexes
        expect(Object.keys(data.seriesIndexes)).toHaveLength(2)
        expect(data.data).toHaveLength(2)
    })
})
