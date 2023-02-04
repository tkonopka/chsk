import { ReactNode } from 'react'
import { Axis, Surface, Chart, GridLines, Typography, View, mergeTheme } from '../src'
import { ChartProps, ThemeSpec, ViewProps } from '../src'

export const customCssTheme: ThemeSpec = {
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
}
export const customComponentsTheme: ThemeSpec = {
    // tick lines facing into the chart
    AxisTicks: {
        left: {
            tickSize: -6,
            labelOffset: 6,
        },
        bottom: {
            tickSize: -6,
            labelOffset: 6,
        },
    },
}
export const customTheme = mergeTheme(customCssTheme, customComponentsTheme)

export const CharWithAxisGridProps = {
    size: [400, 300] as [number, number],
    padding: [50, 40, 60, 60] as [number, number, number, number],
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
                <Typography position={[0, -16]} variant={'title'}>
                    Chart title
                </Typography>
            </View>
        </Chart>
    )
}

export const DivDecorator = (Story: () => ReactNode) => (
    <div style={{ margin: '0.5em', display: 'inline-block' }}>{Story()}</div>
)
