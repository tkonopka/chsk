import { ReactNode } from 'react'
import { Chart, Surface } from '@chsk/core'

export const viewSeriesIndexesKeys = {
    seriesIndexes: { X: 0, Y: 1 },
    keys: ['alpha', 'beta', 'gamma'],
}

export const ChartSymbolDecorator = (Story: () => ReactNode) => (
    <Chart size={[200, 140]} padding={[20, 20, 20, 20]} style={{ display: 'inline-block' }}>
        <Surface variant={'inner'} />
        {Story()}
    </Chart>
)
