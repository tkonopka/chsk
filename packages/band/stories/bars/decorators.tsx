import { ReactNode } from 'react'
import { Axis, AxisTicks, Chart, GridLines, Surface } from '@chsk/core'
import { Bar, BarInteractiveDataItem, BarProps, Bars } from '../../src'
import dataGroups from '../dataGroups.json'

export const commonBarProps: BarProps = {
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

export const barsLabelsData = [
    { id: 'alpha', value: 85 },
    { id: 'beta', value: 60 },
    { id: 'gamma', value: 50 },
    { id: 'delta', value: 25 },
    { id: 'epsilon', value: 5 },
]

export const ChartWithLegendDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 80, 60]} style={{ display: 'inline-block' }}>
        <Surface variant={'inner'} />
        {Story()}
    </Chart>
)

export const ChartBarH0S1Decorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Bar {...commonBarProps} horizontal={false} variant={'stacked'}>
            <GridLines variant={'y'} />
            <Axis variant={'bottom'} />
            <Axis variant={'left'} label={'Values (a.u.)'} />
            {Story()}
        </Bar>
    </Chart>
)

export const ChartHorizontalGroupedBarDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 240]} padding={[60, 60, 60, 60]} style={{ display: 'inline-block' }}>
        <Bar {...commonBarProps} horizontal={true} variant={'grouped'}>
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
        <Bar {...commonBarProps} horizontal={true} variant={'stacked'}>
            <GridLines variant={'x'} />
            <Bars />
            <Axis variant={'top'} label={'Values (a.u.)'} />
            <Axis variant={'left'} />
            {Story()}
        </Bar>
    </Chart>
)

export const ChartForBarsLabelsDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 220]} padding={[30, 40, 30, 60]} style={{ display: 'inline-block' }}>
        <Bar data={barsLabelsData} keys={['value']} horizontal={true}>
            <GridLines variant={'x'} />
            <Axis variant={'left'}>
                <AxisTicks variant={'left'} tickSize={0} />
            </Axis>
            <Bars />
            {Story()}
        </Bar>
    </Chart>
)

export const onBarsClick = (data: BarInteractiveDataItem) => {
    console.log('clicked: ' + JSON.stringify(data))
}
