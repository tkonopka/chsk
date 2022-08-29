import { ReactNode } from 'react'
import { Chart, Axis, Surface, GridLines } from '@chask/core'
import { Bar, Bars, QuantileProps } from '../src/'
import dataGroups from './dataGroups.json'
import { BarProps } from '../src'
import { generateUniformValues } from './generators'
import { Quantile } from '../src/quantiles/Quantile'

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
        domain: [0, 'auto'],
    },
}

export const ChartDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Surface variant={'inner'} />
        {Story()}
    </Chart>
)

export const ChartBarH0S1Decorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Bar {...commonBarProps} horizontal={false} stacked={true}>
            <GridLines variant={'y'} />
            <Axis variant={'bottom'} />
            <Axis variant={'left'} label={'Values (a.u.)'} />
            {Story()}
        </Bar>
    </Chart>
)

export const ChartHorizontalGroupedBarDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 240]} padding={[60, 60, 60, 60]} style={{ display: 'inline-block' }}>
        <Bar {...commonBarProps} horizontal={true} stacked={false}>
            <GridLines variant={'x'} />
            <Bars />
            <Axis variant={'top'} label={'Values (a.u.)'} />
            <Axis variant={'left'} />
            {Story()}
        </Bar>
    </Chart>
)

export const ChartHorizontalStackedBarDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 240]} padding={[60, 60, 60, 60]} style={{ display: 'inline-block' }}>
        <Bar {...commonBarProps} horizontal={true} stacked={true}>
            <GridLines variant={'x'} />
            <Bars />
            <Axis variant={'top'} label={'Values (a.u.)'} />
            <Axis variant={'left'} />
            {Story()}
        </Bar>
    </Chart>
)

export const ChartWithLegendDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 80, 60]} style={{ display: 'inline-block' }}>
        <Surface variant={'inner'} />
        {Story()}
    </Chart>
)

export const dataRawValues = [
    {
        id: 'alpha',
        x: generateUniformValues(30, [0, 10]),
        y: generateUniformValues(30, [2, 16]),
    },
    {
        id: 'beta',
        x: generateUniformValues(30, [5, 15]),
        y: generateUniformValues(30, [10, 20]),
    },
]

export const commonQuantileProps: Pick<
    QuantileProps,
    'data' | 'keys' | 'scaleIndex' | 'scaleValue'
> = {
    data: dataRawValues,
    keys: ['x', 'y'],
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

export const ChartQuantileHorizontalDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Quantile {...commonQuantileProps} horizontal={false}>
            <GridLines variant={'y'} />
            <Axis variant={'bottom'} />
            <Axis variant={'left'} label={'Values (a.u.)'} />
            {Story()}
        </Quantile>
    </Chart>
)
