import { Axis, Surface, Chart, GridLines, Text, View } from '../src'
import { ChartProps, ThemeSpec } from '../src'
import { ViewProps } from '../dist/types'

export const customTheme: ThemeSpec = {
    text: {
        // title in regular font weight
        title: {
            fontWeight: 400,
        },
    },
    rect: {
        inner: {
            fill: '#f6f6f6',
        },
    },
    line: {
        // visible axis line
        axis: {
            stroke: '#222222',
            strokeWidth: '2px',
            visibility: 'visible' as const,
        },
        // grid lines in light gray
        grid: {
            stroke: '#cccccc',
            strokeWidth: '1px',
        },
        // tick line in a heavier color
        tick: {
            stroke: '#222222',
            strokeWidth: '2px',
        },
    },
    // tick lines facing into the chart
    AxisTicks: {
        left: {
            size: -6,
            padding: 6,
        },
        bottom: {
            size: -6,
            padding: 6,
        },
    },
}

export const CharWithAxisGridProps = {
    size: [400, 300] as [number, number],
    padding: [40, 40, 60, 60] as [number, number, number, number],
}
export const CharWithAxisGridViewProps: Pick<ViewProps, 'scaleX' | 'scaleY' | 'data'> = {
    scaleX: {
        variant: 'linear',
        domain: [0, 100],
    },
    scaleY: {
        variant: 'linear',
        domain: [0, 100],
    },
    data: [],
}

export const ChartWithAxisGrid = (args: ChartProps) => {
    const props = {
        ...CharWithAxisGridProps,
        ...args,
    }

    return (
        <Chart {...props}>
            <View {...CharWithAxisGridViewProps}>
                <Surface variant={'inner'} />
                <GridLines variant={'x'} values={5} />
                <GridLines variant={'y'} values={5} />
                <Axis variant={'left'} label={'Values (a.u.)'} />
                <Axis variant={'bottom'} label={'Values (a.u.)'} />
                <Text x={0} y={-16} variant={'title'}>
                    Chart title
                </Text>
            </View>
        </Chart>
    )
}
