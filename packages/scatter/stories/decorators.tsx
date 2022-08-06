import { ReactNode } from 'react'
import { Chart, BackgroundSurface, View, Axis } from '@chask/core'

export const ChartDecorator = (Story: () => ReactNode) => (
    <Chart
        width={400}
        height={300}
        padding={{ top: 40, right: 40, bottom: 60, left: 60 }}
        style={{ display: 'inline-block' }}
    >
        <BackgroundSurface variant={'inner'} />
        {Story()}
    </Chart>
)
