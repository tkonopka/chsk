import { render, screen } from '@testing-library/react'
import {
    cloneProps,
    Chart,
    Legend,
    NumericPositionSpec,
    X,
    Y,
    PreparedDataContextProps,
} from '@chsk/core'
import {
    Bar,
    BarDataItem,
    BarPreparedDataItem,
    isBarProcessedData,
    useBarPreparedData,
} from '../../src'
import { barProps, mockProcessedData, mockScales } from '../props'
import { GetScales, GetProcessedData } from '../contexts'

const GetPreparedData = ({ value }: { value: PreparedDataContextProps<BarPreparedDataItem> }) => {
    const preparedData = useBarPreparedData()
    value.data = preparedData.data
    value.keys = preparedData.keys
    value.seriesIndexes = preparedData.seriesIndexes
    return null
}

const mockPreparedData: PreparedDataContextProps<BarPreparedDataItem> = {
    data: [],
    seriesIndexes: {},
    keys: [],
}

describe('Bar', () => {
    it('creates a view', () => {
        render(
            <Chart>
                <Bar {...barProps} />
            </Chart>
        )
        const result = screen.getByRole('view-bar')
        expect(result).toBeDefined()
    })

    it('defines processed data', () => {
        const result = cloneProps(mockProcessedData)
        render(
            <Chart>
                <Bar {...barProps}>
                    <GetProcessedData value={result} />
                </Bar>
            </Chart>
        )
        // the dataset has two indexes and three keys
        expect(isBarProcessedData(result.data)).toBeTruthy()
        expect(Object.keys(result.seriesIndexes)).toHaveLength(2)
        expect(result.data).toHaveLength(2)
        expect(result.keys).toHaveLength(3)
    })

    const getAllPreparedPositions = (
        prepared: PreparedDataContextProps<BarPreparedDataItem>
    ): NumericPositionSpec[] => {
        const result: NumericPositionSpec[] = []
        prepared.data.forEach((item: BarPreparedDataItem) =>
            item.position.forEach(position => {
                result.push(position)
            })
        )
        return result
    }

    it('defines prepared data (grouped)', () => {
        const result = cloneProps(mockPreparedData)
        render(
            <Chart>
                <Bar {...barProps} variant={'grouped'}>
                    <GetPreparedData value={result} />
                </Bar>
            </Chart>
        )
        // the dataset has two indexes and three keys
        expect(Object.keys(result.seriesIndexes)).toHaveLength(2)
        expect(result.data).toHaveLength(2)
        expect(result.keys).toHaveLength(3)
        // all bar positions should be different
        const allPositions = getAllPreparedPositions(result)
        allPositions.forEach((a, i) => {
            allPositions.forEach((b, j) => {
                if (i == j) return
                expect(String(a)).not.toEqual(String(b))
            })
        })
    })

    // small dataset used with just three bars
    const xyzData: Array<BarDataItem> = [{ id: 'alpha', label: 'alpha', x: 20, y: 20, z: 20 }]

    it('defines prepared data (layered)', () => {
        const result = cloneProps(mockPreparedData)
        render(
            <Chart>
                <Bar {...barProps} variant={'layered'} data={xyzData}>
                    <GetPreparedData value={result} />
                </Bar>
            </Chart>
        )
        expect(result.data).toHaveLength(1)
        expect(result.keys).toHaveLength(3)
        // all bar positions should be equal
        const allPositions = getAllPreparedPositions(result)
        allPositions.forEach((a, i) => {
            allPositions.forEach((b, j) => {
                if (i == j) return
                expect(String(a)).toEqual(String(b))
            })
        })
    })

    it('defines prepared data with internal padding (vertical)', () => {
        const result1 = cloneProps(mockPreparedData)
        const result2 = cloneProps(mockPreparedData)
        render(
            <Chart>
                <Bar
                    {...barProps}
                    variant={'grouped'}
                    horizontal={false}
                    data={xyzData}
                    paddingInternal={0}
                >
                    <GetPreparedData value={result1} />
                </Bar>
                <Bar
                    {...barProps}
                    variant={'grouped'}
                    horizontal={false}
                    data={xyzData}
                    paddingInternal={0.5}
                >
                    <GetPreparedData value={result2} />
                </Bar>
            </Chart>
        )
        // second set of bars should have narrower bars
        const indexes = [0, 1, 2]
        indexes.map(index => {
            expect(result2.data[0].size[index][X]).toBeLessThan(result1.data[0].size[index][X])
        })
        // second set of bars should be centered around the same x position
        indexes.map(index => {
            const d1 = result1.data[0]
            const x1 = d1.position[index][X] + d1.size[index][X] / 2
            const d2 = result2.data[0]
            const x2 = d2.position[index][X] + d2.size[index][X] / 2
            expect(Math.round(x1)).toEqual(Math.round(x2))
        })
    })

    it('defines prepared data with internal padding (horizontal)', () => {
        const result1 = cloneProps(mockPreparedData)
        const result2 = cloneProps(mockPreparedData)
        render(
            <Chart>
                <Bar
                    {...barProps}
                    variant={'grouped'}
                    horizontal={true}
                    data={xyzData}
                    paddingInternal={0}
                >
                    <GetPreparedData value={result1} />
                </Bar>
                <Bar
                    {...barProps}
                    variant={'grouped'}
                    horizontal={true}
                    data={xyzData}
                    paddingInternal={0.5}
                >
                    <GetPreparedData value={result2} />
                </Bar>
            </Chart>
        )
        // second set of bars should have narrower bars (in horizontal view, that means small height)
        const indexes = [0, 1, 2]
        indexes.map(index => {
            expect(result2.data[0].size[index][Y]).toBeLessThan(result1.data[0].size[index][Y])
        })
        // second set of bars should be centered around the same y position
        indexes.map(index => {
            const d1 = result1.data[0]
            const y1 = d1.position[index][Y] + d1.size[index][Y] / 2
            const d2 = result2.data[0]
            const y2 = d2.position[index][Y] + d2.size[index][Y] / 2
            expect(Math.round(y1)).toEqual(Math.round(y2))
        })
    })

    it('auto-detects scales (vertical)', () => {
        const result = cloneProps(mockScales)
        render(
            <Chart>
                <Bar
                    {...barProps}
                    variant={'stacked'}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales value={result} />
                </Bar>
            </Chart>
        )
        // the dataset has two groups alpha and beta
        // when stacked, the alpha group goes from baseline 0 to top 100
        expect(result.x.domain()).toEqual(['alpha', 'beta'])
        expect(result.y.domain()).toEqual([0, 100])
    })

    it('auto-detects scales (horizontal)', () => {
        const result = cloneProps(mockScales)
        render(
            <Chart>
                <Bar
                    {...barProps}
                    variant={'stacked'}
                    horizontal={true}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales value={result} />
                </Bar>
            </Chart>
        )
        // the dataset has two groups alpha and beta
        // when stacked, the alpha group goes from baseline 0 to top 100
        expect(result.y.domain()).toEqual(['alpha', 'beta'])
        expect(result.x.domain()).toEqual([0, 100])
    })

    it('accepts continuous index scale', () => {
        const linearData = [
            { id: '1', value: 10 },
            { id: '2', value: 50 },
            { id: '5', value: 100 },
        ]
        const processed = cloneProps(mockProcessedData)
        const prepared = cloneProps(mockPreparedData)
        render(
            <Chart>
                <Bar
                    {...barProps}
                    data={linearData}
                    keys={['value']}
                    scaleIndex={{ variant: 'linear', domain: [0, 6], bandwidth: [0, 1] }}
                >
                    <GetProcessedData value={processed} />
                    <GetPreparedData value={prepared} />
                </Bar>
            </Chart>
        )
        expect(isBarProcessedData(processed.data)).toBeTruthy()
        // in svg coordinates, the first bar should be at the left, the last bar should be at the right
        const pos0 = prepared.data[0].position[0]
        const pos2 = prepared.data[2].position[0]
        expect(pos0[X]).toBeLessThan(200)
        expect(pos2[X]).toBeGreaterThan(200)
    })

    it('prepares color scale for legend', () => {
        render(
            <Chart>
                <Bar {...barProps}>
                    <Legend variant={'list'} />
                </Bar>
            </Chart>
        )
        expect(screen.queryAllByRole('legend-item')).toHaveLength(3)
    })

    const dataNegative: Array<BarDataItem> = [
        {
            id: 'alpha',
            x: 50,
            y: 30,
            z: -20,
        },
        {
            id: 'beta',
            x: -60,
            y: -20,
            z: 10,
        },
    ]

    it('auto-detects scales with negative numbers (horizontal)', () => {
        const result = cloneProps(mockScales)
        render(
            <Chart>
                <Bar
                    {...barProps}
                    data={dataNegative}
                    variant={'stacked'}
                    horizontal={true}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales value={result} />
                </Bar>
            </Chart>
        )
        expect(result.x.domain()).toEqual([-80, 80])
    })

    it('auto-detects scales with negative numbers (vertical)', () => {
        const result = cloneProps(mockScales)
        render(
            <Chart>
                <Bar
                    {...barProps}
                    data={dataNegative}
                    variant={'stacked'}
                    horizontal={false}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales value={result} />
                </Bar>
            </Chart>
        )
        expect(result.y.domain()).toEqual([-80, 80])
    })
})
