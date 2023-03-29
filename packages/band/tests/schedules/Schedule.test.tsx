import { render, screen } from '@testing-library/react'
import {
    Chart,
    defaultDivergingScale,
    defaultSequentialScale,
    defaultSizeScale,
    Legend,
    Scales,
    useProcessedData,
    useScales,
} from '@chsk/core'
import {
    Schedule,
    SchedulePreparedDataContextProps,
    ScheduleProcessedDataContextProps,
    isScheduleProcessedData,
    useSchedulePreparedData,
} from '../../src'
import { scheduleProps, dummyXBandScale, dummyYLinearScale } from '../props'

describe('Schedule', () => {
    it('defines processed data', () => {
        const processed: ScheduleProcessedDataContextProps = {
            data: [],
            seriesIndexes: {},
            keys: [],
        }
        const GetProcessedData = () => {
            const temp = useProcessedData()
            if (isScheduleProcessedData(temp.data)) {
                processed.data = temp.data
                processed.keys = temp.keys
                processed.seriesIndexes = temp.seriesIndexes
            }
            return null
        }
        render(
            <Chart>
                <Schedule {...scheduleProps}>
                    <GetProcessedData />
                </Schedule>
            </Chart>
        )
        // the dataset has two indexes and two keys
        expect(Object.keys(processed.seriesIndexes)).toHaveLength(2)
        expect(processed.data).toHaveLength(2)
        expect(processed.keys).toHaveLength(2)
    })

    it('defines prepared data', () => {
        let prepared: SchedulePreparedDataContextProps = { data: [], seriesIndexes: {}, keys: [] }
        const GetPreparedData = () => {
            prepared = useSchedulePreparedData()
            return null
        }
        render(
            <Chart>
                <Schedule {...scheduleProps}>
                    <GetPreparedData />
                </Schedule>
            </Chart>
        )
        expect(Object.keys(prepared.seriesIndexes)).toHaveLength(2)
        expect(prepared.data).toHaveLength(2)
        expect(prepared.keys).toHaveLength(2)
    })

    it('auto-detects scales (vertical)', () => {
        let scales: Scales = {
            x: dummyXBandScale,
            y: dummyYLinearScale,
            size: defaultSizeScale,
            color: defaultSequentialScale,
        }
        const GetScales = () => {
            scales = useScales().scales
            return null
        }
        render(
            <Chart>
                <Schedule
                    {...scheduleProps}
                    horizontal={false}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales />
                </Schedule>
            </Chart>
        )
        // the dataset has two groups alpha and beta
        // values are [1, 4] in the test dataset
        expect(scales.x.domain()).toEqual(['alpha', 'beta'])
        expect(scales.y.domain()).toEqual([1, 4])
    })

    it('auto-detects scales (horizontal)', () => {
        let scales: Scales = {
            x: dummyXBandScale,
            y: dummyYLinearScale,
            size: defaultSizeScale,
            color: defaultDivergingScale,
        }
        const GetScales = () => {
            scales = useScales().scales
            return null
        }
        render(
            <Chart>
                <Schedule
                    {...scheduleProps}
                    horizontal={true}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales />
                </Schedule>
            </Chart>
        )
        // the dataset has two groups alpha and beta
        // values are [0, 4] in the manual dataset
        expect(scales.y.domain()).toEqual(['alpha', 'beta'])
        expect(scales.x.domain()).toEqual([1, 4])
    })

    it('omits unnecessary intervals', () => {
        let keys: Array<string> = []
        const GetKeys = () => {
            const temp = useProcessedData()
            if (isScheduleProcessedData(temp.data)) keys = temp.keys
            return null
        }
        render(
            <Chart>
                <Schedule {...scheduleProps} keys={['a']}>
                    <GetKeys />
                </Schedule>
            </Chart>
        )
        // the dataset has keys 'a' and 'b', but prop focuses only on one key 'a'
        expect(keys).toHaveLength(1)
    })

    it('prepares color scale for legend', () => {
        render(
            <Chart>
                <Schedule {...scheduleProps}>
                    <Legend variant={'list'} />
                </Schedule>
            </Chart>
        )
        expect(screen.queryAllByRole('legend-item')).toHaveLength(2)
    })
})
