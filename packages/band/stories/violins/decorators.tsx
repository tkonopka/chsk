import { ReactNode } from 'react'
import { Axis, Chart, GridLines } from '@chsk/core'
import { Violin, ViolinProps } from '../../src'
import { dataRawValues } from '../decorators'

export const commonViolinProps: ViolinProps = {
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
    paddingInternal: 0.2,
}

export const ChartViolinDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Violin {...commonViolinProps} horizontal={false} breaks={12}>
            <GridLines variant={'y'} />
            <Axis variant={'bottom'} />
            <Axis variant={'left'} label={'Values (a.u.)'} />
            {Story()}
        </Violin>
    </Chart>
)
