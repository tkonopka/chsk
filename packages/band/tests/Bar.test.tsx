import { render, screen } from '@testing-library/react'
import {
    Chart,
    defaultDivergingScale,
    defaultSequentialScale,
    defaultSizeScale,
    Legend,
    ScalesContextProps,
    useProcessedData,
    useScales,
} from '@chask/core'
import {
    Bar,
    BarDataItem,
    BarPreparedDataContextProps,
    BarProcessedDataContextProps,
    isBarProcessedData,
    useBarPreparedData,
} from '../src'
import { barProps, dummyXBandScale, dummyYLinearScale } from './props'

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
        const processed: BarProcessedDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetProcessedData = () => {
            const temp = useProcessedData()
            if (isBarProcessedData(temp.data)) {
                processed.data = temp.data
                processed.keys = temp.keys
                processed.seriesIndexes = temp.seriesIndexes
            }
            return null
        }
        render(
            <Chart>
                <Bar {...barProps}>
                    <GetProcessedData />
                </Bar>
            </Chart>
        )
        // the dataset has two indexes and three keys
        expect(Object.keys(processed.seriesIndexes)).toHaveLength(2)
        expect(processed.data).toHaveLength(2)
        expect(processed.keys).toHaveLength(3)
    })

    it('defines prepared data', () => {
        let prepared: BarPreparedDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetPreparedData = () => {
            prepared = useBarPreparedData()
            return null
        }
        render(
            <Chart>
                <Bar {...barProps}>
                    <GetPreparedData />
                </Bar>
            </Chart>
        )
        // the dataset has two indexes and three keys
        expect(Object.keys(prepared.seriesIndexes)).toHaveLength(2)
        expect(prepared.data).toHaveLength(2)
        expect(prepared.keys).toHaveLength(3)
    })

    it('auto-detects scales (vertical)', () => {
        let scales: ScalesContextProps = {
            x: dummyXBandScale,
            y: dummyYLinearScale,
            size: defaultSizeScale,
            color: defaultSequentialScale,
        }
        const GetScales = () => {
            scales = useScales()
            return null
        }
        render(
            <Chart>
                <Bar
                    {...barProps}
                    variant={'stacked'}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales />
                </Bar>
            </Chart>
        )
        // the dataset has two groups alpha and beta
        // when stacked, the alpha group goes from baseline 0 to top 100
        expect(scales.x.domain()).toEqual(['alpha', 'beta'])
        expect(scales.y.domain()).toEqual([0, 100])
    })

    it('auto-detects scales (horizontal)', () => {
        let scales: ScalesContextProps = {
            x: dummyXBandScale,
            y: dummyYLinearScale,
            size: defaultSizeScale,
            color: defaultDivergingScale,
        }
        const GetScales = () => {
            scales = useScales()
            return null
        }
        render(
            <Chart>
                <Bar
                    {...barProps}
                    variant={'stacked'}
                    horizontal={true}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales />
                </Bar>
            </Chart>
        )
        // the dataset has two groups alpha and beta
        // when stacked, the alpha group goes from baseline 0 to top 100
        expect(scales.y.domain()).toEqual(['alpha', 'beta'])
        expect(scales.x.domain()).toEqual([0, 100])
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
        let scales: ScalesContextProps = {
            x: dummyXBandScale,
            y: dummyYLinearScale,
            size: defaultSizeScale,
            color: defaultDivergingScale,
        }
        const GetScales = () => {
            scales = useScales()
            return null
        }
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
                    <GetScales />
                </Bar>
            </Chart>
        )
        expect(scales.x.domain()).toEqual([-80, 80])
    })

    it('auto-detects scales with negative numbers (vertical)', () => {
        let scales: ScalesContextProps = {
            x: dummyXBandScale,
            y: dummyYLinearScale,
            size: defaultSizeScale,
            color: defaultDivergingScale,
        }
        const GetScales = () => {
            scales = useScales()
            return null
        }
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
                    <GetScales />
                </Bar>
            </Chart>
        )
        expect(scales.y.domain()).toEqual([-80, 80])
    })
})
