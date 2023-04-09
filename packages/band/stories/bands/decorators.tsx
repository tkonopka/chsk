import { ReactNode } from 'react'
import { Chart, Axis } from '@chsk/core'
import { Bar, Bars, BarProps } from '../../src/'
import dataGroups from '../dataGroups.json'

const barProps: BarProps = {
    variant: 'grouped',
    data: dataGroups,
    keys: ['x', 'y', 'z'],
    scaleIndex: {
        variant: 'band',
        domain: ['alpha', 'beta', 'gamma'],
        padding: 0.2,
    },
    scaleValue: {
        variant: 'linear',
        domain: [0, 'auto'],
    },
    horizontal: true,
}

export const ChartSurfaceDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[60, 60, 60, 60]} style={{ display: 'inline-block' }}>
        <Bar {...barProps}>
            {Story()}
            <Bars />
            <Axis variant={'top'} label={'Values (a.u.)'} />
            <Axis variant={'left'} />
        </Bar>
    </Chart>
)

export const ChartSurfaceNoPointerEventsDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[60, 60, 60, 60]} style={{ display: 'inline-block' }}>
        <Bar {...barProps}>
            {Story()}
            <Bars style={{ pointerEvents: 'none' }} />
            <Axis variant={'top'} label={'Values (a.u.)'} />
            <Axis variant={'left'} />
        </Bar>
    </Chart>
)
