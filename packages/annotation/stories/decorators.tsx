import { ReactNode } from 'react'
import { Chart, BackgroundSurface } from '@chask/core'

export const ChartDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 40, 40]} style={{ display: 'inline-block' }}>
        <BackgroundSurface variant={'inner'} />
        {Story()}
    </Chart>
)
