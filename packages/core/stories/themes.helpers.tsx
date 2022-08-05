import { Axis, BackgroundSurface, Chart, GridLines, Typography, View } from '../src'
import { ChartProps, ThemeSpec } from '../src'

export const customTheme: ThemeSpec = {
    typography: {
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
    width: 400,
    height: 300,
    padding: { top: 40, right: 40, bottom: 60, left: 60 },
}
export const CharWithAxisGridViewProps = {
    scaleX: {
        variant: 'linear',
        min: 0,
        max: 100,
    },
    scaleY: {
        variant: 'linear',
        min: 0,
        max: 100,
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
                <BackgroundSurface variant={'inner'} />
                <GridLines variant={'x'} values={5} />
                <GridLines variant={'y'} values={5} />
                <Axis variant={'left'} label={'Values (a.u.)'} />
                <Axis variant={'bottom'} label={'Values (a.u.)'} />
                <Typography x={0} y={-16} variant={'title'}>
                    Chart title
                </Typography>
            </View>
        </Chart>
    )
}
