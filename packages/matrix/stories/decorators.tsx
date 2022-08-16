import { ReactNode } from 'react'
import { Chart, Axis, GridLines } from '@chask/core'
import { HeatMap, HeatMapProps } from '../src/'

const data4x3 = [
    {
        id: 'alpha',
        x: 10,
        y: 20,
        z: 30,
    },
    {
        id: 'beta',
        x: 0,
        y: 15,
        z: 30,
    },
    {
        id: 'gamma',
        x: 30,
        y: 20,
        z: 10,
    },
    {
        id: 'epsilon',
        x: 15,
        y: 15,
        z: 15,
    },
]

export const commonProps: Pick<HeatMapProps, 'data' | 'keys'> = {
    data: data4x3,
    keys: ['x', 'y', 'z'],
}

export const ChartDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[60, 40, 40, 60]} style={{ display: 'inline-block' }}>
        {Story()}
    </Chart>
)

export const ChartHeatMapDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[60, 40, 40, 60]} style={{ display: 'inline-block' }}>
        <HeatMap {...commonProps}>
            <Axis variant={'top'} />
            <Axis variant={'left'} />
            {Story()}
        </HeatMap>
    </Chart>
)
