import { Quantile, QuantileInteractiveDataItem, QuantileProps, Quantiles } from '../../src'
import { ReactNode } from 'react'
import { Axis, Chart, GridLines, roundDecimalPlaces } from '@chsk/core'
import { dataRawValues } from '../decorators'

export const commonQuantileProps: QuantileProps = {
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

export const ChartQuantileDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Quantile {...commonQuantileProps} horizontal={false}>
            <GridLines variant={'y'} />
            <Axis variant={'bottom'} />
            <Axis variant={'left'} label={'Values (a.u.)'} />
            {Story()}
        </Quantile>
    </Chart>
)

export const ChartHorizontalQuantileDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Quantile {...commonQuantileProps} horizontal={true}>
            <GridLines variant={'x'} />
            <Axis variant={'left'} />
            <Axis variant={'bottom'} label={'Values (a.u.)'} />
            {Story()}
        </Quantile>
    </Chart>
)

export const onQuantilesClick = (data: QuantileInteractiveDataItem) => {
    console.log('clicked: ' + JSON.stringify(data))
}

export const round2dp = (x: number) => String(roundDecimalPlaces(x, 2))

export const ChartQuantileWithTooltipDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Quantile {...commonQuantileProps} horizontal={false}>
            <GridLines variant={'y'} />
            <Axis variant={'bottom'} />
            <Axis variant={'left'} label={'Values (a.u.)'} />
            <Quantiles middleStyle={{ stroke: '#000000', strokeWidth: 2 }} />
            {Story()}
        </Quantile>
    </Chart>
)
