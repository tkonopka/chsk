import { render, screen } from '@testing-library/react'
import { cloneProps, Chart, Legend, NumericPositionSpec, X, Y } from '@chsk/core'
import {
    Bar,
    BarDataItem,
    BarPreparedDataContextProps,
    BarPreparedDataItem,
    isBarProcessedData,
    useBarPreparedData,
} from '../../src'
import { barProps, mockProcessedData, mockScales } from '../props'
import { GetScales, GetProcessedData } from '../contexts'

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
        prepared: BarPreparedDataContextProps
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
        let prepared: BarPreparedDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetPreparedData = () => {
            prepared = useBarPreparedData()
            return null
        }
        render(
            <Chart>
                <Bar {...barProps} variant={'grouped'}>
                    <GetPreparedData />
                </Bar>
            </Chart>
        )
        // the dataset has two indexes and three keys
        expect(Object.keys(prepared.seriesIndexes)).toHaveLength(2)
        expect(prepared.data).toHaveLength(2)
        expect(prepared.keys).toHaveLength(3)
        // all bar positions should be different
        const allPositions = getAllPreparedPositions(prepared)
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
        let prepared: BarPreparedDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetPreparedData = () => {
            prepared = useBarPreparedData()
            return null
        }
        render(
            <Chart>
                <Bar {...barProps} variant={'layered'} data={xyzData}>
                    <GetPreparedData />
                </Bar>
            </Chart>
        )
        expect(prepared.data).toHaveLength(1)
        expect(prepared.keys).toHaveLength(3)
        // all bar positions should be equal
        const allPositions = getAllPreparedPositions(prepared)
        allPositions.forEach((a, i) => {
            allPositions.forEach((b, j) => {
                if (i == j) return
                expect(String(a)).toEqual(String(b))
            })
        })
    })

    it('defines prepared data with internal padding (vertical)', () => {
        let prepared1: BarPreparedDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        let prepared2: BarPreparedDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetPreparedData1 = () => {
            prepared1 = useBarPreparedData()
            return null
        }
        const GetPreparedData2 = () => {
            prepared2 = useBarPreparedData()
            return null
        }
        render(
            <Chart>
                <Bar
                    {...barProps}
                    variant={'grouped'}
                    horizontal={false}
                    data={xyzData}
                    paddingInternal={0}
                >
                    <GetPreparedData1 />
                </Bar>
                <Bar
                    {...barProps}
                    variant={'grouped'}
                    horizontal={false}
                    data={xyzData}
                    paddingInternal={0.5}
                >
                    <GetPreparedData2 />
                </Bar>
            </Chart>
        )
        // second set of bars should have narrower bars
        const indexes = [0, 1, 2]
        indexes.map(index => {
            expect(prepared2.data[0].size[index][X]).toBeLessThan(prepared1.data[0].size[index][X])
        })
        // second set of bars should be centered around the same x position
        indexes.map(index => {
            const d1 = prepared1.data[0]
            const x1 = d1.position[index][X] + d1.size[index][X] / 2
            const d2 = prepared2.data[0]
            const x2 = d2.position[index][X] + d2.size[index][X] / 2
            expect(Math.round(x1)).toEqual(Math.round(x2))
        })
    })

    it('defines prepared data with internal padding (horizontal)', () => {
        let prepared1: BarPreparedDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        let prepared2: BarPreparedDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetPreparedData1 = () => {
            prepared1 = useBarPreparedData()
            return null
        }
        const GetPreparedData2 = () => {
            prepared2 = useBarPreparedData()
            return null
        }
        render(
            <Chart>
                <Bar
                    {...barProps}
                    variant={'grouped'}
                    horizontal={true}
                    data={xyzData}
                    paddingInternal={0}
                >
                    <GetPreparedData1 />
                </Bar>
                <Bar
                    {...barProps}
                    variant={'grouped'}
                    horizontal={true}
                    data={xyzData}
                    paddingInternal={0.5}
                >
                    <GetPreparedData2 />
                </Bar>
            </Chart>
        )
        // second set of bars should have narrower bars (in horizontal view, that means small height)
        const indexes = [0, 1, 2]
        indexes.map(index => {
            expect(prepared2.data[0].size[index][Y]).toBeLessThan(prepared1.data[0].size[index][Y])
        })
        // second set of bars should be centered around the same y position
        indexes.map(index => {
            const d1 = prepared1.data[0]
            const y1 = d1.position[index][Y] + d1.size[index][Y] / 2
            const d2 = prepared2.data[0]
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
        let prepared: BarPreparedDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetPreparedData = () => {
            prepared = useBarPreparedData()
            return null
        }
        render(
            <Chart>
                <Bar
                    {...barProps}
                    data={linearData}
                    keys={['value']}
                    scaleIndex={{ variant: 'linear', domain: [0, 6], bandwidth: [0, 1] }}
                >
                    <GetProcessedData value={processed} />
                    <GetPreparedData />
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
