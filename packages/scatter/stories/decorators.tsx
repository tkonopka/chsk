import { ReactNode } from 'react'
import { Chart, Axis } from '@chask/core'
import { Scatter } from '../src/'
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
                min: 0,
                max: 8,
            }}
            scaleY={{
                variant: 'linear',
                min: 0,
                max: 64,
            }}
        >
            <Axis variant={'bottom'} label={'x (a. u.)'} />
            <Axis variant={'left'} label={'y (a. u.)'} ticks={5} />
            {Story()}
        </Scatter>
    </Chart>
)
