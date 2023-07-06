import { render, screen } from '@testing-library/react'
import { Chart, Axis } from '@chsk/core'
import { Schedule, Schedules } from '../../src'
import { scheduleProps } from '../props'

describe('Schedules', () => {
    it('creates schedule boxes (vertical)', () => {
        render(
            <Chart>
                <Schedule {...scheduleProps}>
                    <Schedules />
                </Schedule>
            </Chart>
        )
        // the data has two groups: alpha and beta
        // index alpha has two intervals, index beta has one interval
        expect(screen.getByRole('view-content').querySelectorAll('rect')).toHaveLength(3)
    })

    it('creates schedule boxes (horizontal)', () => {
        render(
            <Chart>
                <Schedule {...scheduleProps} horizontal={true}>
                    <Schedules />
                </Schedule>
            </Chart>
        )
        const result = screen.getByRole('view-content')
        expect(result.querySelectorAll('rect')).toHaveLength(3)
    })

    it('displays schedule only for specified ids', () => {
        render(
            <Chart>
                <Schedule {...scheduleProps} horizontal={false}>
                    <Schedules ids={['alpha']} />
                    <Axis variant={'bottom'} />
                </Schedule>
            </Chart>
        )
        // the chart should have only intervals for 'alpha'
        const result = screen.getByRole('view-content')
        expect(result.querySelectorAll('rect')).toHaveLength(2)
        // the chart should have an axis ready to display 'alpha' and 'beta'
        const ticks = screen.getAllByRole('tick')
        expect(ticks).toHaveLength(2)
        expect(ticks[0].textContent).toEqual('alpha')
        expect(ticks[1].textContent).toEqual('beta')
    })

    it('skips work in non-schedules context', () => {
        render(
            <Chart>
                <Schedules setRole={true} />
            </Chart>
        )
        expect(screen.getByRole('chart-content').querySelector('schedules')).toBeNull()
    })

    it('displays nothing when ids are empty', () => {
        render(
            <Chart>
                <Schedule {...scheduleProps}>
                    <Schedules ids={[]} />
                </Schedule>
            </Chart>
        )
        expect(screen.getByRole('view-content').querySelectorAll('rect')).toHaveLength(0)
    })

    it('displays nothing when keys are empty', () => {
        render(
            <Chart>
                <Schedule {...scheduleProps}>
                    <Schedules keys={[]} />
                </Schedule>
            </Chart>
        )
        expect(screen.getByRole('view-content').querySelectorAll('rect')).toHaveLength(0)
    })

    it('skips rendering when keys are disabled', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['a', 'b']) }}>
                <Schedule {...scheduleProps}>
                    <Schedules />
                </Schedule>
            </Chart>
        )
        expect(screen.getByRole('view-content').querySelectorAll('rect')).toHaveLength(0)
    })

    it('creates schedules without role', () => {
        render(
            <Chart>
                <Schedule {...scheduleProps} horizontal={true}>
                    <Schedules setRole={false} />
                </Schedule>
            </Chart>
        )
        const result = screen.getByRole('view-content')
        expect(result.querySelectorAll('rect')).toHaveLength(3)
        expect(result.querySelector('schedules')).toBeNull()
    })
})
