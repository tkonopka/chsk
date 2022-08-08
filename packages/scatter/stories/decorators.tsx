import { ReactNode } from 'react'
import { Chart, Axis } from '@chask/core'
import { Scatter } from '../src/'
import dataBigO from './dataBigO.json'

export const ChartScatterDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Scatter
            data={dataBigO}
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
            <Axis variant={'bottom'} label={'size of input'} />
            <Axis variant={'left'} label={'running time'} ticks={5} />
            {Story()}
        </Scatter>
    </Chart>
)
