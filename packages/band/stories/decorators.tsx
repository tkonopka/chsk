import { ReactNode } from 'react'
import { Chart, Axis, Surface, GridLines } from '@chsk/core'
import {
    Bar,
    Bars,
    BarProps,
    Quantile,
    QuantileProps,
    Strip,
    StripProps,
    QuantileInteractiveDataItem,
} from '../src/'
import dataGroups from './dataGroups.json'
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

export const commonQuantileProps: QuantileProps = {
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

export const onQuantilesClick = (data: QuantileInteractiveDataItem) => {
    console.log('clicked: ' + JSON.stringify(data))
}

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

export const ChartStripHorizontalDecorator = (Story: () => ReactNode) => (
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
