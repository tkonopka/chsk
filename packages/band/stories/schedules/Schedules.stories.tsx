import { Schedules } from '../../src'
import { ChartScheduleDecorator, onSchedulesClick } from './decorators'

export default {
    title: 'Addons/Band/Schedules/Schedules',
    component: Schedules,
}

export const SelectedIds = {
    name: 'selected ids',
    args: {
        ids: ['alpha'],
    },
    decorators: [ChartScheduleDecorator],
}

export const SelectedKeys = {
    name: 'selected keys',
    args: {
        keys: ['x'],
    },
    decorators: [ChartScheduleDecorator],
}

export const MouseClick = {
    name: 'mouse click',
    args: {
        handlers: {
            onClick: onSchedulesClick,
        },
    },
    decorators: [ChartScheduleDecorator],
}
