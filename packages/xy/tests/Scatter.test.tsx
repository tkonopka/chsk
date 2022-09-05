import { render, screen } from '@testing-library/react'
import { Chart, Legend, useProcessedData } from '@chask/core'
import {
    Scatter,
    useScatterPreparedData,
    isScatterProcessedData,
    ScatterDataContextProps,
} from '../src/'
import { scatterProps } from './props'

describe('Scatter', () => {
    it('defines processed data', () => {
        const processed: ScatterDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetProcessedData = () => {
            const temp = useProcessedData()
            if (isScatterProcessedData(temp.data)) {
                processed.data = temp.data
                processed.seriesIndexes = temp.seriesIndexes
                processed.keys = temp.keys
            }
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
        let prepared: ScatterDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetPreparedData = () => {
            prepared = useScatterPreparedData()
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

    it('prepares color scale for legend', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <Legend variant={'list'} />
                </Scatter>
            </Chart>
        )
        // dataset has two series, so two colors
        expect(screen.queryAllByRole('legend-item')).toHaveLength(2)
    })
})
