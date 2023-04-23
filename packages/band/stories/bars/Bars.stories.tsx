import { Chart, Axis, GridLines, Tooltip } from '@chsk/core'
import { Bar, Bars } from '../../src'
import { ChartBarH0S1Decorator, commonBarProps, onBarsClick } from './decorators'

export default {
    title: 'Addons/Band/Bars/Bars',
    component: Bars,
}

export const SelectedIds = {
    name: 'selected ids',
    args: {
        ids: ['alpha'],
        style: {
            strokeWidth: 1,
            stroke: '#222222',
        },
    },
    decorators: [ChartBarH0S1Decorator],
}

export const SelectedKeys = {
    name: 'selected keys',
    args: {
        keys: ['x', 'z'],
        style: {
            strokeWidth: 1,
            stroke: '#222222',
        },
    },
    decorators: [ChartBarH0S1Decorator],
}

export const MouseClick = {
    name: 'mouse click',
    args: {
        handlers: {
            onClick: onBarsClick,
        },
    },
    decorators: [ChartBarH0S1Decorator],
}

export const StyleModifiers = {
    name: 'style modifiers',
    args: {
        modifiers: {
            onMouseEnter: {
                strokeWidth: 3,
                stroke: '#222222',
            },

            onMouseLeave: {},
        },
    },
    decorators: [ChartBarH0S1Decorator],
}

export const WithTooltip = {
    render: () => (
        <Chart
            size={[400, 300]}
            style={{
                display: 'inline-block',
            }}
        >
            <Bar {...commonBarProps} horizontal={false} variant={'stacked'}>
                <GridLines variant={'y'} />
                <Axis variant={'bottom'} />
                <Axis variant={'left'} label={'Values (a.u.)'} />
                <Bars />
                <Tooltip />
            </Bar>
        </Chart>
    ),

    name: 'tooltip',
}
