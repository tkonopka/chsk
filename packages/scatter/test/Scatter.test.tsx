import { render } from '@testing-library/react'
import { Chart } from '@chask/core'
import { Scatter, useProcessedScatterData, usePreparedScatterData } from '../src'
import { chartProps, scatterProps } from './props'

describe('Scatter', () => {
    it('defines processed data', () => {
        let data: Record<string, unknown> = {}
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

        // the dataset has four series
        expect(data.seriesIds).toHaveLength(4)
        expect(data.data).toHaveLength(4)
    })

    it('defines prepared data', () => {
        let data: Record<string, unknown> = {}
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

        // the dataset has four series
        expect(data.seriesIds).toHaveLength(4)
        expect(data.data).toHaveLength(4)
    })
})
