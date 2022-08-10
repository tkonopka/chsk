import { ReactNode } from 'react'
import { Chart, Axis, BackgroundSurface, GridLines } from '@chask/core'
import { Bar } from '../src/'
import dataGroups from './dataGroups.json'
import { BarProps } from '../dist/types'

export const commonBarProps: Pick<BarProps, 'data' | 'keys' | 'scaleIndex' | 'scaleValue'> = {
    data: dataGroups,
    keys: ['x', 'y', 'z'],
    scaleIndex: {
        variant: 'band',
        domain: ['alpha', 'beta'],
        padding: 0.2,
    },
    scaleValue: {
        variant: 'linear',
        min: 0,
        max: 100,
    },
}

export const ChartDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <BackgroundSurface variant={'inner'} />
        {Story()}
    </Chart>
)

export const ChartBarH0S1Decorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Bar
            {...commonBarProps}
            horizontal={false}
            stacked={true}
            scaleValue={{
                variant: 'linear',
                min: 0,
                max: 100,
            }}
        >
            <GridLines variant={'y'} />
            <Axis variant={'bottom'} />
            <Axis variant={'left'} label={'Values (a. u.)'} />
            {Story()}
        </Bar>
    </Chart>
)
