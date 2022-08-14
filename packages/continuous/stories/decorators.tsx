import { ReactNode } from 'react'
import { Chart, Axis } from '@chask/core'
import { Scatter, ScatterCurve } from '../src/'
import data from './dataPolynomials.json'

export const ChartScatterDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Scatter
            data={data}
            x={'x'}
            y={'y'}
            r={5}
            scaleX={{
                variant: 'linear',
                domain: [0, 'auto'],
            }}
            scaleY={{
                variant: 'linear',
                domain: [0, 'auto'],
            }}
        >
            <Axis variant={'bottom'} label={'x (a. u.)'} />
            <Axis variant={'left'} label={'y (a. u.)'} />
            {Story()}
        </Scatter>
    </Chart>
)

export const ChartScatterQuadraticDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Scatter
            data={data}
            x={'x'}
            y={'y'}
            r={5}
            scaleX={{
                variant: 'linear',
                domain: [0, 'auto'],
            }}
            scaleY={{
                variant: 'linear',
                domain: [0, 'auto'],
            }}
        >
            <Axis variant={'bottom'} label={'x (a. u.)'} />
            <Axis variant={'left'} label={'y (a. u.)'} />
            <ScatterCurve series="quadratic" />
            {Story()}
        </Scatter>
    </Chart>
)
