import { render } from '@testing-library/react'
import { Chart } from '@chask/core'
import { Scatter, useProcessedScatterData, usePreparedScatterData } from '../src/scatter'
import { scatterProps } from './props'
import { ScatterDataContextProps } from '../src/scatter'

describe('Scatter', () => {
    it('defines processed data', () => {
        let processed: ScatterDataContextProps = { data: [], seriesIndexes: {} }
        const GetProcessedData = () => {
            processed = useProcessedScatterData()
            return null
        }
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <GetProcessedData />
                </Scatter>
            </Chart>
        )
        // the dataset has two series
        expect(Object.keys(processed.seriesIndexes)).toHaveLength(2)
        expect(processed.data).toHaveLength(2)
    })

    it('defines prepared data', () => {
        let prepared: ScatterDataContextProps = { data: [], seriesIndexes: {} }
        const GetPreparedData = () => {
            prepared = usePreparedScatterData()
            return null
        }
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <GetPreparedData />
                </Scatter>
            </Chart>
        )
        // the dataset has two series
        expect(Object.keys(prepared.seriesIndexes)).toHaveLength(2)
        expect(prepared.data).toHaveLength(2)
    })
})