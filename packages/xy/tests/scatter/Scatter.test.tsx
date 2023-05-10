import { render, screen } from '@testing-library/react'
import { Chart, Legend, ProcessedDataContextProps, useProcessedData } from '@chsk/core'
import {
    Scatter,
    useScatterPreparedData,
    isScatterProcessedData,
    ScatterDataContextProps,
} from '../../src'
import { scatterProps } from './scatter.props'

describe('Scatter', () => {
    it('defines processed data', () => {
        const processed: ProcessedDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
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

    it('accepts data with keys', () => {
        const p1 = { x: 1, y: 2, k: 5 }
        const p2 = { x: 2, y: 4, k: 4 }
        const p3 = { x: 4, y: 8, k: 3 }
        const data = [{ id: 'A', data: [p1, p2, p3] }]
        let processed: ProcessedDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetProcessedData = () => {
            processed = useProcessedData()
            return null
        }
        render(
            <Chart>
                <Scatter {...scatterProps} data={data} k={'k'}>
                    <GetProcessedData />
                </Scatter>
            </Chart>
        )
        expect(Object.keys(processed.seriesIndexes)).toHaveLength(1)
        expect(processed.data).toHaveLength(1)
        expect(processed.data[0].k).toEqual([5, 4, 3])
    })
})
