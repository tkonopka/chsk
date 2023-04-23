import { Schedule, Schedules } from '../../src'
import { ChartDecorator } from '../decorators'
import { commonScheduleProps } from './decorators'

export default {
    title: 'Addons/Band/Schedules/Schedule',
    component: Schedule,
}

export const Default = {
    name: 'default',
    args: {
        ...commonScheduleProps,
        variant: 'default',
        children: <Schedules />,
    },
    decorators: [ChartDecorator],
}

export const Vertical = {
    name: 'vertical',
    args: {
        ...commonScheduleProps,
        horizontal: false,
        children: <Schedules />,
    },
    decorators: [ChartDecorator],
}
