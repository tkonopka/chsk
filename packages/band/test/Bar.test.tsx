import { render } from '@testing-library/react'
import {
    Chart,
    createBandScale,
    createContinuousScale,
    ScalesContextProps,
    useScales,
} from '@chask/core'
import {
    Bar,
    BarPreparedDataContextProps,
    BarProcessedDataContextProps,
    useBarPreparedData,
    useBarProcessedData,
} from '../src'
import { barProps } from './props'

const dummyBandScale = createBandScale({ domain: ['a'], size: 100 })
const dummyLinearScale = createContinuousScale({
    domain: [0, 10],
    size: 100,
    variant: 'linear',
    axis: 'y',
})

describe('Bar', () => {
    it('defines processed data', () => {
        let processed: BarProcessedDataContextProps = { data: [], seriesIndexes: {} }
        const GetProcessedData = () => {
            processed = useBarProcessedData()
            return null
        }
        render(
            <Chart>
                <Bar {...barProps}>
                    <GetProcessedData />
                </Bar>
            </Chart>
        )
        // the dataset has two indexes
        expect(Object.keys(processed.seriesIndexes)).toHaveLength(2)
        expect(processed.data).toHaveLength(2)
    })

    it('defines prepared data', () => {
        let prepared: BarPreparedDataContextProps = { data: [], seriesIndexes: {} }
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
        // the dataset has two indexes
        expect(Object.keys(prepared.seriesIndexes)).toHaveLength(2)
        expect(prepared.data).toHaveLength(2)
    })

    it('auto-detects scales (vertical)', () => {
        let scales: ScalesContextProps = {
            scaleX: dummyBandScale,
            scaleY: dummyLinearScale,
            horizontal: null,
        }
        const GetScales = () => {
            scales = useScales()
            return null
        }
        render(
            <Chart>
                <Bar
                    {...barProps}
                    stacked={true}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales />
                </Bar>
            </Chart>
        )
        // the dataset has two groups alpha and beta
        // when stacked, the alpha group goes from baseline 0 to top 100
        expect(scales.scaleX.domain()).toEqual(['alpha', 'beta'])
        expect(scales.scaleY.domain()).toEqual([0, 100])
    })

    it('auto-detects scales (horizontal)', () => {
        let scales: ScalesContextProps = {
            scaleX: dummyBandScale,
            scaleY: dummyLinearScale,
            horizontal: null,
        }
        const GetScales = () => {
            scales = useScales()
            return null
        }
        render(
            <Chart>
                <Bar
                    {...barProps}
                    stacked={true}
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
        expect(scales.scaleY.domain()).toEqual(['alpha', 'beta'])
        expect(scales.scaleX.domain()).toEqual([0, 100])
    })
})
