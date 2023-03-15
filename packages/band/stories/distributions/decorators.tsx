import {
    Distribution,
    DistributionInteractiveDataItem,
    DistributionProps,
    Distributions,
} from '../../src'
import { ReactNode } from 'react'
import { Axis, Chart, GridLines, roundDecimalPlaces } from '@chsk/core'
import { dataRawValues } from '../decorators'

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
            <Distributions middleStyle={{ stroke: '#000000', strokeWidth: 2 }} />
            {Story()}
        </Distribution>
    </Chart>
)
