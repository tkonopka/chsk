import { render } from '@testing-library/react'
import { Chart } from '@chask/core'
import { Scatter, useProcessedScatterData, usePreparedScatterData } from '../src/scatter'
import { chartProps, scatterProps } from './props'
import { ScatterDataContextProps } from '../src/scatter'

describe('Scatter', () => {
    it('defines processed data', () => {
        let data: ScatterDataContextProps = { data: [], seriesIndexes: {} }
        const GetProcessedData = () => {
            data = useProcessedScatterData()
            return null
        }

        render(
            <Chart {...chartProps}>
                <Scatter {...scatterProps}>
                    <GetProcessedData />
                </Scatter>
            </Chart>
        )

        // the dataset has two series
        expect(Object.keys(data.seriesIndexes)).toHaveLength(2)
        expect(data.data).toHaveLength(2)
    })

    it('defines prepared data', () => {
        let data: ScatterDataContextProps = { data: [], seriesIndexes: {} }
        const GetPreparedData = () => {
            data = usePreparedScatterData()
            return null
        }

        render(
            <Chart {...chartProps}>
                <Scatter {...scatterProps}>
                    <GetPreparedData />
                </Scatter>
            </Chart>
        )

        // the dataset has two series
        expect(Object.keys(data.seriesIndexes)).toHaveLength(2)
        expect(data.data).toHaveLength(2)
    })
})
