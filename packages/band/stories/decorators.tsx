import { ReactNode } from 'react'
import { Chart, Axis, GridLines } from '@chask/core'
import { Bar } from '../src/'
import data from './dataSmall.json'
import { BarProps } from '../dist/types'

export const commonBarProps: Pick<BarProps, 'data' | 'keys' | 'scaleIndex' | 'scaleValue'> = {
    data: data,
    keys: ['x', 'y', 'z'],
    scaleIndex: {
        variant: 'band',
        domain: ['alpha', 'beta'],
        padding: 0.2,
    },
    scaleValue: {
        variant: 'linear',
        min: 0,
        max: 70,
    },
}

export const ChartBarH0S0Decorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Bar {...commonBarProps} horizontal={false} stacked={false}>
            <GridLines variant={'y'} />
            <Axis variant={'bottom'} />
            <Axis variant={'left'} label={'Values (a. u.)'} />
            {Story()}
        </Bar>
    </Chart>
)

export const ChartBarH1S0Decorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Bar {...commonBarProps} horizontal={true} stacked={false}>
            <GridLines variant={'x'} />
            <Axis variant={'bottom'} label={'Values (a. u.)'} />
            <Axis variant={'left'} />
            {Story()}
        </Bar>
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

export const ChartBarH1S1Decorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Bar
            {...commonBarProps}
            horizontal={true}
            stacked={true}
            scaleValue={{
                variant: 'linear',
                min: 0,
                max: 100,
            }}
        >
            <GridLines variant={'x'} />
            <Axis variant={'bottom'} label={'Values (a. u.)'} />
            <Axis variant={'left'} />
            {Story()}
        </Bar>
    </Chart>
)
