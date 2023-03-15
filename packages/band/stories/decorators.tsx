import { ReactNode } from 'react'
import { Chart, Axis, Surface, GridLines, roundDecimalPlaces, AxisTicks } from '@chsk/core'
import {
    Bar,
    Bars,
    BarProps,
    Distribution,
    DistributionProps,
    Distributions,
    DistributionInteractiveDataItem,
    Strip,
    StripProps,
    Schedule,
    ScheduleInteractiveDataItem,
    ScheduleProps,
} from '../src/'
import dataGroups from './dataGroups.json'
import dataSchedules from './dataSchedules.json'
import { generateUniformValues } from './generators'
import { BarInteractiveDataItem, StripInteractiveDataItem } from '../src'

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

export const ChartDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
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

export const ChartWithLegendDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 80, 60]} style={{ display: 'inline-block' }}>
        <Surface variant={'inner'} />
        {Story()}
    </Chart>
)

export const onBarsClick = (data: BarInteractiveDataItem) => {
    console.log('clicked: ' + JSON.stringify(data))
}

/** bar charts */

export const barsLabelsData = [
    { id: 'alpha', value: 85 },
    { id: 'beta', value: 60 },
    { id: 'gamma', value: 50 },
    { id: 'delta', value: 25 },
    { id: 'epsilon', value: 5 },
]

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

/** quantile charts */

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

export const commonDistributionProps: DistributionProps = {
    data: dataRawValues,
    keys: ['x', 'y'],
    paddingInternal: 0.0,
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

export const ChartDistributionDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Distribution {...commonDistributionProps} horizontal={false}>
            <GridLines variant={'y'} />
            <Axis variant={'bottom'} />
            <Axis variant={'left'} label={'Values (a.u.)'} />
            {Story()}
        </Distribution>
    </Chart>
)

export const ChartHorizontalDistributionDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Distribution {...commonDistributionProps} horizontal={true}>
            <GridLines variant={'x'} />
            <Axis variant={'left'} />
            <Axis variant={'bottom'} label={'Values (a.u.)'} />
            {Story()}
        </Distribution>
    </Chart>
)

export const onDistributionsClick = (data: DistributionInteractiveDataItem) => {
    console.log('clicked: ' + JSON.stringify(data))
}

export const round2dp = (x: number) => String(roundDecimalPlaces(x, 2))

export const ChartDistributionWithTooltipDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Distribution {...commonDistributionProps} horizontal={false}>
            <GridLines variant={'y'} />
            <Axis variant={'bottom'} />
            <Axis variant={'left'} label={'Values (a.u.)'} />
            <Distributions medianStyle={{ stroke: '#000000', strokeWidth: 2 }} />
            {Story()}
        </Distribution>
    </Chart>
)

/** strip charts */

export const commonStripProps: StripProps = {
    data: dataRawValues,
    keys: ['x', 'y'],
    valueSize: 4,
    scaleIndex: {
        variant: 'band',
        domain: ['alpha', 'beta'],
        padding: 0.2,
    },
    scaleValue: {
        variant: 'linear',
        domain: [0, 'auto'],
    },
    paddingInternal: 0.2,
}

export const ChartStripDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Strip {...commonStripProps} horizontal={false}>
            <GridLines variant={'y'} />
            <Axis variant={'bottom'} />
            <Axis variant={'left'} label={'Values (a.u.)'} />
            {Story()}
        </Strip>
    </Chart>
)

export const onStripsClick = (data: StripInteractiveDataItem) => {
    console.log('clicked: ' + JSON.stringify(data))
}

/** schedule charts */

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
