import { ReactNode } from 'react'
import { Axis, Chart, GridLines } from '@chsk/core'
import { Strip, StripInteractiveDataItem, StripProps } from '../../src'
import { dataRawValues } from '../decorators'

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
