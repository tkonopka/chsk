import { ReactNode } from 'react'
import { Axis, Chart, Surface, GridLines, View } from '@chask/core'
import { BarProps } from '@chask/band'

export const ChartDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 40, 40]} style={{ display: 'inline-block' }}>
        <Surface variant={'inner'} />
        {Story()}
    </Chart>
)

export const ChartBandViewAxisDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{ display: 'inline-block' }}>
        <Surface variant={'inner'} />
        <View
            scaleX={{
                variant: 'band',
                domain: ['A', 'B', 'C', 'D', 'E', 'F'],
                padding: 0.2,
            }}
            scaleY={{
                variant: 'linear',
                domain: [0, 100],
            }}
        >
            <GridLines variant={'x'} />
            <GridLines variant={'y'} />
            <Axis variant={'bottom'} />
            <Axis variant={'left'} />
            {Story()}
        </View>
    </Chart>
)

export const ChartLinearViewAxisDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 60, 60, 60]} style={{ display: 'inline-block' }}>
        <Surface variant={'inner'} />
        <View
            scaleX={{
                variant: 'linear',
                domain: [0, 100],
            }}
            scaleY={{
                variant: 'linear',
                domain: [0, 100],
            }}
        >
            <GridLines variant={'x'} />
            <GridLines variant={'y'} />
            <Axis variant={'bottom'} />
            <Axis variant={'left'} />
            {Story()}
        </View>
    </Chart>
)

export const barProps: BarProps = {
    data: [
        { id: 'alpha', x: 10 },
        { id: 'beta', x: 20 },
    ],
    keys: ['x'],
    horizontal: true,
    scaleIndex: {
        variant: 'band',
        domain: ['alpha', 'beta'],
        padding: 0.2,
    },
    scaleValue: {
        variant: 'linear',
        domain: [0, 'auto'],
    },
}
