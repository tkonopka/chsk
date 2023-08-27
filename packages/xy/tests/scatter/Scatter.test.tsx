import { render, screen } from '@testing-library/react'
import { cloneProps, Chart, Legend, PreparedDataContextProps } from '@chsk/core'
import { Scatter, ScatterPreparedDataItem, useScatterPreparedData } from '../../src'
import { scatterProps } from './scatter.props'
import { GetProcessedData, GetScales, mockProcessedData, mockScales } from '../contexts'

describe('Scatter', () => {
    it('defines scales', () => {
        const result = cloneProps(mockScales)
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <GetScales value={result} />
                </Scatter>
            </Chart>
        )
        // the dataset has two series, x domain [1, 8] and y domain [1, 64]
        expect(result.color.domain()).toHaveLength(2)
        expect(result.x.domain()).toEqual([0, 8])
        expect(result.y.domain()).toEqual([0, 64])
    })

    it('defines processed data', () => {
        const result = cloneProps(mockProcessedData)
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <GetProcessedData value={result} />
                </Scatter>
            </Chart>
        )
        // the dataset has two series
        expect(Object.keys(result.seriesIndexes)).toHaveLength(2)
        expect(result.data).toHaveLength(2)
    })

    it('defines prepared data', () => {
        let prepared: PreparedDataContextProps<ScatterPreparedDataItem> = {
            data: [],
            seriesIndexes: {},
            keys: [],
        }
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
        const result = cloneProps(mockProcessedData)
        render(
            <Chart>
                <Scatter {...scatterProps} data={data} k={'k'}>
                    <GetProcessedData value={result} />
                </Scatter>
            </Chart>
        )
        expect(Object.keys(result.seriesIndexes)).toHaveLength(1)
        expect(result.data).toHaveLength(1)
        expect(result.data[0]?.k).toEqual([5, 4, 3])
    })

    it('accepts data in data-frame format', () => {
        const data = [
            { id: 'alpha', data: { x: [1, 2, 3], y: [2, 4, 6] } },
            { id: 'beta', data: { x: [1, 2, 3], y: [1, 4, 9] } },
        ]
        const result = cloneProps(mockProcessedData)
        render(
            <Chart>
                <Scatter data={data} x={'x'} y={'y'} autoRescale={false}>
                    <GetProcessedData value={result} />
                </Scatter>
            </Chart>
        )
        expect(Object.keys(result.seriesIndexes)).toHaveLength(2)
        expect(result.data).toHaveLength(2)
        expect(result.data[0]?.x).toEqual([1, 2, 3])
    })
})
