import { Schedule, ScheduleInteractiveDataItem, ScheduleProps } from '../../src'
import { ReactNode } from 'react'
import { Axis, Chart, GridLines } from '@chsk/core'
import dataSchedules from '../dataSchedules.json'

export const commonScheduleProps: ScheduleProps = {
    data: dataSchedules,
    keys: ['x', 'y', 'z'],
    scaleIndex: {
        variant: 'band',
        domain: ['alpha', 'beta'],
        padding: 0.2,
    },
    scaleValue: {
        variant: 'linear',
        domain: [0, 'auto'],
    },
}

export const ChartScheduleDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Schedule {...commonScheduleProps} horizontal={false}>
            <GridLines variant={'y'} />
            <Axis variant={'bottom'} />
            <Axis variant={'left'} label={'Values (a.u.)'} />
            {Story()}
        </Schedule>
    </Chart>
)

export const onSchedulesClick = (data: ScheduleInteractiveDataItem) => {
    console.log('clicked: ' + JSON.stringify(data))
}
