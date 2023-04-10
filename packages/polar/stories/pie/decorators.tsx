import { ReactNode } from 'react'
import { Chart } from '@chsk/core'
import { Origin, Pie, Slices } from '../../src'

export const pieData = [
    { id: 'alpha', data: 55 },
    { id: 'beta', data: 20 },
    { id: 'gamma', data: 25 },
]

export const commonPieProps = {
    data: pieData,
}

export const ChartPieDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Pie {...commonPieProps}>
            <Origin>{Story()}</Origin>
        </Pie>
    </Chart>
)

export const ChartDoughnutDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Pie {...commonPieProps} rInner={0.6}>
            <Origin>{Story()}</Origin>
        </Pie>
    </Chart>
)

export const ChartPieSlicesDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Pie {...commonPieProps}>
            <Origin>
                <Slices style={{ fillOpacity: 0.9 }} />
                {Story()}
            </Origin>
        </Pie>
    </Chart>
)

export const ChartDoughnutSlicesDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Pie {...commonPieProps} rInner={0.6}>
            <Origin>
                <Slices style={{ fillOpacity: 0.9 }} />
                {Story()}
            </Origin>
        </Pie>
    </Chart>
)

export const OriginAndSlices = () => {
    return (
        <Origin>
            <Slices style={{ fillOpacity: 0.9 }} />
        </Origin>
    )
}
