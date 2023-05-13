import { render, screen } from '@testing-library/react'
import { cloneDeep } from 'lodash'
import { Chart, Legend } from '@chsk/core'
import {
    Schedule,
    SchedulePreparedDataContextProps,
    isScheduleProcessedData,
    useSchedulePreparedData,
} from '../../src'
import { mockScales, mockProcessedData, scheduleProps } from '../props'
import { GetProcessedData, GetScales } from '../contexts'

describe('Schedule', () => {
    it('defines processed data', () => {
        const result = cloneDeep(mockProcessedData)
        render(
            <Chart>
                <Schedule {...scheduleProps}>
                    <GetProcessedData value={result} />
                </Schedule>
            </Chart>
        )
        // the dataset has two indexes and two keys
        expect(isScheduleProcessedData(result.data)).toBeTruthy()
        expect(Object.keys(result.seriesIndexes)).toHaveLength(2)
        expect(result.data).toHaveLength(2)
        expect(result.keys).toHaveLength(2)
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
        const result = cloneDeep(mockScales)
        render(
            <Chart>
                <Schedule
                    {...scheduleProps}
                    horizontal={false}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales value={result} />
                </Schedule>
            </Chart>
        )
        // the dataset has two groups alpha and beta, values in interval [1, 4]
        expect(result.x.domain()).toEqual(['alpha', 'beta'])
        expect(result.y.domain()).toEqual([1, 4])
    })

    it('auto-detects scales (horizontal)', () => {
        const result = cloneDeep(mockScales)
        render(
            <Chart>
                <Schedule
                    {...scheduleProps}
                    horizontal={true}
                    scaleIndex={{ variant: 'band' }}
                    scaleValue={{ variant: 'linear' }}
                >
                    <GetScales value={result} />
                </Schedule>
            </Chart>
        )
        // the dataset has two groups alpha and beta, values in interval [1, 4]
        expect(result.y.domain()).toEqual(['alpha', 'beta'])
        expect(result.x.domain()).toEqual([1, 4])
    })

    it('omits unnecessary intervals', () => {
        const result = cloneDeep(mockProcessedData)
        render(
            <Chart>
                <Schedule {...scheduleProps} keys={['a']}>
                    <GetProcessedData value={result} />
                </Schedule>
            </Chart>
        )
        // the dataset has keys 'a' and 'b', but prop focuses only on one key 'a'
        expect(result.keys).toEqual(['a'])
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
