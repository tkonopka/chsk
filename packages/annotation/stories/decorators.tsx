import { ReactNode } from 'react'
import { Chart, BackgroundSurface, View } from '@chask/core'

export const ChartDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[ 60, 60, 60, 60 ]}
        style={{ display: 'inline-block' }}
    >
        <BackgroundSurface variant={'inner'} />
        {Story()}
    </Chart>
)
